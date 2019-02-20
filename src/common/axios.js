import axios from 'axios'

var instance = axios.create({
    baseURL: process.env.API_URL + '/api/v1',
})

export default instance
