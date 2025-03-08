import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import fs,{readFileSync} from 'fs';
import matter from 'gray-matter';

// Read all files in the content directory
const dirContents = fs.readdirSync("content","utf-8");
// console.log(dirContents);
// Read the contents of each file

const blogs = dirContents.map((file) => {
  const blogs = fs.readFileSync(`content/${file}`,"utf-8");
  const {data} = matter(blogs);
  return data;
});


// Sample blog array
// const blogs = [
//   {
//     title: 'First Blog',
//     description: 'This is the first blog description.',
//     slug: 'first-blog',
//     date: '2023-10-01',
//     author: 'John Doe',
//     image: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=600' // Replace with actual image URL
//   },
//   {
//     title: 'Second Blog',
//     description: 'This is the second blog description.',
//     slug: 'second-blog',
//     date: '2023-10-02',
//     author: 'Jane Doe',
//     image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600' // Replace with actual image URL
//   },
//   // Add more blog objects here
// ];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <div className="text-sm text-gray-500 mb-4">
                <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;