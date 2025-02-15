import "./App.css";
import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Achat from "./components/Achat";
import PCInfos from "./components/PCInfos";
import { useState, useEffect } from "react";
import Panier from "./components/Panier";

function App() {
  // Initialize state with localStorage data
  const [panier, setPanier] = useState(() => {
    try {
      const saved = localStorage.getItem("panier");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  // Persist to localStorage whenever panier changes
  useEffect(() => {
    localStorage.setItem("panier", JSON.stringify(panier));
  }, [panier]);

  function handleAddToCart(product) {
    setPanier((prevPanier) => {
      const exists = prevPanier.some((item) => item.id === product.id);
      if (exists) {
        alert("This item is already in the cart!");
        return prevPanier;
      }
      return [...prevPanier, product];
    });
  }

  function handleDeleteFromCart(index) {
    setPanier((prevPanier) => prevPanier.filter((_, i) => i !== index));
  }

  const cartItemCount = panier.length;

  return (
    <BrowserRouter>
      <Header numberCommande={cartItemCount} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home onAddToCart={handleAddToCart} />}
        />
        <Route path="/achat" element={<Achat panier={panier} />} />
        <Route path="/card/:id" element={<PCInfos />} />
        <Route
          path="/panier"
          element={
            <Panier cartItems={panier} onDeleteItem={handleDeleteFromCart} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
