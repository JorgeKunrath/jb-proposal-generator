import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

import Field from "../components/Field";
import Header from "../components/Header";
import { commonFields } from "../data";
import useData from "../useData";

const Wrapper = styled.div`
  padding-bottom: 4rem;
`;

export default function Proposal({ proposal }) {
  const { valuesRef } = useData();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const invalidFields = [
      ...Object.values(commonFields),
      ...(proposal.fields ?? [])
    ]
      .filter((field) => {
        if (!valuesRef.current[field.name]) {
          if (!valuesRef.current.check[field.name]) {
            return true;
          }
        }
        return false;
      })
      .map((field) => field.name);

    if (invalidFields.length) {
      alert(
        `All fields need to be fullfiled or be marked as empty. Fields that need revision:\n\n${invalidFields
          .join(";\n")
          .replaceAll("_", " ")}.`
      );
    } else {
      navigate("/review");
    }
  };

  return (
    <Wrapper className="site-container">
      <Header />
      <Link to="/">voltar</Link>
      <div>
        <h1>{proposal.emoji + proposal.title}</h1>
        {proposal.desc && <p style={{ opacity: 0.7 }}>{proposal.desc}</p>}
      </div>
      <form onSubmit={handleSubmit} key={proposal.title}>
        {Object.values(commonFields).map((field) => (
          <Field key={field.name} field={field} isOptional={false} />
        ))}
        {(proposal.fields ?? []).map((field) => (
          <Field key={field.name} field={field} isOptional={true} />
        ))}
        <Button type="submit">Review</Button>
      </form>
    </Wrapper>
  );
}
