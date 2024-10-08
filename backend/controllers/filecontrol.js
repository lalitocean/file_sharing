import dotenv from 'dotenv';
import File from '../models/file.model.js';
dotenv.config();
export const uploadimage = async (req, res) => {

    const fileobj = {
        path: req.file.path,
        name: req.file.originalname
    }
    try {
        const file = new File(fileobj)
        await file.save();
        console.log(file)
        res.status(200).json({ path: `https://file-sharing-taupe.vercel.app/api/v1/file/${file._id}` })
    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            message: "something went wrong"
        })
    }
}

export const downloadresource = async (req, res) => {
    const params = req.params.fileid
    try {
        const fileaddress = await File.findById(params)
        fileaddress.downloadcontent++;
        await fileaddress.save();
        res.download(fileaddress.path, fileaddress.name)
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}

