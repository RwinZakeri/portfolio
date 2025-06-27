"use client";
import Link from "next/link";
const Header = ({}) => {
  return (
    <header className="flex sticky z-50 bg-transparent items-center justify-center  top-3">
      <nav className="flex gap-1 p-0.5 bg-white/10 backdrop-blur border border-white/15 rounded-full">
        <Link href={"#"} className="navItem navItem_active">
          Home
        </Link>
        <Link href={"./#project"} className="navItem">
          Project
        </Link>
        <Link href={"./#about"} className="navItem">
          About
        </Link>
        <Link href={"./#contact"} className="navItem ">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
