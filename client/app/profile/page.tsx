import BlogCardComponent from '@/components/card/blog-card.component';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="w-[75%] mx-auto my-12">
      <div className="flex items-center justify-between">
        <h2 className="dark:text-white text-3xl font-semibold">Welcome back, User</h2>
        <Link
          href={'/create-blog'}
          className="bg-primary dark:bg-white rounded-lg text-white dark:text-black px-2 py-2"
        >
          Add New Blog
        </Link>
      </div>

      <div>
        {[...new Array(5)].map((item, index) => (
          <BlogCardComponent className="my-3" blog={item} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
