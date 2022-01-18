import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import App from "./App";

const Demo = () => (
  <>
    <Link to="/">voltar</Link>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/title-1" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
