import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <footer>footer</footer>
    </>
  );
}

export default Layout;
