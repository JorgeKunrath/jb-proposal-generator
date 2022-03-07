import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useData from "../useData";

import { commonFields, proposals } from "../data";
import { useEffect } from "react";
import Button from "../components/Button";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding-bottom: 4rem;

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
    valuesRef.current.check[name] ? "__empty__" : valuesRef.current[name];

  const getMDContent = () => {
    const header = `# ${valuesRef.current?.title}\n\n${proposal.emoji} ${
      proposal.title
    } - ${new Date().toISOString().split("T")[0]}`;

    const fieldsStr = [
      ...Object.values(commonFields),
      ...(proposal.fields ?? [])
    ]
      .map(({ label, desc, name }) => {
        const empty = valuesRef.current.check[name] ? "~~" : "";
        const description = desc ? `\n__${desc}__` : "";

        return `### ${empty}${label}${empty}${description}\n\n${getValue(
          name
        )}`;
      })
      .join("\n\n\n");

    return `${header}\n\n${fieldsStr}`;
  };

  const getFileUrl = (text) => {
    const data = new File([text], "Proposal.md", {
      type: "text/plain"
    });
    return window.URL.createObjectURL(data);
  };

  if (!proposal) return null;

  return (
    <Wrapper className="site-container">
      <Link to="/">Home</Link>
      <Link to={"/proposal/" + proposal.model}>Back to edit mode</Link>
      <h1>Review page</h1>
      <h3>{template}</h3>
      {[...Object.values(commonFields), ...(proposal.fields ?? [])].map(
        (field) => (
          <div key={field.name}>
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

      <Link to={"/proposal/" + proposal.model}>Back to edit mode</Link>
      <Button
        as="a"
        href={getFileUrl(getMDContent())}
        download={`${valuesRef.current?.title}.md`}
      >
        Download
      </Button>
    </Wrapper>
  );
}
