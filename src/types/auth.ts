export interface CustomRole {
  id: string;
  key: string;
  name: string;
  permissions: string[];
}

export interface UserProfile {
  id: string;
  role: string;
  email: string;
}
