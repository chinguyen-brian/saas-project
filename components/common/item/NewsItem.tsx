'use client';

import Image from 'next/image';
import { Category } from '../../../types/product';
import Link from 'next/link';

interface NewsItem {
  item: Category;
}

const NewsCard = ({ item }: NewsItem) => {
  return (
    <Link href={`/news/${item.name}`}>
      <div className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition p-3 select-none">
        <div className="relative w-full h-36 aspect-square mb-3">
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
      </div>
    </Link>
  );
};

export default NewsCard;
