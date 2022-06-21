import { Request, Response } from "express";

import { FindDeliveriesByClientUseCase } from "./FindDeliveriesByClientUseCase";

export class FindDeliveriesByClientController {
  async handle(request: Request, response: Response) {
    const { id_client } = request

    const findDeliveriesByClientUseCase = new FindDeliveriesByClientUseCase()
    const result = await findDeliveriesByClientUseCase.execute(id_client)

    return response.json(result)
  }
}