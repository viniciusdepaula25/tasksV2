import { Router } from "express";
import { UsersController } from "../controllers/users-controller";


export const usersRoutes = Router()

usersRoutes.post('/', UsersController.create)
usersRoutes.get('/', (req, res) =>{
    res.status(200).send({
        message: true
    })
})