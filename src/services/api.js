import axios from 'axios'

const api = 'https://run.mocky.io/v3/f4284bf9-7340-412c-89aa-d46bd9be8de9'

export default axios.create({
    baseURL: api,
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    }
})