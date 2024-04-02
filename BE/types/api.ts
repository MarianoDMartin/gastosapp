export interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
  lastname: string;
  country: string;
}

export interface CreateUserResponse {
  id: number;
  email: string;
  password: string;
  name: string;
  lastname: string;
  country: string;
}
