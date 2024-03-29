import Link from "next/link";

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex justify-between max-w-[600px] mx-auto bg-blue text-sm my-5 px-3">
      <Link href="/">
        <h1>TRI DENDA</h1>
      </Link>
      <ul className="flex gap-3">
        <Link href="/about">
          <li>ABOUT</li>
        </Link>
        <Link href="/blog">
          <li>BLOG</li>
        </Link>
        <Link href="/#projects">
          <li>PROJECTS</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
