import Head from 'next/head';
import Footer from './Footer';
import Navbar from './navbar';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Felipe Matamala</title>
      </Head>
      <div className="min-h-full">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
