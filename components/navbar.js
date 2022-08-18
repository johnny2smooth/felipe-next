import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex flex-wrap items-baseline px-6">
      <div className="flex grow flex-wrap items-baseline pt-6">
        <h1 className="text-6xl font-bold hover:underline">
          <Link href="/">
            <a>Felipe Matamala</a>
          </Link>
        </h1>
        <p>psychoanalyst</p>
      </div>
      <nav>
        <ul className="flex flex-wrap [&>*]:pr-6 py-6 [&>*:hover]:underline">
          <li className="">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="">
            <Link href="/practice">
              <a>Practice</a>
            </Link>
          </li>
          <li className="">
            <Link href="/resources">
              <a>Resources</a>
            </Link>
          </li>
          <li className="">
            <Link href="/writings">
              <a>Writings</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
