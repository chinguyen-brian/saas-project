'use client';

import Image from 'next/image';
import { Product } from '../../../types/product';
import Link from 'next/link';

interface ProductCardProps {
  item: Product;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const saved = item.salePrice ? item.price - item.salePrice : 0;

  return (
    <Link href={`/product/${item.id}`}>
      <div className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition p-3 select-none">
        {item.tag && (
          <div className="absolute top-0 right-0 bg-blue-400 text-white text-xs font-bold px-2 py-1 rounded-bl-2xl max-w-12 wrap-break-words text-center z-20">
            {item.tag}
          </div>
        )}

        <div className="relative w-full aspect-square mb-3">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-10">
          {item.name}
        </h3>

        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-bold ">
            $
            {item.salePrice
              ? item.salePrice.toLocaleString()
              : item.price.toLocaleString()}
          </span>
          {item.salePrice && (
            <span className="text-sm text-gray-500 line-through">
              ${item.price.toLocaleString()}
            </span>
          )}
        </div>

        {saved > 0 && (
          <p className="text-xs text-green-600 font-medium mt-1">
            Save ${saved.toLocaleString()}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
