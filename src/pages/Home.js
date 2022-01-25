import styled from "styled-components";
import { Link } from "react-router-dom";

import { proposals } from "../data";
import useData from "../useData";

const Header = styled.div`
  border: 2px solid blue;
  text-align: center;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Card = styled(Link)`
  border: 2px solid black;
  font-weight: 1.5rem;
`;

export default function Home() {
  const { setTemplate } = useData();

  return (
    <div>
      <Header>JB</Header>
      <h1>Bem vindo ao gerador de propostas da Juice Box etc</h1>
      <Grid>
        {proposals.map((proposal) => (
          <Card
            key={proposal.model}
            onClick={() => setTemplate(proposal.model)}
            to={"proposal/" + proposal.model}
          >
            {proposal.emoji} - {proposal.title}
          </Card>
        ))}
      </Grid>
    </div>
  );
}
