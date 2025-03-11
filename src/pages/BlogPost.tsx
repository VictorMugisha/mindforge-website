import { useParams } from "react-router-dom";
import { blogs } from "../data/blogsData";

export default function BlogPost() {
  const { blogId } = useParams();
  const blog = blogs.find((b) => b.id === Number(blogId));

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl text-center text-red-500">Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-4">
          By {blog.author} on {blog.date}{" "}
          {blog.readTime && `• ${blog.readTime}`}
        </p>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-auto mb-6 rounded-lg lg:max-w-3xl mx-auto"
        />
        <div className="mb-6">
          {/* Render the full content */}
          <div dangerouslySetInnerHTML={{ __html: blog.content || "" }} />
        </div>
        {blog.externalLinks && blog.externalLinks.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              References
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {blog.externalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </div>
  );
}
