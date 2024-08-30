import axios from 'axios'
const apiurl = 'https://file-sharing-taupe.vercel.app/api/v1'

export const uploadfile = async (data) => {
    try {

        const response = await axios.post(`${apiurl}/upload`, data)
        return response
    } catch (error) {
        console.log("i'm inside upload js file ", error.message)
    }
}