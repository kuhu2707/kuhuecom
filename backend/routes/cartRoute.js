import express from 'express'

// import { useLocation } from 'react-router-dom';

import { addToCart , updateCart , getUserCart } from '../controllers/cartController.js'
import authUser from '../middleware/Auth.js'

const cartRouter = express.Router()

cartRouter.post('/get',authUser,getUserCart)
cartRouter.post('/add',authUser,addToCart)
cartRouter.post('/update',authUser,updateCart)

export default cartRouter

