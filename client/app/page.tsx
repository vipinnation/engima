import { BlogAPI } from '@/services/api-calls/blog.api-calls';
import BlogCardComponent from '@components/card/blog-card.component';
import MainLayout from '@components/layout';

export default async function Home() {
  let data: Array<any> = [];

  try {
    let { blogs } = await BlogAPI.get();
    data = blogs || [];
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="mx-auto h-full mb-12 dark:bg-primary-dark ">
      <div className="text-center my-8 shadow-md w-full py-8 dark:bg-primary-dark dark:text-white">
        <span className="text-lg leading-none">Welcome To</span>
        <h1 className="text-[5rem] font-medium">Enigma</h1>
        <span className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, molestiae.</span>
      </div>

      <div className="mx-4 gap-4 grid sm:grid-cols-2">
        {data && data.length > 0 ? (
          <>
            {data.map((item, index) => (
              <BlogCardComponent className="my-3" blog={item} />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
