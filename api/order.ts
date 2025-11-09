import { axiosPrivate } from '../lib/axios';
import { Order, CreateOrderData, GetOrdersFilter } from '../types/order';

const getAll = async (): Promise<Order[]> => {
  const res = await axiosPrivate.get('/orders');
  return res.data;
};

const getById = async (id: string): Promise<Order> => {
  const res = await axiosPrivate.get(`/orders/${id}`);
  return res.data;
};

const getByFilter = async (args: GetOrdersFilter): Promise<Order[]> => {
  const res = await axiosPrivate.get('/orders', { params: args });
  return res.data;
};

const create = async (data: CreateOrderData): Promise<Order> => {
  const res = await axiosPrivate.post('/orders', data);
  return res.data;
};

const updateStatus = async (id: string, status: string): Promise<Order> => {
  const res = await axiosPrivate.patch(`/orders/${id}`, { status });
  return res.data;
};

export const orderService = {
  getAll,
  getById,
  getByFilter,
  create,
  updateStatus,
};
