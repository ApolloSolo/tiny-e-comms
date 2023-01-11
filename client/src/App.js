import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SportsProducts from "./pages/products/SportsProducts";
import OfficeProducts from "./pages/products/OfficeProducts";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import Settings from "./pages/admin_settings/Settings";
import ForgotPassword from "./pages/admin_settings/ForgotPassword";
import Signup from "./pages/Signup";
import BonsaiProducts from "./pages/products/BonsaiProducts";

function App() {
  return (
    <CartProvider>
      <Router>
        <header>
          <Navbar />
        </header>
        <main className="dark:bg-slate-300 h-[calc(100vh-66px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/upload_images" element={<Upload />} />
            <Route path="/products/sports" element={<SportsProducts />} />
            <Route path="/products/office" element={<OfficeProducts />} />
            <Route path="/products/bonsai" element={<BonsaiProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/client/cancel" element={<Cancel />} />
            <Route path="/client/success/:purchase_id" element={<Success />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/forgot_pass" element={<ForgotPassword />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
