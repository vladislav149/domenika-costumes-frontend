import axios from 'axios'

// const loginConfig = {
//   baseURL: process.env.VUE_APP_BASE_URL,
//   headers: {'Content-type': 'application/json'}
// }

const defaultConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {'Content-type': 'application/json'}
}

// const token = localStorage.getItem('token')
// if (token) loginConfig.headers.Authorization = `Bearer ${token}`

// export const loginApiInstance = axios.create(loginConfig)
export const defaultApiInstance = axios.create(defaultConfig)

// loginApiInstance.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('token')
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   err => {
//     return Promise.reject(err)
//   }
// )

// loginApiInstance.interceptors.response.use(
//   res => {
//     const token = localStorage.getItem('token')
//     if (token) {
//       res.headers.Authorization = `Bearer ${token}`
//     }
//     return res
//   },
//   err => {
//     return Promise.reject(err)
//   }
// )

// defaultApiInstance.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('token')
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   err => {
//     return Promise.reject(err)
//   }
// )

// defaultApiInstance.interceptors.response.use(
//   res => {
//     const token = localStorage.getItem('token')
//     if (token) {
//       res.headers.Authorization = `Bearer ${token}`
//     }
//     return res
//   },
//   err => {
//     return Promise.reject(err)
//   }
// )
