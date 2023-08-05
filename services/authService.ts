import $api from '@/http'
import { AxiosResponse } from 'axios'

export interface IUser {
  id_users?: number
  name?: string
  email: string
  password: string
  activateLink?: string
  isActivated?: boolean
}

interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return await $api.post<AuthResponse>('/login', { email, password })
  }
  static async registration(
    name: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return await $api.post<AuthResponse>('/registration', {
      name,
      email,
      password,
    })
  }
  static async logout(): Promise<void> {
    await $api.post<AuthResponse>('/logout')
  }
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return await $api.get<IUser[]>('/users')
  }
}
