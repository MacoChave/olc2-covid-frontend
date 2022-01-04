import axios from "axios"

const host = 'http://http://3.134.194.50/' //'http://127.0.0.1'
const port = '' //':5000'
const baseURL = `${host}${port}`

export const prediceService = async (body) => {
    const { data } = await axios.post(`${baseURL}/predict`, body)
    return data
}

export const trendService = async (body) => {
    const { data } = await axios.post(`${baseURL}/trend`, body)
    return data
}

export const percentageService = async (body) => {
    const { data } = await axios.post(`${baseURL}/percentage`, body)
    return data
}

export const rateService = async (body) => {
    const { data } = await axios.post(`${baseURL}/rate`, body)
    return data
}