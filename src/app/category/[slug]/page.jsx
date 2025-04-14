export const dynamic = 'force-dynamic';

export default async function BlogsByCategory({ params }) {
  const slug = params.slug;
  let blogs = [];

  try {
    const res = await fetch("http://localhost:5000/blogs", {
      cache: "no-store",
    });
    const allBlogs = await res.json();

    blogs = allBlogs.filter((blog) =>
      blog.categories?.some((cat) => cat.slug === slug)
    );
  } catch (err) {
    console.error("Failed to fetch blogs:", err.message);
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 capitalize text-center text-gray-800">
        {slug.replace(/-/g, " ")}
      </h1>

      {blogs.length === 0 ? (
        <p className="text-gray-600 text-center">
          No blogs found in this category.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {blog.image?.url && (
                <img
                  src={blog.image.url}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-auto">
                  <a
                    href={`/blog/${blog.slug}`}
                    className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors border border-blue-600 px-4 py-2 rounded-lg"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
