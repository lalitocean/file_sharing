import mongoose from "mongoose"

const fileSchema = new mongoose.Schema({
    path: {
        type: String, required: true
    },
    name: {
        type: String, required: true
    },
    downloadcontent: {
        type: String, required: true, default: 0
    }
})

const File = mongoose.model('File', fileSchema)
export default File