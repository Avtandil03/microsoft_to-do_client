export interface IUser {
  id_users:number
  name: string;
  email: string;
  password: string;
  isActivated: boolean;
}

export interface IGenericResponse {
  status: string;
  message: string;
}