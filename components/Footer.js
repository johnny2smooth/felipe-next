import Link from 'next/link';

function Footer() {
  return (
    <footer className="py-2 px-6 bg-[#4969ED] text-[#F8F7F3]">
      <div className="flex space-between">
        <div className="grow">
          <p>
            <Link href="/">
              <a>Left side</a>
            </Link>
          </p>
          <p>
            <a href="" target="_blank">
              Left side
            </a>
          </p>
        </div>
        <div className="footer-content-right">
          <p>
            <a href="mailto:johnbp13@gmail.com">mail</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
