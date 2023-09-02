import MainLayout from "../../components/layout";

const page = () => {
  return (
    <MainLayout>
      <main className="container mx-auto mt-8 px-4">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="blog-post-image.jpg"
            alt="Blog Post Image"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Blog Post Title</h1>
            <p className="text-gray-600">
              Published on <span className="text-blue-500">Date</span> by{" "}
              <span className="text-blue-500">Author</span>
            </p>
            <div className="prose">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </div>
        </article>
      </main>
    </MainLayout>
  );
};

export default page;
