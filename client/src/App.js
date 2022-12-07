import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <header>
        <nav>
          <Navbar/>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/upload_images" element={<Upload/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
