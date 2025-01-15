import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
//import {router} from 'router'

const app = express()
const allowedOrigins = ['https://kuhuecom.vercel.app', 'https://kuhuecom-3rmc.vercel.app','https://kuhuecomfr.onrender.com'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin)!== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods:['GET' , 'POST' , 'PUT' , 'DELETE'],
   credentials:true,
}));

// app.use(cors({origin:"https://kuhuecom-3rmc.vercel.app/"}));
// //app.use(cors())
// const router = express.Router();
// router.options("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin")
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Max-Age", "1800");
//   res.setHeader("Access-Control-Allow-Headers", "content-type");
//   res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
//    });



const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())


//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
  res.send('API working')

})

// app.listen(port , ()=>console.log('Server started on PORT : ' + port))
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
server.setTimeout(300000); // 5 minutes

