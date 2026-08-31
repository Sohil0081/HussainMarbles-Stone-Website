import './App.css';

import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import Projects from "./Components/Projects";

import Home from './Tabs/Home';

import ScrollToTop from './Components/ScrollToTop';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  return (

    <Router>

      {/* Scroll to top whenever route changes */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />


      <Routes>

        {/* =========================
                    HOME
                ========================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route path="/projects" element={<Projects />} />


        {/* =========================
                    ALL PRODUCTS
                ========================= */}

        <Route
          path="/products"
          element={<Products type="All" />}
        />


        {/* =========================
                    PRODUCT CATEGORY
                ========================= */}

        <Route
          path="/products/:type"
          element={<Products />}
        />


        {/* =========================
                    PRODUCT DETAILS
                ========================= */}

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />


        {/* =========================
                    ABOUT
                ========================= */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* =========================
                    CONTACT
                ========================= */}

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </Router>

  );
}

export default App;