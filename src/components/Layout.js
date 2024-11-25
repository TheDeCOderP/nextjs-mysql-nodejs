// components/Layout.js
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">{children}</main>
      <Footer />
    </>
  );
}
