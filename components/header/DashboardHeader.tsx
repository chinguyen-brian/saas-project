'use client';

import { FiMenu } from 'react-icons/fi';
interface HeaderProps {
  email: string;
  onMenuClick: () => void;
}

const DashboardHeader = ({ email, onMenuClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full  h-16 bg-white border-b border-gray-200 shadow-sm flex items-center px-4 z-50">
      <div className=" px-4 py-3 flex justify-between items-center w-full">
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 transition"
          onClick={onMenuClick}
        >
          <FiMenu size={24} color="#000" />
        </button>
        <div className="text-xl font-bold text-gray-800">MyLogo</div>

        <div className="hidden md:flex items-center space-x-4">
          <span className="text-gray-700">{email}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
