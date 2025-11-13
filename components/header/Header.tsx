'use client';

import { FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../context/useCart';
import Navigation from './Navigation';
import Link from 'next/link';

interface HeaderProps {
  email: string;
  onMenuClick: () => void;
}

const Header = ({ email, onMenuClick }: HeaderProps) => {
  const { cart } = useCart();
  console.log(email);
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-200 shadow-sm flex items-center px-4 z-50">
      <div className="flex justify-between items-center w-full">
        {/* LEFT: Logo + Menu Button (mobile) */}
        <div className="flex items-center space-x-2">
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100 transition"
            onClick={onMenuClick}
          >
            <FiMenu size={24} color="#000" />
          </button>
          <div className="text-xl font-bold text-gray-800">MyLogo</div>
        </div>

        {/* CENTER: Navigation (ẩn trên mobile) */}
        <Navigation />

        {/* RIGHT: Search + Cart + Email + Logout */}
        <div className="flex items-center space-x-4">
          {/* Search field */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-lg px-2 py-1">
            <FiSearch className="text-gray-500 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-32 md:w-48 text-sm"
            />
          </div>

          {/* Cart icon */}
          <button className="relative p-2 hover:bg-gray-100 rounded transition">
            <FiShoppingCart size={22} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              {cart.items.length}
            </span>
          </button>

          {email == '' ? (
            <Link
              href="/login"
              className="px-3 py-1 bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors"
            >
              Login
            </Link>
          ) : (
            <>
              <span className="inline text-gray-700 text-sm">{email}</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
