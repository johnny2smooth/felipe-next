import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Felipe Matamala</title>
      </Head>
      <div className="min-h-full">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
