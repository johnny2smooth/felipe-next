import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  console.log(router);

  const links = [
    { route: '/about', text: 'About', id: 'about' },
    { route: '/practice', text: 'Practice', id: 'projects' },
    { route: '/resources', text: 'Resources', id: 'resources' },
    { route: '/writings', text: 'Writings', id: 'writings' },
  ];

  return (
    <div className="flex flex-wrap items-baseline px-6">
      <div className="flex grow flex-wrap items-baseline pt-6">
        <h1 className="text-6xl font-bold hover:underline hover:text-[#4969ED]">
          <Link href="/">
            <a>Felipe Matamala</a>
          </Link>
        </h1>
        <p>psychoanalyst</p>
      </div>
      <nav>
        <ul className="flex flex-wrap [&>*]:pr-6 py-6 [&>*:hover]:underline text-lg">
          {links.map(({ route, text, id }) => (
            <li key={id}>
              <Link href={route}>
                <a
                  className={
                    route === router.route
                      ? 'underline decoration-dotted decoration-[#4969ED] decoration-4'
                      : ''
                  }
                >
                  {text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
