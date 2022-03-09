import { createContext, useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import Review from "./pages/Review";

import { proposals } from "./data";

export const GlobalContext = createContext();

const DEMO_DEFAULT_VALUES = {
  title: "my tytle",
  author: "autor",
  summary: "sumario",
  risks: "riscos",
  what_changes_should_be_made_to_the_funding_target: "asdf",
  what_changes_should_be_made_to_the_reserved_rate: "asdf",
  what_changes_should_be_made_to_the_redemption_rate_bonding_curve: "asdf",
  what_changes_should_be_made_to_the_reconfiguration_ballot: "asdf",
  what_is_the_expected_impact_of_these_changes: "",
  sponsors: "asf"
};
const DEMO_DEFAULT_CHECK = {
  what_is_the_goal_of_this_proposal: true,
  what_is_the_expected_impact_of_these_changes: true,
  what_help_might_be_needed_from_juicebox_dao_and_its_members: true
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const NotFound = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  text-align: center;
`;

export default function App() {
  const [template, setTemplate] = useState("");
  const valuesRef = useRef({
    check: {}
  });

  console.log("valuesRef", valuesRef.current);

  const updateGlogalRef = (type, name, value) => {
    if (type === "input")
      valuesRef.current = { ...valuesRef.current, [name]: value };
    if (type === "checkbox")
      valuesRef.current = {
        ...valuesRef.current,
        check: { ...valuesRef.current.check, [name]: value }
      };
  };

  // set a proposal if page opened directly
  useEffect(() => {
    const { pathname } = window.location;
    if (pathname.includes("proposal/")) {
      const proposal = pathname.replace("/proposal/", "");
      setTemplate(proposal);
    }
  }, []);

  useEffect(() => {
    console.log("template", template);
  }, [template]);

  // useEffect(() => {
  //   console.log("values", values);
  // }, [values]);

  return (
    <div>
      <GlobalContext.Provider
        value={{ template, setTemplate, valuesRef, updateGlogalRef }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="review" element={<Review />} />
            {proposals.map((proposal) => (
              <Route
                key={proposal.model}
                path={`proposal/${proposal.model}`}
                element={<Proposal proposal={proposal} />}
              />
            ))}
            <Route
              path="*"
              element={
                <NotFound>
                  404: Not Found. <Link to="/">Home</Link>
                </NotFound>
              }
            />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}
