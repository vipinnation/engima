'use client';
import { CookieProvider } from '@/utils/cookies.utils';
import { UserCircle, PackageOpen, Contact2, LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { useSnackbar } from '../alert/alert.component';
import { ModeToggle } from '../theme/toggle-theme';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './dropdown-menu';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { toastMessage } = useSnackbar();
  const [token, setToken] = useState<string | null | undefined>();

  useEffect(() => {
    fetch();
  }, [token, pathname]);

  const fetch = async () => {
    try {
      let token = await CookieProvider.getCookie('token');
      setToken(token);
    } catch (error) {}
  };

  const logout = async () => {
    try {
      await CookieProvider.removeCookie('token');
      await CookieProvider.removeCookie('role');
      setToken('');

      if (pathname == '/profile') router.push('/login');
      toastMessage('User logged out successfully', 'success');
    } catch (error) {}
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-between px-8 py-4 items-center nav-bg">
        <h1 className="text-xl text-white font-bold ">
          <Link href="/">Enigma</Link>
        </h1>
        <div className="flex items-center">
          <div className="flex items-center bg-white rounded-md mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 pt-0.5 text-gray-600 mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="ml-2 outline-none bg-transparent font-normal rouned-md"
              type="text"
              name="search"
              id="search"
              autoCorrect="false"
              autoComplete="false"
              placeholder="Search..."
            />
          </div>
          <ul className="flex items-center space-x-6 text-white">
            <li className="font-normal cursor-pointer"></li>
            <li className="font-normal cursor-pointer">Articles</li>

            <li className="text-2xl  cursor-pointer">
              {token ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="pt-2">
                    <UserCircle />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem className=" cursor-pointer flex" onClick={logout}>
                      <LogOut />
                      <span className="mx-2"> Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href="/login" className="text-2xl  cursor-pointer">
                  <User />
                </Link>
              )}
            </li>
            <li className="text-2xl  cursor-pointer">
              <ModeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
