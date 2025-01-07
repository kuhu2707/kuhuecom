
import userModel from "../models/userModel.js";

//add products to user cart
const addToCart =async(req , res)=>{
   try {
    const {userId , itemId , size }= req.body 

    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData;

    if (cartData[itemId]) {
       if (cartData[itemId][size]) {
        cartData[itemId][size]+=1
       }
       else{
        cartData[itemId][size] = 1
       }
    }
    else{
      cartData[itemId]={}
      cartData[itemId][size]=1
    }
    


    await userModel.findByIdAndUpdate(userId , {cartData})

    res.json({success:true , message:"Added To Cart"})

   } catch (error) {
      console.log(error)
      res.json({success:false , message:error.message})
   }
}


//update to user cart
const updateCart =async(req , res)=>{
  try {
    
    const {userId , itemId , size , quantity} = req.body 

    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

  
    await userModel.findByIdAndUpdate(userId , {cartData})

    res.json({success:true , message:"Cart Updated"})


  } catch (error) {
    console.log(error)
    res.json({success:false , message:error.message})
  }
}



//get user cart data
const getUserCart =async(req , res)=>{
   
  try {
    
    const {userId} = req.body

    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData;
    // console.log(cartData)

    res.json({success:true , cartData});

  } catch (error) {
    console.log(error)
    res.json({success:false , message:error.message})
  }
}

export{addToCart , updateCart , getUserCart} 
















































// import userModel from "../models/userModel.js";

// // Add products to user cart
// const addToCart = async (req, res) => {
//   try {
//     const { userId, itemId, size } = req.body;

//     // Validate input
//     if (!userId || !itemId || !size) {
//       return res.status(400).json({ success: false, message: "Invalid input" });
//     }

//     // Fetch user data
//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     // Initialize cartData if not present
//     let cartData = userData.cartData || {};

//     // Check and update the cart
//     if (!cartData[itemId]) {
//       cartData[itemId] = {};
//     }
//     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

//     // Update user cart data in the database
//     await userModel.findByIdAndUpdate(userId, { cartData });

//     res.json({ success: true, message: "Added to Cart" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Update user cart
// const updateCart = async (req, res) => {
//   try {
//     const { userId, itemId, size, quantity } = req.body;

//     // Validate input
//     if (!userId || !itemId || !size || quantity == null) {
//       return res.status(404).json({ success: false, message: "Invalid input" });
//     }

//     // Fetch user data
//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     // Initialize cartData if not present
//     let cartData = userData.cartData || {};

//     // Ensure item and size exist
//     if (!cartData[itemId]) {
//       cartData[itemId] = {};
//     }
//     cartData[itemId][size] = quantity;

//     // Update user cart data in the database
//     await userModel.findByIdAndUpdate(userId, { cartData });

//     res.json({ success: true, message: "Cart Updated" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Get user cart data
// const getUserCart = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     // Validate input
//     if (!userId) {
//       return res.status(400).json({ success: false, message: "Invalid input" });
//     }

//     // Fetch user data
//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     res.json({ success: true, cartData: userData.cartData || {} });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// export { addToCart, updateCart, getUserCart };
































// import userModel from "../models/userModel.js";

// // add user cart

// const addToCart = async (req, res) => {
//   try {
//     const { userId, itemId, size } = req.body;

//     const userData = await userModel.findById(userId);

//      if (!userData.cartData) {
//       userData.cartData = {};
//      }

//     let cartData = await userData.cartData;
         
//   //   if (!cartData?.[itemId]) {
//   //     cartData[itemId] = {};
//   // }
//   // cartData[itemId][size] = 1;



//     if (cartData[itemId]) {
//       if (cartData[itemId][size]) {
//         cartData[itemId][size] += 1;
//       } else {
//         cartData[itemId][size] = 1;
//       }
//     } else {
//       cartData[itemId] = {};
//       cartData[itemId][size] = 1;
//     }

//     await userModel.findByIdAndUpdate(userId, { cartData });

//     res.json({ success: true, message: "Added to Cart" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// //update user cart
// const updateCart = async (req, res) => {
//   try {
//     const { userId, itemId, size, quantity } = req.body;

//     const userData = await userModel.findById(userId);
//     let cartData = await userData.cartData;

//     cartData[itemId][size] = quantity;

//     await userModel.findByIdAndUpdate(userId, { cartData });

//     res.json({ success: true, message: "Cart Updated" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // const updateCart = async (req, res) => {
// //   try {
// //     const { userId, itemId, size, quantity } = req.body;

// //     const userData = await userModel.findById(userId);
// //     let cartData = await userData.cartData;

// //     // Check if cartData[itemId] exists
// //     if (!cartData[itemId]) {
// //       cartData[itemId] = {};
// //     }

// //     cartData[itemId][size] = quantity;

// //     await userModel.findByIdAndUpdate(userId, { cartData });

// //     res.json({ success: true, message: "Cart Updated" });
// //   } catch (error) {
// //     console.error(error);
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// //get user cart data
// const getUserCart = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     const userData = await userModel.findById(userId);
// //     const user = await User.findById(userId);
// // if (!user) {
// //   return res.status(404).json({ error: 'User not found' });


//     let cartData = await userData.cartData;
     
//     res.json({ success: true, cartData });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// export { addToCart, updateCart, getUserCart };
