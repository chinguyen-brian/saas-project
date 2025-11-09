export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductData {
    name: string;
    description?: string;
    price: number;
}

export interface UpdateProductData {
    name?: string;
    description?: string;
    price?: string;
}