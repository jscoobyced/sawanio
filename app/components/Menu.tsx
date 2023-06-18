import Link from "next/link";

const Menu = () => {
  return (
    <nav className="flex justify-center">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Fortune</Link>
          <ul>
            <li>
              <Link href="/fortune">4 cards fortune</Link>
            </li>
            <li>
              <Link href="/question">1 card fortune</Link>
            </li>
            <li>
              <Link href="/8ball">Magic 8 Ball</Link>
            </li>
          </ul>
        </li>
        <li><Link href="/">About</Link>
        <ul>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul></li>
      </ul>
    </nav>
  );
};

export default Menu;
