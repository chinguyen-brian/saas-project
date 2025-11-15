import Link from 'next/link';
import { BiPhoneCall } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import mockCategories from '@/mock/category.json';
import { Category } from '../../types/product';

const services = [
  {
    url: '/about',
    name: 'About Us',
  },
  {
    url: '/term-conditions',
    name: 'Term & Conditions',
  },
  {
    url: '/faq',
    name: 'FAQ',
  },
  {
    url: '/privacy',
    name: 'Privacy Policy',
  },
   {
    url: '/cancelled-return',
    name: 'Cancellation & Return Policy',
  },
];

export default function Footer() {
  const categories = mockCategories as Category[];
  return (
    <footer className="bg-blue-400 text-white w-full  px-10 text-center text-sm mt-auto">
      <div className="w-full max-w-6xl flex justify-between mx-auto border-blue-300 border-b py-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="col-span-7 md:col-span-3 text-center md:text-left">
            <div className="text-2xl font-bold">MyLogo</div>
            <div className="text-lg font-semibold mt-4">Contact Us</div>
            <div className="flex flex-row gap-2 justify-center md:justify-start items-center mt-2">
              <BsWhatsapp />
              <div className="flex flex-col">
                <p>Whats App</p>
                <p>+84945623116</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 justify-center md:justify-start items-center mt-2">
              <BiPhoneCall />
              <div className="flex flex-col">
                <p>Call Us</p>
                <p>+84945623116</p>
              </div>
            </div>
          </div>
          <div className="col-span-7 md:col-span-4 flex flex-row gap-10 md:gap-20 md:justify-start justify-center text-left">
            <div>
              <div className="text-lg font-semibold mt-4 border-b-2 border-white">Our Popular Categories</div>
              <ul>
                {categories.map((cat) => (
                  <li key={cat.name} className="mt-2">
                    <Link href={`/category/${cat.image}`}>{cat.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-lg font-semibold mt-4 border-b-2 border-white">Customer Services</div>
              <ul>
                {services.map((service) => (
                  <li key={service.name} className="mt-2">
                    <Link href={service.url}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p className='py-4'>© {new Date().getFullYear()} Chi Nguyen. All rights reserved.</p>
    </footer>
  );
}
