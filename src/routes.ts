import { Router } from "express";

import { ensureAuthenticateClient } from "@middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "@middlewares/ensureAuthenticateDeliveryman";
import { CreateClientController } from "@modules/clients/useCases/createClient/createClientController";
import { AuthenticateClientController } from "@modules/account/useCases/authenticateClient/AuthenticateClientController";
import { CreateDeliverymanController } from "@modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "@modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliveryController } from "@modules/delivery/useCases/createDelivery/CreateDeliveryController";
import { FindAllWithoutEndDateController } from "@modules/delivery/useCases/findAllWithoutEndDate/FindAllWithoutEndDateController";
import { UpdateDeliverymanController } from "@modules/delivery/useCases/updateDeliveryman/UpdateDeliverymanController";
import { FindDeliveriesByClientController } from "@modules/clients/useCases/findDeliveriesByClient/FindDeliveriesByClientController";
import { FindDeliveriesByDeliverymanController } from "@modules/deliveryman/useCases/findAllDeliveriesByDeliveryman/FindAllDeliveriesByDeliverymanController";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()
const findAllWithoutEndDateController = new FindAllWithoutEndDateController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findDeliveriesByClientController = new FindDeliveriesByClientController()
const findDeliveriesByDeliverymanController = new FindDeliveriesByDeliverymanController()

routes.post('/clients', createClientController.handle)
routes.get('/clients/deliveries', ensureAuthenticateClient, findDeliveriesByClientController.handle)
routes.post('/clients/authenticate', authenticateClientController.handle)
routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)
routes.get('/deliveryman/deliveries', ensureAuthenticateDeliveryman, findDeliveriesByDeliverymanController.handle)
routes.post('/delivery', ensureAuthenticateClient, createDeliveryController.handle)
routes.get('/delivery/available', ensureAuthenticateDeliveryman, findAllWithoutEndDateController.handle)
routes.put('/delivery/update-deliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle)

export { routes }