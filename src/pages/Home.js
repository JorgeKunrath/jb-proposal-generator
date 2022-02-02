import styled from "styled-components";
import { Link } from "react-router-dom";

import { proposals } from "../data";
import useData from "../useData";
import Header from "../components/Header";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Card = styled(Link)`
  border: 2px solid var(--brand-orange);
  padding: 0.5rem;
  padding-right: 1rem;
  font-weight: 1.5rem;
  line-height: 1.5rem;

  display: flex;
  align-items: center;
  text-decoration: none;

  span {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    padding: 0.5rem 0;
  }
`;

export default function Home() {
  const { setTemplate } = useData();

  return (
    <div className="site-container">
      <Header />
      <h1>Welcome to Lab108's proposal generator for Juicebox governance</h1>
      <p>
        Choose a proposal type bellow to write your own. If you are not sure
        what type to start with, choose `Default`
      </p>
      <Grid>
        {proposals.map((proposal) => (
          <Card
            key={proposal.model}
            onClick={() => setTemplate(proposal.model)}
            to={"proposal/" + proposal.model}
          >
            <span>{proposal.emoji}</span>
            {proposal.title}
          </Card>
        ))}
      </Grid>
      <p>
        If you have any doubts, reach out on our{" "}
        <a
          href="https://discord.gg/MUKCYFYJkW"
          target="_blank"
          rel="noreferrer"
        >
          discord server
        </a>
      </p>
    </div>
  );
}
