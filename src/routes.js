


import { Router } from 'express'
import usercontroller from './ap/controllers/usercontroller';


const routes =  new Router()


routes.post('/users', usercontroller.store );

export default routes;


