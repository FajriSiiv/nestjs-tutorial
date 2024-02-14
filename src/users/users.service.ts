import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      "id": 1,
      "name": "Fajri",
      "email": "email1@gmail.com",
      "role": "admin"
    },
    {
      "id": 2,
      "name": "Fajri 2",
      "email": "email2@gmail.com",
      "role": "staff"
    },
    {
      "id": 3,
      "name": "Fajri 3",
      "email": "email3@gmail.com",
      "role": "interns"
    },
    {
      "id": 5,
      "name": "Fajri 5",
      "email": "email5@gmail.com",
      "role": "staff"
    },
    {
      "id": 4,
      "name": "Fajri 4",
      "email": "email4@gmail.com",
      "role": "interns"
    },

  ]

  findAll(role?: "interns" | "staff" | "admin") {
    if (role) {
      const rolesArray = this.users.filter(user => user.role === role)

      if(rolesArray.length === 0) throw new NotFoundException("User Role Not Found")

      return rolesArray
    }

    return this.users

  }
  findOne(id: number) {
    const user = this.users.find(user => user.id === id)

    if(!user) throw new NotFoundException("User not found")

    return user
  }

  create(createUserDto:CreateUserDto){
    const usersByHighestId = [...this.users].sort((a,b) => b.id- a.id)

    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto
    }

    this.users.push(newUser)
    return newUser
  }

  update(id:number,updateUserDto: UpdateUserDto ){
    this.users = this.users.map(user => {
      if(user.id === id){
        return {...user,...updateUserDto}
      }

      return user
    })

    return this.findOne(id)
  }

  delete(id:number){
    const removeUser = this.findOne(id)

    this.users = this.users.filter(user => user.id !== id)

    return removeUser

  }
}
