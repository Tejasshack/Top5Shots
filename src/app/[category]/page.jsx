
import AutoCarousel from "@/components/carousel/AutoCarousel";

export default async function BlogsByCategory({ params }) {
  const param = await params;
  const category = param?.category;

  if (!category) {
    return (
      <div className="text-center text-red-600 mt-10">
        Category not found in URL.
      </div>
    );
  }

  let blogs = [];
  let subcategories = [];

  try {
    // Fetch all blogs
    const res = await fetch("http://localhost:5000/blogs", {
      cache: "no-store",
    });
    const allBlogs = await res.json();

    blogs = allBlogs.filter((blog) =>
      blog.categories?.some((cat) => cat.slug === category)
    );

    // Get category ID from the first matching blog (if exists)
    const categoryObj = allBlogs
      .flatMap((b) => b.categories || [])
      .find((cat) => cat.slug === category);

      if (categoryObj?._id) {
        const subRes = await fetch(
          `http://localhost:5000/getOneSubByCategoryId/${categoryObj._id}`,
          { cache: "no-store" }
        );
        subcategories = await subRes.json();
      }
      
  } catch (err) {
    console.error("Failed to fetch blogs or subcategories:", err.message);
  }

  const readableCategory = category.replace(/-/g, " ");

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10">
      <h1 className="text-center text-black font-bold text-2xl sm:text-3xl mb-6 capitalize">
        {readableCategory}
      </h1>
      {/* Subcategory Cards */}
      {subcategories?.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Subcategories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {subcategories.map((sub) => {
              const subBlogs = blogs.filter(
                (blog) => blog.subcategory?.slug === sub.slug
              );

              return (
                <div
                  key={sub._id}
                  className="p-4 border border-gray-200 shadow rounded bg-white"
                >
                  <h3 className="font-bold text-lg text-black">{sub.name}</h3>
                  <h4 className="text-black font-semibold mb-2">
                    Top 5 {sub.name}
                  </h4>

                  {/* Blogs Section for this subcategory */}
                  {subBlogs.length === 0 ? (
                    <p className="text-gray-600 text-sm mb-4">
                      No blogs found in this subcategory.
                    </p>
                  ) : (
                    <ul className="text-sm space-y-2 mb-4">
                      {subBlogs.slice(0, 5).map((blog, index) => (
                        <li key={index}>
                          <a
                            href={`/${category}/${blog.slug}`}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {blog.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href={`/${category}/compare`}
                    className="text-blue-600 hover:text-blue-800 inline-block font-medium"
                  >
                    Top5 {sub.name} →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Blogs Section */}
      {blogs.length === 0 ? (
        <p className="text-center text-gray-600 mb-12">
          No blogs found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={blog.image?.url || "/images/default.jpg"}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                <h2 className="text-lg font-bold mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {blog.excerpt}
                </p>
                <a
                  href={`/${category}/${blog.slug}`}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}

          {/* Additional Cards */}
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-center items-center text-center border border-blue-100">
            <h3 className="text-lg font-semibold">Explore More Blogs</h3>
            <a
              href={`/${category}/compare`}
              className="mt-3 text-blue-600 hover:text-blue-800 font-medium underline"
            >
              View All {readableCategory} Blogs →
            </a>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-100 flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-2">Don't Miss Out!</h3>
            <p className="text-sm text-gray-700 mb-4">
              Check out more blogs to stay updated with the latest content in{" "}
              <span className="capitalize font-semibold">
                {readableCategory}
              </span>
              .
            </p>
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Go to Homepage →
            </a>
          </div>
        </div>
      )}

      <AutoCarousel />
    </div>
  );
}