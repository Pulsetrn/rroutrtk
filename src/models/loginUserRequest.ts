export interface IUserLoginResponse {
  user: { id: string; email: string; password: undefined; name: string };
  token: string
}
