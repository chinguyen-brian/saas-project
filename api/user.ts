import { axiosPrivate } from '../lib/axios';
import { UpdateUserProfile, User } from '../types/user';

const updateProfile = async (data: UpdateUserProfile): Promise<User> => {
  const res = await axiosPrivate.patch('/users/me', data);
  return res.data;
};

const getAll = async (): Promise<User[]> => {
  const res = await axiosPrivate.get('/users');
  return res.data;
};

const getById = async (id: string): Promise<User> => {
    const res = await axiosPrivate.get(`/users/${id}`)
    return res.data;
}

const deactivate = async (id: string): Promise<User> => {
    const res =await axiosPrivate.patch(`/users/${id}`, {active: false});
    return res.data;
}

const activate = async (id: string): Promise<User> => {
    const res =await axiosPrivate.patch(`/users/${id}`, {active: true});
    return res.data;
}

export const userService = {
    updateProfile,
    getAll,
    getById,
    deactivate,
    activate,
}