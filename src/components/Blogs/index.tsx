"use client";
import { FC, useState } from "react";

const Blog: FC = () => {
  const blogData = [
    {
      title: "Blog 1",
      description: "This is a blog 1 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Blog 2",
      description: "This is a blog 2 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Blog 3",
      description: "This is a blog 3 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Blog 4",
      description: "This is a blog 4 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Blog 5",
      description: "This is a blog 5 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Blog 6",
      description: "This is a blog 6 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Blog 7",
      description: "This is a blog 7 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Blog 8",
      description: "This is a blog 8 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Blog 9",
      description: "This is a blog 9 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Blog 10",
      description: "This is a blog 10 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Blog 11",
      description: "This is a blog 11 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Blog 12",
      description: "This is a blog 12 description",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
  ];

  const [showMore, setShowMore] = useState(2);

  return (
    <div className="bg-gray-900 py-16 md:py-32" id="blog">
      <div className="container mx-auto px-4 md:px-0">
        <div className="w-full flex justify-center items-center flex-col text-center mt-6 md:mt-16">
          <span className="border border-white px-3 py-1 rounded-full text-primary text-sm font-semibold mb-4">
            My Blogs
          </span>

          <div className="text-white text-left max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogData.slice(0, showMore).map((blog) => (
                <div
                  key={blog.title}
                  className="bg-gray-800 p-3 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-primary hover:bg-opacity-10 group"
                >
                  <h3 className="text-primary text-lg font-semibold mb-3 group-hover:text-gray-800">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-semibold mb-4 group-hover:text-gray-800">
                    {blog.description}
                  </p>
                </div>
              ))}
            </div>

            {showMore < blogData.length && (
              <button
                onClick={() => setShowMore(showMore + 2)}
                className="bg-primary text-white px-4 py-2 rounded-lg mt-6"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
