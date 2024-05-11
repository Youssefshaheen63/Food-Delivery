//import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import Carts from "./components/UI/cart/Carts";
import Header from "./components/header";
import Checkout from "./pages/checkout";
import Routing from "./routing/routing";
import { useSelector } from "react-redux";

const App = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
		<div>
			<Header></Header>
			{showCart && <Carts />}
			<div>
				<Routing />
			</div>
		</div>
	);
};

export default App;
