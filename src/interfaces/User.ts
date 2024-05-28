export interface UserRowData {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
}

export const UserAccess = {
  admin: 'admin',
  manager: 'manager',
  user: 'user'
}