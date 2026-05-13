import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Header title="My Website" />

      {children}

      <Footer text="© 2026 My Website" />
    </div>
  );
}

export default Layout;