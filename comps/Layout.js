import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="body">
      <Head>
        <title>Kakitoo Web App</title>
      </Head>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
