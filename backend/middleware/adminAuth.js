import jwt from 'jsonwebtoken'

const adminAuth = async(req,res,next)=>{
    try {
        const {token} =req.headers
        if (!token) {
            return res.json({success:false,message:"Not Authorized , Login Again"})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        if (token_decode!==process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success:false,message:"Not Authorized , Login Again"})
        }
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false , message:error.message})
    }
}

export default adminAuth

// const adminAuth = async (req, res, next) => {
//     const authHeader = req.headers['authorization'];

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
//     }

//     const token = authHeader.split(' ')[1];

//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);

//         // Verify if the decoded token matches the admin credentials
//         if (token_decode !== `${process.env.ADMIN_EMAIL}${process.env.ADMIN_PASSWORD}`) {
//             return res.status(403).json({ success: false, message: "Access denied. Admin only." });
//         }

//         next();
//     } catch (error) {
//         console.error("JWT Error:", error);
//         return res.status(403).json({ success: false, message: "Invalid admin token." });
//     }
// };

//export default adminAuth;
