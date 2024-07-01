import { Router } from "express";
import { create, list, update } from "./middlewares/controllers"

const userRouter = Router()

userRouter
    .route('/user')
    .get(list)
    .post(create)
    .patch(update)

export { userRouter }
