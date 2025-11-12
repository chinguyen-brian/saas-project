'use client';

export const Links = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Products',
    url: '/products',
  },
  {
    name: 'Orders',
    url: '/orders',
  },
];

const Navigation = () => {
  return (
    <nav className="hidden md:flex space-x-6 text-gray-700">
      {Links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          className="hover:text-blue-600 transition"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
