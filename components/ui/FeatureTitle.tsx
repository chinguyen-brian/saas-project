'use client';

import Link from 'next/link';
import { BiRightArrow } from 'react-icons/bi';

interface FeatureTitleProps {
  preTitle?: string;
  mainTitle: string;
  showViewAll?: boolean;
  url?: string;
}

const FeatureTitle = ({
  preTitle,
  mainTitle,
  showViewAll = true,
  url = '/',
}: FeatureTitleProps) => {
  return (
    <div className="flex w-full justify-between items-center border-b-gray-200 border-b">
      <div className="border-b-2 border-blue-400 py-2 -mb-px">
        <h2 className="text-blue-400 font-semibold text-lg">
          <span className="text-gray-500">{preTitle} </span>
          {mainTitle}
        </h2>
      </div>
      {showViewAll && (
        <Link href={url || ''} className="flex justify-between gap-1 items-center text-xs">
          View All <BiRightArrow className='text-blue-400' />
        </Link>
      )}
    </div>
  );
};

export default FeatureTitle;
