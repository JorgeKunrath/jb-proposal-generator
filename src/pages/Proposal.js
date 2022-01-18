import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useData from "../useData";

const typeToComp = {
  text: (f) => <input name={f.name} type="text" />,
  datepicker: (f) => <input name={f.name} type="date" />,
  textarea: (f) => <textarea name={f.name} />
};

const FieldWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

// TODO:
// save chosen template
// save state in a global object
//    allow to empty state

export default function Proposal({ proposal }) {
  const { setValues } = useData();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData.entries());
    setValues((values) => ({ ...values, ...data }));

    navigate("/review");
  };

  return (
    <>
      <Link to="/">voltar</Link>
      <div>
        <h1>{proposal.emoji + proposal.title}</h1>
        {proposal.desc && <h3>{proposal.desc}</h3>}
      </div>
      <form onSubmit={handleSubmit}>
        {(proposal.fields ?? []).map((f) => (
          <FieldWrapper key={f.label}>
            <Label>
              <strong>{f.label}</strong>
              {f.desc}
              {typeToComp[f.type]?.(f)}
            </Label>
            {f.required ? "required" : "[ ] empty"}
          </FieldWrapper>
        ))}
        <button type="submit">Send</button>
      </form>
    </>
  );
}
