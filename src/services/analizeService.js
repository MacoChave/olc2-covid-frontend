import axios from "axios"

const host = ' http://127.0.0.1'
const port = ':5000'
const baseURL = `${host}${port}`

export const prediceService = async (body) => {
    const { data } = await axios.post(`${baseURL}/predict`, body)
    return data
}

export const TrendService = async (body) => {
    const { data } = await axios.post(`${baseURL}/trend`, body)
    return data
}

export const PercentageService = async (body) => {
    const { data } = await axios.post(`${baseURL}/percentage`, body)
    return data
}