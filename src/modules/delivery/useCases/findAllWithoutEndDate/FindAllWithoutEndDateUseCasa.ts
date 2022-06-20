import { prisma } from "@database/prismaClient";
import { Delivery } from "@prisma/client";

export class FindAllWithoutEndDateUseCase {
  async execute(): Promise<Delivery[]> {
    const deliveries = await prisma.delivery.findMany({ where: { end_at: null } })

    return deliveries
  }
}