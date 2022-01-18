import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import App from "./App";
import { proposals } from "./data";

const ProposalPage = ({ proposal }) => (
  <>
    <Link to="/">voltar</Link>
    <div>
      <h1>{proposal.emoji + proposal.title}</h1>
    </div>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {proposals.map((proposal) => (
          <Route
            path={`/${proposal.model}`}
            element={<ProposalPage proposal={proposal} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
