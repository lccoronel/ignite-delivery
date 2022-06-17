import { hash } from 'bcrypt'
import { Deliveryman } from '@prisma/client'

import { prisma } from "@database/prismaClient"

interface ICreteDeliveryman {
  username: string
  password: string
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreteDeliveryman): Promise<Deliveryman> {
    const deliverymanExist = await prisma.deliveryman.findFirst({ 
      where: { username: { mode: 'insensitive' } } 
    })

    if (deliverymanExist) throw new Error("Deliveryman already exists");

    const hashPassword = await hash(password, 10)

    const deliveryman = await prisma.deliveryman.create({
      data: { username, password: hashPassword }
    })

    return deliveryman
  }
}
