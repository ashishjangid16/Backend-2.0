import { v2 as cloudinary} from "cloudinary";

import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        //upload the file on cloudinary
        const responce = awaitcloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been succesfully uploaded
        console.log("file is uploaded on cloudinary", responce.url);
        return responce;

        
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally file as upload operation got failed
        return null;
    }
}

export { uploadOnCloudinary}

// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//     {public_id: "olympic_flag"},
//     function(error, result) {console.log(result);});