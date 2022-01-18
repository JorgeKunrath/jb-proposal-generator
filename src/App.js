// import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import Review from "./pages/Review";

import { proposals } from "./data";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export default function App() {
  const [template, setTemplate] = useState("");
  const [values, setValues] = useState({});

  useEffect(() => {
    console.log("template", template);
  }, [template]);

  useEffect(() => {
    console.log("values", values);
  }, [values]);

  return (
    <div>
      <GlobalContext.Provider
        value={{ template, setTemplate, values, setValues }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/review" element={<Review />} />
            {proposals.map((proposal) => (
              <Route
                key={proposal.model}
                path={`/${proposal.model}`}
                element={<Proposal proposal={proposal} />}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}
