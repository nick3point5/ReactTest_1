export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  favorite_color: string;
  number_of_pets: number;
}

export interface UserData {
  userData: User;
}

export interface Params {
  id: string;
}
