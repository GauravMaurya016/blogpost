"use client";
import React, { useEffect, useRef,useState } from "react";
// components/Navbar.js

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [progress, setprogress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setprogress(30);
    setTimeout(() => {
      setprogress(70);
    }, 100);
    setTimeout(() => {
      setprogress(100);
    }, 400);

  
  }, [pathname]);
  useEffect(() => {
    setTimeout(() => {
      setprogress(0);
    }, 500);
                                                   
  }, []);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-50">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className=" text-lg font-bold">Soul'sBlog</div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/"
            className="hover:scale-105 transition-transform duration-300 hover:font-semibold"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:scale-105 transition-transform duration-300 hover:font-semibold"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:scale-105 transition-transform duration-300 hover:font-semibold"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:scale-105 transition-transform duration-300 hover:font-semibold"
          >
            Contact
          </Link>
          <div className="flex items-center">
            <Button className="mx-1" variant={"outline"}>
              Login
            </Button>
            <Button className="mx-1" variant={"outline"}>
              Sign Up
            </Button>
            <ModeToggle />
          </div>
        </div>
        <div className="md:hidden">
          <Sheet>
            <span className="px-2">
              <ModeToggle />
            </span>
            <SheetTrigger>
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className={"text-lg font-bold text-center my-4"}>
                  Soul's Blog
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col items-center gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link
                      href="/blog"
                      className="hover:scale-105 transition-transform duration-300 hover:font-semibold"
                    >
                      Blog
                    </Link>
                    <Link href="/contact">Contact</Link>

                    <div>
                      <Button className="mx-1 text-xs" variant={"outline"}>
                        Login
                      </Button>
                      <Button className="mx-1 text-xs" variant={"outline"}>
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
