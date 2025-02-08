import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig"; // Only import auth
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [phone, setPhone] = useState("+91"); // Ensure country code is included
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier( auth , 
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("reCAPTCHA Verified:", response);
          },
        },
       
      );
      window.recaptchaVerifier.render();
    }
  }, []);

  

const sendOTP = async () => {
    try {
      const appVerifier = window.recaptchaVerifier;
      if (!appVerifier) {
        alert("reCAPTCHA not initialized properly.");
        return;
      }
  
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(result);
      setStep(2);
      alert("OTP sent successfully!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Try again.");
    }
  };

  
  const verifyOTP = async () => {
    try {
      if (!confirmationResult) {
        alert("OTP was not sent properly. Please retry.");
        return;
      }
    const credential = await confirmationResult.confirm(otp);
    if(credential.user)
      setStep(3);
      alert("OTP verified! Now you can reset your password.");
    } catch (error) {
      console.error("OTP verification failed:", error);
      alert("Invalid OTP. Try again.");
    }
  };

  const resetPassword = () => {
    alert(`Password reset successfully! New password: ${password}`);
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      {step === 1 && (
        <>
          <h2>Forgot Password</h2>
          <input
            type="text"
            placeholder="Enter mobile number (e.g., +919876543210)"
            className="w-full px-3 py-2 border border-gray-800"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={sendOTP} className="bg-black text-white px-6 py-2 mt-3">Send OTP</button>
          <div id="recaptcha-container"></div> {/* reCAPTCHA container */}
        </>
      )}

      {step === 2 && (
        <>
          <h2>Enter OTP</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full px-3 py-2 border border-gray-800"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOTP} className="bg-black text-white px-6 py-2 mt-3">Verify OTP</button>
        </>
      )}

      {step === 3 && (
        <>
          <h2>Reset Password</h2>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full px-3 py-2 border border-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={resetPassword} className="bg-black text-white px-6 py-2 mt-3">Reset Password</button>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;







































// import { useState } from "react";
// import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebaseConfig";
// import { useNavigate } from "react-router-dom";

// const ForgotPassword = () => {
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [step, setStep] = useState(1);
//   const navigate = useNavigate();
//   //const [loading , setLoading] = useState(false);

 

//   const sendOTP = async () => {
//     try {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         "recaptcha-container",
//         { size: "invisible" },
//         auth
//       );

//       const result = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
//       setConfirmationResult(result);
//       setStep(2);
//       alert("OTP sent successfully!");
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       alert("Failed to send OTP. Try again.");
//     }
//   };

//   const verifyOTP = async () => {
//     try {
//       await confirmationResult.confirm(otp);
//       setStep(3);
//       alert("OTP verified! Now you can reset your password.");
//     } catch (error) {
//       console.error("OTP verification failed:", error);
//       alert("Invalid OTP. Try again.");
//     }
//   };

//   const resetPassword = () => {
//     alert(`Password reset successfully! New password: ${password}`);
//     navigate("/login") // Reset steps after password reset
//   };

//   return (
//     <div className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
//       {step === 1 && (
//         <>
//           <h2>Forgot Password</h2>
//           <input
//             type="text"
//             placeholder="Enter mobile number"
//             className="w-full px-3 py-2 border border-gray-800"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <button onClick={sendOTP} className="bg-black text-white px-6 py-2 mt-3">Send OTP</button>
//           <div id="recaptcha-container"></div>
//         </>
//       )}

//       {step === 2 && (
//         <>
//           <h2>Enter OTP</h2>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             className="w-full px-3 py-2 border border-gray-800"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button onClick={verifyOTP}>Verify OTP</button>
//         </>
//       )}

//       {step === 3 && (
//         <>
//           <h2>Reset Password</h2>
//           <input
//             type="password"
//             placeholder="Enter new password"
//             className="w-full px-3 py-2 border border-gray-800"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={resetPassword}>Reset Password</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default ForgotPassword;
