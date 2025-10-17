import { UsersServices } from "../services/users-services";

export class UsersController {

    static async create(req, res){

        const user = await UsersServices.create()
        res.status(200).send(user)

    }

}