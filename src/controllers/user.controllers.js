import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {user} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/utils/ApiResponse.js";

const registerUser = asyncHandler( async(req, res) => {
   // get user detail from frontend
   // validation - not empty
   // check if user already exist: username, email
   // check for images , check for avatar
   // upload them to cloudinary, avatar
   // create user object- create entry in db
   // remove password nd refresh toekn field
   // chech for user creation
   // return res

   const {fullName, email, username, password } = req.body
   console.log("email:", email);
     
     if ([fullName, email, username, password].some((field) => field?.trim() ==="")) 
        {
            throw new ApiError(400, "All fields are required")
         }
   
          const existedUser = User.findOne({
            $or: [{ userName }, { email }]
          })
          if(existedUser){
            throw new ApiError(409, "user with email or username already exists")
          }


          const avatarLocalPath = req.files?.avatar[0]?.path;
          const coverImageLocalPath = req.files?.coverImage[0]?.path;

          if (!avatarLocalPath) {
            throw new ApiError(400, "Avatar file is required")
          }

          const avatar = await uploadOnCloudinary(avatarLocalPath)
          const coverImage = await uploadOnCloudinary(coverImageLocalPath)

          if (!avatar) {
            throw new ApiError(400, "Avatar file is required")
            
          }

          const user = await User.create({
            fullName,
            avatar: avatar.url,
            coverImage: coverImage?.url || "",
            email,
            password,
            username: username.toLowerCase()

          })

          const createdUser= await user.findById(user._id).select(
            "-password -refreshToken"
          )

          if(!cretedUser){
            throw new ApiError(500,"Something went wrong while registering the user")
          }


   })

   return res.status(201).json(
    new ApiResponse(200, createdUser, "User registeres successfully")
   )


export {registerUser}














// export const registerUser = (req, res) => {
//   console.log("registerUser controller hit");
//   res.status(201).json({ message: "User registered successfully" });
// };
