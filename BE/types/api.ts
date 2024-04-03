export interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
  lastname: string;
  country: string;
}

export interface UserResponse {
  id: number;
  email: string;
  password: string;
  name: string;
  lastname: string;
  country: string;
}

export interface SigninRequest {
  email: string;
  password: string;
}
