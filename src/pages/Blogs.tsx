import { useState } from "react";

interface Blog {
  id: number;
  title: string;
  date: string;
  author: string;
  summary: string;
  imageUrl: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Uncovering the Depths of Corruption in Tanzania",
    date: "February 20, 2025",
    author: "Jane Doe",
    summary:
      "An in-depth analysis of the pervasive corruption affecting various sectors in Tanzania and the ongoing efforts to combat it.",
    imageUrl: "/blogs/tanzania-corruption.jpg",
  },
  {
    id: 2,
    title: "The Profiteers: Following the Money in South Sudan",
    date: "March 5, 2025",
    author: "John Smith",
    summary:
      "Investigating the flow of funds from South Sudan’s government coffers to private accounts, fueling conflict and corruption.",
    imageUrl: "/blogs/south-sudan-profiteers.jpg",
  },
  {
    id: 3,
    title: "Pandora Papers: Unmasking Offshore Assets in Kenya",
    date: "March 15, 2025",
    author: "Emily Johnson",
    summary:
      "Revealing the offshore companies linked to Kenyan political figures and the implications for the nation’s fight against corruption.",
    imageUrl: "/blogs/pandora-papers-kenya.jpg",
  },
  {
    id: 4,
    title: "Fertile Deception: The Fake Fertilizer Scandal in Kenya",
    date: "April 10, 2025",
    author: "Michael Lee",
    summary:
      "Exposing the distribution of counterfeit fertilizer to Kenyan farmers and the subsequent government response.",
    imageUrl: "/blogs/fake-fertilizer-kenya.jpg",
  },
  {
    id: 5,
    title: "The Legacy of Floribert Bwana Chui: A Martyr Against Corruption",
    date: "April 25, 2025",
    author: "Sophia Martinez",
    summary:
      "Honoring the life and legacy of Floribert Bwana Chui, who was martyred for his stand against corruption in Congo.",
    imageUrl: "/blogs/floribert-bwana-chui.jpeg",
  },
];

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Our Blog
      </h1>
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                By {blog.author} on {blog.date}
              </p>
              <p className="text-gray-700 mb-4">{blog.summary}</p>
              <a
                href={`/blogs/${blog.id}`}
                className="text-blue-600 hover:underline"
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
