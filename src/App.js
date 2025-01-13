import { CartProvider } from "./store/CartContext";
import Header from "./components/Header";
import Meals from "./components/Meals";

const App = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <Meals />
      </CartProvider>
    </>
  );
};

export default App;