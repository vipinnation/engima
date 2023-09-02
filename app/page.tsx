import BlogCardComponent from "@components/card/blog-card.component";
import MainLayout from "@components/layout";

export default function Home() {
  return (
    <MainLayout>
      <div className="md:w-9/12 mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center py-4">Latest Blog Posts</h2>
        <div className="">
          <BlogCardComponent className="my-3"/>
          <BlogCardComponent className="my-3"/>
          <BlogCardComponent className="my-3"/>
          <BlogCardComponent className="my-3"/>
       
        </div>
      </div>
    </MainLayout>
  );
}
