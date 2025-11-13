import { authService } from './../api/auth';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry?: boolean;
    _skipRedirect401?: boolean;
  }
}

export const axiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// ----------------- Refresh token function -----------------
async function refreshAccessToken(): Promise<string | null> {
  try {
    const res = await axiosPublic.post(
      '/auth/refresh-token',
      {},
      { withCredentials: true } // cookie HttpOnly
    );
    const newAccessToken = res.data.accessToken;
    sessionStorage.setItem('access_token', newAccessToken);
    return newAccessToken;
  } catch (err) {
    console.log(err);
    return null;
  }
}

// ----------------- Handle 401 + refresh -----------------
async function handle401(err: AxiosError & { config: AxiosRequestConfig }) {
  const originalRequest = err.config;
  if (err.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const newToken = await refreshAccessToken();
    if (newToken) {
      originalRequest.headers?.set?.('Authorization', `Bearer ${newToken}`);
      return axiosPrivate(originalRequest);
    }else{
      if (!originalRequest._skipRedirect401) {
        await authService.logout();
      }
    }
  }
  return Promise.reject(err);
}

export const axiosPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axiosPrivate.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('access_token');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
axiosPrivate.interceptors.response.use((res) => res, handle401);
