import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Acount } from "./Components/Layout/Acount/Acount";
import { Cart } from "./Components/Layout/Cart/Cart";
import { NotFound } from "./Components/Layout/NotFound/NotFound";
import { Order } from "./Components/Layout/Order/Order";
import { ProductDetails } from "./Components/Layout/ProductDetails/ProductDetails";
import { Services } from "./Components/Layout/Services/Services";
import { Footer } from "./Components/Shared/Footer/Footer";
import { Navbar } from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductDetails />} />
        <Route path="/product-detailes" element={<ProductDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/order" element={<Order />} />
        <Route path="/acount" element={<Acount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="**" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
