'use client';

import Image from 'next/image';
import { Category } from '../../../types/product';
import Link from 'next/link';

interface AccessoryProps {
  item: Category;
}

const AccessoryItem = ({ item }: AccessoryProps) => {
  return (
    <Link href={`/product?c=${item.name}`}>
      <div className="relative flex justify-start items-center p-2 border-gray-300 border rounded-2xl shadow hover:shadow-lg">
        <div className=" relative w-18 h-18 mx-auto  overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="flex flex-1 pl-2 text-sm font-medium line-clamp-2 min-h-10 text-gray-800 items-center">
          {item.name}
        </h3>
      </div>
    </Link>
  );
};

export default AccessoryItem;
