import express from 'express'
import { usersRoutes } from './modules/users/routes'

export const routes = express.Router()

routes.use('/users', usersRoutes)
