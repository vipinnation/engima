import InputField from '@/components/form/input.form';
import TextAreaField from '@/components/form/text-area.component';
import { Button } from '@/components/ui/button';
import { BlogAPI } from '@/services/api-calls/blog.api-calls';
import React from 'react';
import moment from 'moment';

const BlogPage = async () => {
  let { blog }: any = await BlogAPI.get('1');

  return (
    <>
      <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16 mb-12">
        <article className="prose prose-gray max-w-3xl mx-auto space-y-2 dark:prose-invert dark:text-white">
          <div className="space-y-2 not-prose no-tailwindcss remove-all">
            {blog && blog.title ? <div dangerouslySetInnerHTML={{ __html: JSON.parse(blog.title) }} /> : <></>}
            <p className="text-gray-500 dark:text-gray-400">
              Posted on {moment(blog.createdAt).format('MMM DD/YYYY  hh:mm')}
            </p>
          </div>

          {blog && blog.content ? <div dangerouslySetInnerHTML={{ __html: JSON.parse(blog.content) }} /> : <></>}
        </article>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="px-4 py-6 md:px-6 md:py-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight">Enjoying the Read?</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Sign up for our newsletter to receive more articles like this one.
            </p>
            <form className="grid md:grid-cols-[2fr_1fr] gap-4">
              <InputField placeholder="Enter your email" type="email" name="email" />
              <Button className="w-full rounded-md dark:bg-white dark:text-black text-white py-0.5">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 md:px-6 md:py-12 mb-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl font-extrabold tracking-tight">What do you think?</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your comment below. We welcome thoughtful responses and spirited discussion. Note that your comment
            must be approved by our moderator before it appears on the site.
          </p>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <InputField placeholder="Name" name="name" type="text" label="Name" />
              <InputField placeholder="Email" type="email" name="email" label="Email" />
            </div>
            <TextAreaField placeholder="Your comment" label="Comment" name="comment" />
            <div className="text-center">
              <Button className="w-full rounded-md dark:bg-white dark:text-black text-white py-0.5">
                Post Comment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
