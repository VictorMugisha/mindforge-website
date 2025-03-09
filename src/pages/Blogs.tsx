import { useState } from "react";

interface Blog {
  id: number;
  title: string;
  summary: string;
  author: string;
  date: string;
  imageUrl: string;
}

export default function Blogs() {
  const [blogs] = useState<Blog[]>([
    {
      id: 1,
      title: "Understanding Corruption in East Africa",
      summary:
        "An in-depth analysis of the factors contributing to corruption in the East African Community and potential solutions.",
      author: "Jane Doe",
      date: "March 1, 2025",
      imageUrl: "/images/blog1.jpg",
    },
    {
      id: 2,
      title: "The Role of Technology in Combating Corruption",
      summary:
        "Exploring how technological advancements can aid in reducing corruption within governmental institutions.",
      author: "John Smith",
      date: "February 20, 2025",
      imageUrl: "/images/blog2.jpg",
    },
    // Add more blog entries as needed
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Our Blog
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                By {blog.author} on {blog.date}
              </p>
              <p className="text-gray-700 mb-4">{blog.summary}</p>
              <a
                href={`/blogs/${blog.id}`}
                className="text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
