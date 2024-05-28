export interface TeamRowData {
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

export interface InvoicesRowData {
  id: number;
  name: string;
  email: string;
  cost: string;
  phone: string;
  date: string;
}