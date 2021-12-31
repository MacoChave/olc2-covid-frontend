import axios from "axios"

const host = ' http://127.0.0.1'
const port = ':5000'
const baseURL = `${host}${port}`

export const prediceService = (data) => {
    axios.post(`${baseURL}/predict`, data)
}

export const TrendService = (data) => {
    axios.post(`${baseURL}/trend`, data)
}

export const PercentageService = (data) => {
    axios.post(`${baseURL}/percentage`, data)
}