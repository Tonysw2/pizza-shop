import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import { env } from '@/env'

export default class HttpClient {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: env.VITE_API_URL,
    })
  }

  get(path: string, options?: AxiosRequestConfig) {
    return this.api.get(path, { ...options, method: 'GET' })
  }

  post(path: string, data?: any, options?: AxiosRequestConfig) {
    return this.api.post(path, data, { ...options, method: 'POST' })
  }

  put(path: string, data?: any, options?: AxiosRequestConfig) {
    return this.api.put(path, data, { ...options, method: 'PUT' })
  }

  delete(path: string, options?: AxiosRequestConfig) {
    return this.api.delete(path, { ...options, method: 'DELETE' })
  }
}
