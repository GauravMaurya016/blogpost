"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Web Development",
        "Software Engineering",
        "Data Science",
        "Machine Learning",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  // <span ref={el} />

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for
            community <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
            <span ref={el} />

            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to{" "}
            <br className="hidden lg:block" /> bootstrap your new apps, projects
            or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"></div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className=" py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-400 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-black">Tier 1</h3>
              <p className="text-black mb-4 text-2xl">$10/month</p>
              <ul className="mt-6 mb-6 space-y-4">
                <li className="text-black ">
                  <s>10GB Storage</s>
                </li>
                <li className="text-black ">
                  <s>Basic Support</s>
                </li>
                <li className="text-black ">
                  <s>Single User</s>
                </li>
                <li className="text-black ">
                  Community Access
                </li>
                <li className="text-black ">
                  Weekly Updates
                </li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-600">
                Choose Plan
              </button>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-black">Tier 2</h3>
              <p className="text-black mb-4 text-2xl">$20/month</p>
              <ul className="mt-6 mb-6 space-y-4">
                <li className="text-black ">
                  50GB Storage
                </li>
                <li className="text-black ">
                  Priority Support
                </li>
                <li className="text-black ">
                  Up to 5 Users
                </li>
                <li className="text-black ">
                  Community Access
                </li>
                <li className="text-black ">
                  Daily Updates
                </li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-600">
                Choose Plan
              </button>
            </div>
            <div className="bg-blue-400 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-black">Tier 3</h3>
              <p className="text-gray-200 mb-4 text-2xl">$30/month</p>
              <ul className="mt-6 mb-6 space-y-4">
                <li className="text-black ">
                  200GB Storage
                </li>
                <li className="text-black ">
                  24/7 Support
                </li>
                <li className="text-black ">
                  Unlimited Users
                </li>
                <li className="text-black ">
                  Community Access
                </li>
                <li className="text-black ">
                  Real-time Updates
                </li>
              </ul>
              <button className="bg-yellow-50 text-blue-500 py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-200">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">
              Join Us Today!
            </h2>
            <p className="text-lg text-gray-700 mb-6 animate-fade-in delay-200">
              Become a part of our community and enjoy exclusive benefits.
            </p>
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-600 animate-fade-in delay-400">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className=" py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">
            Top Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Blog Title 1
              </h3>
              <p className="text-black mb-4">
                A brief description of the blog post goes here. It should be
                engaging and informative.
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-600">
                Read More
              </button>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in delay-200">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Blog Title 2
              </h3>
              <p className="text-black mb-4">
                A brief description of the blog post goes here. It should be
                engaging and informative.
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-600">
                Read More
              </button>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in delay-400">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Blog Title 3
              </h3>
              <p className="text-black mb-4">
                A brief description of the blog post goes here. It should be
                engaging and informative.
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-600">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
