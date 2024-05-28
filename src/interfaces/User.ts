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

export interface IProfileForm {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
}