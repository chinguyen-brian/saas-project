'use client';
import Link from 'next/link';
import { Links } from '../header/Navigation';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';
interface SidebarProps {
  email: string;
  open: boolean;
  onClose: () => void;
  logout: () => void;
}

const Sidebar = ({ email, open, onClose, logout }: SidebarProps) => {
  const router = useRouter();
  return (
    <>
      <aside
        className={`
          md:hidden fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-md
          w-64 p-4 flex flex-col justify-between
          transform transition-transform duration-300
          md:translate-x-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0
          z-40
        `}
      >
        <div className="pt-16">
          <div className="flex-1">
            {email != '' && (
              <p className="text-gray-700 mb-2">Hello, {email}</p>
            )}

            <nav className="space-y-2">
              {Links.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="block py-2 px-3 rounded hover:bg-gray-100"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            {email == '' ? (
              <Button onClick={() => router.replace('/login')}>Login</Button>
            ) : (
              <Button onClick={logout} color="warning" className="px-3 py-1">
                Logout
              </Button>
            )}
          </div>
        </div>
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
