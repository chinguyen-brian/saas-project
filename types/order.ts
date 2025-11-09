import { CartItem } from './cart';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  shippingAddress: string;
  paymentMethod: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderData {
  items: CartItem[];
  shippingAddress: string;
  paymentMethod: string;
}

export interface GetOrdersFilter {
  status?: string;
  fromDate?: string;
  toDate?: string;
  page?: number;
  limit?: number;
}

