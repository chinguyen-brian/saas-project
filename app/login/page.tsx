'use client';

import { useState } from 'react';
import { authService } from '../../api/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import TextField from '../../components/ui/TextField';
import Checkbox from '../../components/ui/Checkbox';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('admin');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (validate()) {
      setMessage('Please fill the user information');
      setIsSubmitting(false);
      return;
    }
    try {
      setMessage('');
      const user = await authService.login(email, password);
      if (user) {
        router.replace('/dashboard');
      } else {
        setMessage('User information is incorrect');
      }
    } catch (e) {
      console.error(e);
      setMessage('An error occurred during login, please try later');
      setIsSubmitting(false);
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
        <div className="w-full max-w-md mb-4">
          <h1 className="text-3xl font-bold text-black mb-2 text-left">
            Login
          </h1>
          <p className=" text-gray-500">Please enter your account</p>
          <p className="text-red-500 mt-2 text-sm">{message}</p>
        </div>

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-6">
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(value: string) => setEmail(value)}
            />
          </div>
          <div className="mb-6">
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(value: string) => setPassword(value)}
            />
          </div>
          <div className="mb-6">
            <Checkbox
              checked={remember}
              onChange={(checked: boolean) => setRemember(checked)}
              label="Remember me"
            />
          </div>
          <Button type="submit" color="primary" className='w-full' disabled={isSubmitting}>
            Login
          </Button>
        </form>
      </div>
      {/* Right */}
      <div className="w-full md:flex hidden bg-blue-400 justify-center items-center relative max-h-screen overflow-hidden">
        <Image
          src="/img/login.png"
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
