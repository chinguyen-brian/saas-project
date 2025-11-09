import { axiosPrivate, axiosPublic, logout } from '../lib/axios';
import { User } from '../types/user';

const login = async (email: string, password: string): Promise<User | null> => {
  const res = await axiosPublic.post('/auth/login', { email, password });
  localStorage.setItem('access_token', res.data.token);
  return res.data.user;
};

const me = async (): Promise<User> => {
  const res = await axiosPrivate.get('/auth/me');
  return res.data;
};

export const authService = {
  login,
  me,
  logout,
};
