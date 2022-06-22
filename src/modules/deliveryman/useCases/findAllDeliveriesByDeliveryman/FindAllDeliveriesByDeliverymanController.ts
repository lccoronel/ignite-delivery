import { Request, Response } from "express";

import { FindDeliveriesByDeliverymanUseCase } from "./FindAllDeliveriesByDeliverymanUseCase";

export class FindDeliveriesByDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request

    const findDeliveriesByDeliverymanUseCase = new FindDeliveriesByDeliverymanUseCase()
    const result = await findDeliveriesByDeliverymanUseCase.execute(id_deliveryman)

    return response.json(result)
  }
}