import axios from "axios"

const api = axios.create({
    baseURL: 'https://userhubgymrats.onrender.com/api'
})

export default api