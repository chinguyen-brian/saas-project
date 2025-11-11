'use client';

interface SidebarProps {
  email: string;
  open: boolean;
  onClose: () => void;
  logout: () => void;
}

const Sidebar = ({ email, open, onClose, logout }: SidebarProps) => {
  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-md
          w-64 p-4 flex flex-col justify-between
          transform transition-transform duration-300
          md:translate-x-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0
          z-40
        `}
      >
        <div className="text-2xl font-bold mb-6 md:block hidden">MyLogo</div>
        <div className="flex-1">
          <p className="text-gray-700 mb-2 md:block hidden">Hello, {email}</p>
          <nav className="space-y-2">
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
              Dashboard
            </a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
              Products
            </a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
              Orders
            </a>
          </nav>
        </div>

        <button
          className="w-full py-2 px-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          onClick={logout}
        >
          Logout
        </button>
      </aside>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;
