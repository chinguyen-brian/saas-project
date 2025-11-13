'use client';

import Image from 'next/image';
import { Category } from '../../../types/product';
import Link from 'next/link';

interface CategoryCardProps {
  item: Category;
}

const CategoryCard = ({ item }: CategoryCardProps) => {
  return (
    <Link href={`/product?c=${item.name}`}>
      <div className="relative text-center">
        <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden shadow hover:shadow-lg">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-10">
          {item.name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
