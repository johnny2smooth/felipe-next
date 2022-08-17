import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex space-between px-6 py-4 items-baseline">
      <div className="flex grow items-baseline">
        <h1 className={` text-6xl font-bold hover:underline`}>
          <Link href="/">
            <a>Felipe Matamala</a>
          </Link>
        </h1>
        <p>psychoanalyst</p>
      </div>

      <nav>
        <ul
          className={`flex text-2xl font-thin [&>*:hover]:underline underline-offset-4 [&>*]:px-6`}
        >
          <li>
            <Link href="/practice">
              <a>Practice</a>
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <a>Resources</a>
            </Link>
          </li>
          <li>
            <Link href="/writings">
              <a>Writings</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
