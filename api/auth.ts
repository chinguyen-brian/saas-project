import { axiosPrivate, axiosPublic } from '../lib/axios';
import { User } from '../types/user';

const login = async (email: string, password: string): Promise<User | null> => {
  const res = await axiosPublic.post('/auth/login', { email, password });
  sessionStorage.setItem('access_token', res.data.token);
  return res.data.user;
};

const me = async (): Promise<User> => {
  const res = await axiosPrivate.get('/auth/me', { _skipRedirect401: true });
  return res.data;
};

const logout = async () => {
  try {
    await axiosPublic.post('/auth/logout', {}, { withCredentials: true });
  } catch (err) {
    console.error('Failed to logout on server:', err);
  } finally {
    sessionStorage.removeItem('access_token');
    location.replace("/login")
  }
};

export const authService = {
  login,
  me,
  logout,
};
