import express from 'express'
import { createUser, getallUser, getUserbyId, queryUser } from '../userController/userController.js'
export const userRoute = express.Router()
userRoute.post('/user/add', createUser)
userRoute.get('/users', getallUser)
userRoute.get('/user/:_id', getUserbyId)
userRoute.get('/user', queryUser)






