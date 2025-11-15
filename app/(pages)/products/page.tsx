'use client';

import { useState } from 'react';
import Breadcrumbs from '../../../components/common/Breadcrumbs';
import ProductCard from '../../../components/common/item/ProductCard';
import ListItem from '../../../components/common/ListItem';
import FilterSortBar from '../../../components/products/FilterSort';
import { Product } from '../../../types/product';
import mockProducts from '@/mock/productList.json';
import Button from '../../../components/ui/Button';
import { BiChevronDown } from 'react-icons/bi';

const totalProducts = 54;
const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>(
    Array.from({ length: 4 }).flatMap(() => mockProducts)
  );
  const remaining = totalProducts - products.length;

  const onClickMore = () => {
    if (remaining >= 20) {
      setProducts([
        ...products,
        ...Array.from({ length: 4 }).flatMap(() => mockProducts),
      ]);
    } else
      setProducts([
        ...products,
        ...Array.from({ length: remaining / 6 }).flatMap(() => mockProducts),
      ]);
  };
  console.log('mockProducts =', mockProducts);
  console.log(products);
  return (
    <div className="flex flex-col gap-4 py-10">
      <Breadcrumbs />
      <FilterSortBar />
      <ListItem
        data={products}
        className="grid-cols-2  lg:grid-cols-3 xl:grid-cols-6"
        renderItem={(item) => <ProductCard item={item as Product} />}
      />
      {remaining != 0 && (
        <div className="mx-auto">
          <Button
            className="flex px-4 justify-center items-center"
            onClick={onClickMore}
          >
            Show {Math.min(24, remaining)} more
            <BiChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
