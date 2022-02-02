import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useData from "../useData";

import { commonFields, proposals } from "../data";
import { useEffect } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;

  h4 {
    font-size: 2rem;
  }
  h5 {
    font-size: 1rem;
  }
  h1,
  h3,
  h4,
  h5 {
    margin: 0;
  }

  h4 {
    font-size: 1.5rem;
  }

  .is-empty {
    text-decoration: line-through;
  }
`;

export default function Review() {
  const { template, valuesRef } = useData();

  const navigate = useNavigate();

  const proposal = proposals.find((prop) => prop.model === template);
  console.log("this proposal", proposal);
  console.log("this values", valuesRef.current);

  // Redirects to homepage if there's no template to render
  //   e.g. open directly
  useEffect(() => {
    if (!proposal) {
      navigate("/");
    }
  }, [proposal, navigate]);

  const getValue = (name) =>
    valuesRef.current.check[name] ? "<empty>" : valuesRef.current[name];

  const getMDContent = () => {
    return [...Object.values(commonFields), ...(proposal.fields ?? [])]
      .map(({ label, desc, name }) => {
        const empty = valuesRef.current.check[name] ? "~~" : "";
        const description = desc ? `\n__${desc}__` : "";

        return `### ${empty}${label}${empty}${description}\n\n${getValue(
          name
        )}`;
      })
      .join("\n\n\n");
  };

  const getFileUrl = (text) => {
    const data = new File([text], "Proposal.md", {
      type: "text/plain"
    });
    return window.URL.createObjectURL(data);
  };

  if (!proposal) return null;

  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <h1>Review page</h1>
      <h3>{template}</h3>
      {[...Object.values(commonFields), ...(proposal.fields ?? [])].map(
        (field) => (
          <div>
            <h4
              className={valuesRef.current.check[field.name] ? "is-empty" : ""}
            >
              {field.label}
            </h4>
            {field.desc && <h5>{field.desc}</h5>}
            {getValue(field.name)}
          </div>
        )
      )}

      <a
        href={getFileUrl(getMDContent())}
        download="Proposal.md"
        id="downloadlink"
      >
        Download
      </a>
    </Wrapper>
  );
}
