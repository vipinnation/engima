'use client';
import { useSnackbar } from '@/components/alert/alert.component';
import InputField from '@/components/form/input.form';
import { Button } from '@/components/ui/button';
import AuthAPI from '@/services/api-calls/auth.api-calls';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { CookieProvider } from '@/utils/cookies.utils';

const page = () => {
  const { toastMessage } = useSnackbar();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<any>();

  const submitHandler = async (data: any) => {
    try {
      setIsLoading(true);
      let res = await AuthAPI.login(data);
      await CookieProvider.saveCookies('token', res.token);
      await CookieProvider.saveCookies('role', res.user.role);
      await CookieProvider.saveCookies('_id', res.user.id);

      router.push('/profile');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toastMessage(`${error}` || `Something went wrong`, 'error');
    }
  };

  return (
    <div className="flex items-center h-[40rem] dark:bg-primary-dark dark:text-white">
      <div className="text-center w-full">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            Welcome to Engima
          </h1>
          <p className=" text-gray-500 md:text-xl dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, ipsum ad cumque excepturi doloremque
            assumenda tempora aut, placeat sunt pariatur culpa nesciunt rerum error possimus.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 w-full">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
            Sign in to Engima
          </h2>
          <p className=" flex items-cener justify-center"></p>
        </div>

        <form className="w-full max-w-sm space-y-4">
          <div className="space-y-2">
            <InputField
              label="Email"
              type="email"
              name="email"
              startIcon={
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center dark:text-black">
                  <Mail />
                </div>
              }
              InputProps={{
                ...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: `Enter valid email address`
                  }
                })
              }}
              errors={errors.email}
            />
          </div>
          <div className="space-y-2">
            <InputField
              label="Password"
              type={isPassword == true ? 'password' : 'text'}
              name="password"
              placeholder="Please enter your password"
              startIcon={
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center dark:text-black">
                  <Lock />
                </div>
              }
              endIcon={
                <div className="w-10 z-10 px-1 text-center flex items-center justify-center dark:text-black">
                  {isPassword == false ? (
                    <Eye
                      onClick={() => {
                        setIsPassword((_prev) => !isPassword);
                      }}
                    />
                  ) : (
                    <EyeOff
                      onClick={() => {
                        setIsPassword((_prev) => !isPassword);
                      }}
                    />
                  )}
                </div>
              }
              InputProps={{
                ...register('password', {
                  required: true
                })
              }}
              errors={errors.password}
            />
          </div>
          <Link className="w-full" href="#">
            <Button
              onClick={handleSubmit(submitHandler)}
              isLoading={isLoading}
              className="w-full bg-primary  rounded-md my-2 dark:bg-white dark:text-black text-white"
            >
              Sign In
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default page;
