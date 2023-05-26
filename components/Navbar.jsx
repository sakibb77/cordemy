import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="h-20 bg-black text-white/70 flex items-center">
      <div className="wrapper flex justify-between">
        <Link href="/" className="text-white">
          Cordemy
        </Link>

        <div className="flex gap-5">
          <Link href="/" className="hover:text-white duration-300">
            Home
          </Link>
          <Link href="/courses" className="hover:text-white duration-300">
            Course
          </Link>
          <Link href="/about" className="hover:text-white duration-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-white duration-300">
            Contact
          </Link>
        </div>

        <div>
          <Button href="/login" placeholder="sign in" color="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
