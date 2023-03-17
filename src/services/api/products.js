import axios from "axios"
import endPoints from "@/services/api"

const addProduct = async (body) => {
    const config = {
        header: {
            accept: "*/*",
            "Content-Type": "application/json",
        }
    }
    const response = await axios.post(endPoints.products.addProducts, body, config)
    return response.data
}

export { addProduct }