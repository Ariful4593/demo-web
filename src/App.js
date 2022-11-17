import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CategoriyWiseProduct } from './components/CategoriyWiseProduct/CategoriyWiseProduct';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Todos } from './pages/Todos';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/about"
          element={
            <About />
          }
        />

        <Route
          path="/todos"
          element={
            <Todos />
          }
        />
        <Route
          path="/category/:type"
          element={
            <CategoriyWiseProduct />
          }
        />

        <Route
          path="/category/search-item/:searchValue"
          element={
            <CategoriyWiseProduct />
          }
        />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;