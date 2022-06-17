import { Router } from "express";

import { CreateClientController } from "@modules/clients/useCases/createClient/createClientController";
import { AuthenticateClientController } from "@modules/account/useCases/authenticateClient/AuthenticateClientController";
import { CreateDeliverymanController } from "@modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "@modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

routes.post('/clients', createClientController.handle)
routes.post('/clients/authenticate', authenticateClientController.handle)
routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)

export { routes }