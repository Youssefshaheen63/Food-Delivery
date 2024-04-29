import Header from "./header";
import Footer from "./Footer";
import Routing from "../routing/routing";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routing />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
