import { asyncHandler } from "../utils/asyncHandler.js";

// const registerUser = asyncHandler( async(req, res) => {
//     return res.status(200).json({
//        message: "Backend Adv"
// })})


// export {registerUser}

export const registerUser = (req, res) => {
  console.log("✅ registerUser controller hit");
  res.status(201).json({ message: "User registered successfully" });
};
