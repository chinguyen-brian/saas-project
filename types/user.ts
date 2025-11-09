export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateUserProfile {
    name?: string;
}
