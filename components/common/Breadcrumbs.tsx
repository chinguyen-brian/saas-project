'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';

interface BreadcrumbsProps {
  homeElement?: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  homeElement = 'Home',
  containerClasses = 'flex items-center space-x-2',
  listClasses = 'text-gray-600',
  activeClasses = 'font-bold text-blue-400',
  capitalizeLinks = true,
}) => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <nav aria-label="Breadcrumb">
      <ol className={containerClasses}>
        <li className={listClasses}>
          <Link href="/">{homeElement}</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const itemClasses = isLast
            ? `${activeClasses}`
            : listClasses;
          const linkText = capitalizeLinks
            ? segment.charAt(0).toUpperCase() + segment.slice(1)
            : segment;

          return (
            <React.Fragment key={segment}>
              <li className="flex items-center">
                <BiChevronRight className="h-4 w-4 text-blue-400 mx-1" />
                {isLast ? (
                  <span className={itemClasses}>{linkText}</span>
                ) : (
                  <Link href={href} className={itemClasses}>{linkText}</Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;