import axios from "axios"

const host = 'http://127.0.0.1' // 'http://3.134.194.50' //'http://127.0.0.1'
const port = ':5000'
const baseURL = `${host}${port}`

/**
 * Subir archivo al servidor
 * @param {string} filename Nombre del archivo
 * @param {File} file Archivo a subir
 * @returns {Promise}
 */
export const uploadDataFile = async (file, ext) => {
    let formData = new FormData()
    formData.append('file', file)
    return axios.post(
        `${baseURL}/upload`,
        formData,
        {
            headers: {
                'Content-type': 'multipart/form-data'
            },
            params: { ext }
        }
    )
}

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

export const analysisService = async (body) => {
    const { data } = await axios.post(`${baseURL}/analysis`, body)
    return data
}