import axios from 'axios'
const apiurl = 'http://127.0.0.1:3000/api/v1'

export const uploadfile = async (data) => {
    try {

        const response = await axios.post(`${apiurl}/upload`, data)
        return response
    } catch (error) {
        console.log("i'm inside upload js file ", error.message)
    }
}