import axios from 'axios'

const defaultConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {'Content-type': 'application/json'}
}

export default axios.create(defaultConfig)
