import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get() //GET /users or /users?role=value
  findAll(@Query('role') role?: "admin" | "staff" | "interns") {
    return this.userService.findAll(role)
  }

  // Akan didahulukan route jika di paling awal
  // @Get(`interns`) //GET /users/interns
  // findAllInterns(){
  //   return []
  // }

  @Get(`:id`) //GET /users/:id
  findOne(@Param(`id`, ParseIntPipe) id: number) {
    return this.userService.findOne(id)
  }

  @Post() //POST /users
  create(@Body(ValidationPipe) createUserDto:CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Patch(`:id`) //PATCH /users/:id
  update(@Param(`id`,ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto:UpdateUserDto) {
    return this.userService.update(id, updateUserDto)
  }

  @Delete(`:id`) //DELETE /users/:id
  delete(@Param(`id`,ParseIntPipe) id: number) {
    return this.userService.delete(id)
  }

}
