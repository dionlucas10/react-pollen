import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:8080"
})

// Interceptor para adicionar token nas requisições
api.interceptors.request.use(config => {
  const token = localStorage.getItem("authToken")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export async function loginUser(credentials) {
  return api.post("/usuario/login", credentials)
}

export async function registerUser(credentials) {
  return api.post("/usuario", credentials)
}

export default api