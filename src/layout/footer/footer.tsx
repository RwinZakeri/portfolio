import ArrowUpIcon from "@/assets/icons/ArrowUp";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-8 relative z-20 bg-transparent overflow-clip">
      <div className="absolute h-[400px]  w-[1600px] -z-10 bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center">
        <p className="text-white/40">
          {" "}
          &copy; {new Date().getFullYear()} All right for Arvin Zakeri.
        </p>
        <nav className="flex flex-col items-center gap-8 mt-4">
          <Link
            href={"https://www.linkedin.com/in/arvin-zakeri-71bb9b25a/"}
            className="flex items-center gap-1"
          >
            <span>Linkdin</span>
            <ArrowUpIcon />
          </Link>
          <Link
            href={"https://github.com/RwinZakeri"}
            className="flex items-center gap-1"
          >
            <span>GitHub</span>
            <ArrowUpIcon />
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
