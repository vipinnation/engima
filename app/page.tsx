import BlogCardComponent from "@components/card/blog-card.component";
import MainLayout from "@components/layout";

export default function Home() {
  return (
    <div className="mx-auto h-full mb-12 dark:bg-primary-dark ">
      <div className="text-center my-8 shadow-md w-full py-8 dark:bg-primary-dark dark:text-white">
        <span className="text-lg leading-none">Welcome To</span>
        <h1 className="text-[5rem] font-medium">Enigma</h1>
        <span className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
          molestiae.
        </span>
      </div>

      <div className="mx-4 gap-4 grid sm:grid-cols-2">
        {[...new Array(5)].map((item, index) => (
          <BlogCardComponent className="my-3" />
        ))}
      </div>
      {/* <h2 className="text-2xl font-semibold mb-4 text-center py-4">
        Latest Blog Posts
      </h2>
      <div className="">
      
        <BlogCardComponent className="my-3" />
        <BlogCardComponent className="my-3" />
        <BlogCardComponent className="my-3" />
      </div> */}
    </div>
  );
}
