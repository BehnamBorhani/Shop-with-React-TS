import React from "react";
import "./App.css";
import Header from "./components/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Home from "./Pages/Home/Home";
import CartContextProvider from "./context/cartContext";

function App() {
  const router = useRoutes(routes);
  return (
    <CartContextProvider>
      <div className="app">
        <Header />

        {/* Start Content */}
        {router}

        {/* Finish Content */}

        <footer>
          <a target={"_blank"} href="https://sabzlearn.ir">
            Sabzlearn.ir
          </a>
        </footer>
      </div>
    </CartContextProvider>
  );
}

export default App;
