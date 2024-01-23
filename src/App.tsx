import React from "react";
import "./App.css";
import Header from "./components/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Home from "./Pages/Home/Home";

function App() {
  const router = useRoutes(routes);
  return (
    // <ContextDataProvider>
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
    // </ContextDataProvider>
  );
}

export default App;
