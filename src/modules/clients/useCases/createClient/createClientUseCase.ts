import { Clients } from '@prisma/client'
import { hash } from 'bcrypt'

import { prisma } from "@database/prismaClient"

interface ICreteClient {
  username: string
  password: string
}

export class CreateClientUseCase {
  async execute({ username, password }: ICreteClient): Promise<Clients> {
    const clientExist = await prisma.clients.findFirst({ 
      where: { 
        username: { 
          mode: 'insensitive', 
          equals: username 
        } 
      } 
    })

    if (clientExist) throw new Error("Client already exists");

    const hashPassword = await hash(password, 10)

    const client = await prisma.clients.create({
      data: { username, password: hashPassword }
    })

    return client
  }
}
