import { prisma } from "@database/prismaClient";

export class FindDeliveriesByClientUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.clients.findMany({
      where: { id: id_client },
      include: { delivery: true }
    })

    return deliveries
  }
}