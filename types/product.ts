export interface Product {
  name: string;
  price: number;
  image: string;
  id?: string;
  description?: string;
  salePrice?: number;
  tag?: string;
  createdAt?: string;
  updatedAt?: string;
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

export interface Category{
  name: string;
  image: string;
}