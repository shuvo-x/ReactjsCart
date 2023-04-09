import Cart from "./components/Cart";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Products from "./components/Products";
import Home from "./components/Home";
import "./styles/app.scss";

function App() {
  return (
  <>
    <BrowserRouter>  
       <Header />
       <Routes>
       <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
       </Routes>
       <Toaster />
    </BrowserRouter>
  </>
  );
}

export default App;
