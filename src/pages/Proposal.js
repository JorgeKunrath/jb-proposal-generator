import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useData from "../useData";

const typeToComp = {
  text: (f, handleInputChange, values) => (
    <input
      name={f.name}
      disabled={values.check[f.name] ? 1 : 0}
      onChange={(e) => handleInputChange(e, f)}
      value={values[f.name] ?? ""}
      type="text"
    />
  ),
  // datepicker: (f, handleInputChange, values) => (
  //   <input
  //     name={f.name}
  //     onChange={(e) => handleInputChange(e, f)}
  //     value={values[f.name] ?? ''}
  //     type="date"
  //   />
  // ),
  textarea: (f, handleInputChange, values) => (
    <textarea
      name={f.name}
      disabled={values.check[f.name] ? 1 : 0}
      onChange={(e) => handleInputChange(e, f)}
      value={values[f.name] ?? ""}
    />
  )
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
  const { values, setValues } = useData();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: validate form (?)

    navigate("/review");
  };

  const handleInputChange = (e, f) => {
    const { value } = e.target;
    const { name } = f;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleCheckbox = (f) => (e) => {
    console.log("checkbox event::", e);
    const oldValue = values.check[f.name];
    setValues((values) => ({
      ...values,
      check: { ...values.check, [f.name]: !oldValue }
    }));
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
              {typeToComp[f.type]?.(f, handleInputChange, values)}
            </Label>
            <label>
              <input
                type="checkbox"
                name={`check-${f.name}`}
                checked={values?.check?.[f.name] ? 1 : 0}
                onChange={handleCheckbox(f)}
              />
              Empty
            </label>
          </FieldWrapper>
        ))}
        <button type="submit">Send</button>
      </form>
    </>
  );
}
