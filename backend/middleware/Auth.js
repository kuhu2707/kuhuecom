import jwt from 'jsonwebtoken'

// const authUser = async(req,res,next)=>{
  
//     const {token} = req.headers;

//     if (!token) {
//         return res.json({succes:false , message:"Not Authorized Login Again"});
//     }


//     try {
        
//        const token_decode = jwt.verify(token , process.env.JWT_SECRET)
//         req.body.userId = token_decode.id
//         next()
//     } catch (error) {
//         console.log(error)
//         res.json({success:false , message : error.message})
        
//     }
// }  
const authUser = async (req, res, next) => {
    const { token } = req.headers;
  
    if (!token) {
      return res.json({ success: false, message: "Not Authorized Login Again" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.body.userId = decoded.id; // Attach userId to the request
      next();
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Not Authorized Login Again" });
    }
  };
  
export default authUser;

// const authUser = async (req, res, next) => {
//     const authHeader = req.headers['authorization'];

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
//     }

//     const token = authHeader.split(' ')[1]; // Extract the token part

//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId = token_decode.id; // Attach the user ID to the request body
//         next();
//     } catch (error) {
//         console.error("JWT Error:", error);
//         return res.status(401).json({ success: false, message: "Invalid token." });
//     }
// };

//export default authUser;
