import { axiosPublic, axiosPrivate } from '../lib/axios';
import {
  CreateProductData,
  Product,
  UpdateProductData,
} from '../types/product';

const getAll = async (offset: number, limit: number): Promise<Product[]> => {
  const res = await axiosPublic.get('/products', { params: { offset, limit } });
  return res.data;
};

const getById = async (id: string): Promise<Product> => {
  const res = await axiosPublic.get(`/products/${id}`);
  return res.data;
};

const create = async (data: CreateProductData): Promise<Product> => {
  const res = await axiosPrivate.post('/products', data);
  return res.data;
};

const update = async (
  id: string,
  data: UpdateProductData
): Promise<Product> => {
  const res = await axiosPrivate.patch(`/products/${id}`, data);
  return res.data;
};

const del = async (id: string): Promise<void> => {
  await axiosPrivate.delete(`/products/${id}`);
};

export const productService = {
  getAll,
  getById,
  create,
  update,
  del,
};
