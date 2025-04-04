import Link from "next/link";

const Header = () => {
  return (
    <header className="flex sticky z-50 bg-transparent items-center justify-center  top-3">
      <nav className="flex gap-1 p-0.5 bg-white/10 backdrop-blur border border-white/15 rounded-full">
        <Link href={"#"} className="navItem">
          Home
        </Link>
        <Link href={"#"} className="navItem">
          Project
        </Link>
        <Link href={"#"} className="navItem">
          About
        </Link>
        <Link href={"#"} className="navItem navItem_active">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
