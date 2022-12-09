import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Login from "./pages/Login";
import SportsProducts from "./pages/products/SportsProducts";
import OfficeProducts from "./pages/products/OfficeProducts";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/upload_images" element={<Upload />} />
            <Route path="/" element={<Home />} />
            <Route path="/products/sports" element={<SportsProducts />} />
            <Route path="/products/office" element={<OfficeProducts />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
