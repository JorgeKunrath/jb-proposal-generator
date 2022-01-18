import styled from "styled-components";

import { proposals } from "./data";

const Header = styled.div`
  border: 2px solid blue;
  text-align: center;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Card = styled.a`
  border: 2px solid black;
  font-weight: 1.5rem;
`;

export default function App() {
  return (
    <div className="App">
      <Header>JB</Header>
      <h1>Bem vindo ao gerador de propostas da Juice Box etc</h1>

      <Grid>
        {proposals.map((proposal) => (
          <Card key={"/" + proposal.model} href={proposal.model}>
            {proposal.emoji} - {proposal.title}
          </Card>
        ))}
      </Grid>
    </div>
  );
}
