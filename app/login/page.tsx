'use client';

import { useState } from 'react';
import { authService } from '../../api/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setMessage('Please fill the user information');
      return;
    }
    const user = await authService.login(email, password);
    if (user) {
      router.replace('/dashboard');
    } else {
      setMessage('User information is incorrect');
    }
  };

  const validate = (): boolean => {
    let isError = false;
    if (email.trim() == '') {
      setErrors({ ...errors, email: true });
      isError = true;
    }
    if (password.trim() == '') {
      setErrors({ ...errors, password: true });
      isError = true;
    }
    return isError;
  };

  return (
    <div className="flex min-h-screen">
      {/* Left: Login form */}
      <div className="w-full md:w-1/2 md:min-w-[400px] flex flex-col justify-center items-center bg-white p-8">
        <div className="w-full max-w-md mb-6">
          <h1 className="text-3xl font-bold text-black mb-2 text-left">
            Login
          </h1>
          <h3 className=" text-gray-500">Please enter your account</h3>
        </div>

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2 h-4 w-4 text-blue-400 focus:ring-blue-500 border-gray-300 rounded"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label htmlFor="remember" className="text-gray-700">
              Remember me
            </label>
          </div>
          <button className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 active:bg-blue-600 transition-colors duration-150">
            Log In
          </button>
        </form>
      </div>
      {/* Right */}
      <div className="w-full md:flex hidden bg-blue-400 justify-center items-center relative max-h-screen overflow-hidden">
        <Image
          src="/img/loginbg.png"
          alt="Login Background"
          width={1000}
          height={1000}
          className="max-w-full h-auto"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default Login;
