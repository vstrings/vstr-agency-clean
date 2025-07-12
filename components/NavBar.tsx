import Link from 'next/link';

const NavBar = () => (
  <nav className="w-full py-6 px-8 flex justify-between items-center bg-[#0D0D0D] text-white">
    <h1 className="text-2xl font-bold text-[#DDB3C6]">V STR</h1>
    <ul className="flex gap-6 text-sm font-medium">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/portfolio">Work</Link></li>
      <li><Link href="/about">Vision</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default NavBar;
