import { useEffect, useState } from "react";
import styled from "styled-components";

import useData from "../useData";

/**
 * each input+checkbox block has it's own state
 * on value changes it updates the global ref
 * on mount it reads the ref
 */

const Wrapper = styled.div`
  margin-bottom: 2rem;

  input[type="text"],
  textarea {
    background-color: transparent;
    border: 1px solid var(--gray);
    font: inherit;
    color: var(--soft-white);
    padding: 0.5rem;

    &:disabled {
      opacity: 0.5;
      text-decoration: line-through;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const Label = styled.label`
  display: grid;
  grid-gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const InputText = ({ field, isEmpty, value, setValue }) => (
  <input
    name={field.name}
    disabled={isEmpty ? 1 : 0}
    onChange={(e) => setValue(e.target.value)}
    value={value}
    type="text"
  />
);

const InputTextarea = ({ field, isEmpty, value, setValue }) => (
  <textarea
    name={field.name}
    disabled={isEmpty ? 1 : 0}
    onChange={(e) => setValue(e.target.value)}
    value={value}
    rows={5}
  />
);

const typeToComp = {
  text: (field, isEmpty, value, setValue) => (
    <InputText
      value={value}
      setValue={setValue}
      field={field}
      isEmpty={isEmpty}
    />
  ),
  textarea: (field, isEmpty, value, setValue) => (
    <InputTextarea
      value={value}
      setValue={setValue}
      field={field}
      isEmpty={isEmpty}
    />
  )
};

const Input = ({ field, isEmpty, value, setValue }) => (
  <Label>
    <strong>{field.label}</strong>
    {field.desc && <span>{field.desc}</span>}
    {typeToComp[field.type]?.(field, isEmpty, value, setValue)}
  </Label>
);

const Checkbox = ({ field, value, setValue }) => (
  <div className="custom-checkbox">
    <input
      type="checkbox"
      id={`check-${field.name}`}
      name={`check-${field.name}`}
      checked={value ? 1 : 0}
      onChange={() => setValue((v) => !v)}
      value="asdf"
    />
    <label htmlFor={`check-${field.name}`}>Empty</label>
  </div>
);

export default function Field({ field, isOptional }) {
  const { valuesRef, updateGlogalRef } = useData();

  const [value, setValue] = useState(valuesRef?.current?.[field.name] ?? "");
  const [checkbox, setCheckbox] = useState(
    !!valuesRef.current?.check?.[field.name]
  );

  useEffect(() => {
    updateGlogalRef("input", field.name, value);
  }, [updateGlogalRef, field.name, value]);

  useEffect(() => {
    updateGlogalRef("checkbox", field.name, checkbox);
  }, [updateGlogalRef, field.name, checkbox]);

  return (
    <Wrapper>
      <Input
        field={field}
        value={value}
        setValue={setValue}
        isEmpty={isOptional ? checkbox : false}
      />
      {isOptional && (
        <Checkbox field={field} value={checkbox} setValue={setCheckbox} />
      )}
    </Wrapper>
  );
}
