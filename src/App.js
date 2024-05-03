//import Footer from "./components/Footer";
import Carts from "./components/UI/cart/Carts";
import Header from "./components/header";
<<<<<<< HEAD
import Checkout from "./pages/checkout";
=======
>>>>>>> origin/shopping-cart
import Routing from "./routing/routing";
import { useSelector } from "react-redux";

const App = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
<<<<<<< HEAD
    <>
       <Header></Header> 
       <Routing></Routing>
     
     
    </>
=======
    <div>
      <Header></Header>
      {showCart && <Carts />}
      <div>
        <Routing />
      </div>
    </div>
>>>>>>> origin/shopping-cart
  );
};

export default App;
