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
`;

export default function Review() {
  const { template, values } = useData();

  const navigate = useNavigate();

  const proposal = proposals.find((prop) => prop.model === template);
  console.log("this proposal", proposal);
  console.log("this values", values);

  // Redirects to homepage if there's no template to render
  //   e.g. open directly
  useEffect(() => {
    if (!proposal) {
      navigate("/");
    }
  }, [proposal, navigate]);

  const getMDContent = () => {
    return [...Object.values(commonFields), ...(proposal.fields ?? [])]
      .map(
        ({ label, desc, name }) =>
          `### ${label}\n_${desc && desc}_\n\n${values[name]}`
      )
      .join("\n\n\n");
  };

  // const getDownloadLink = () => {
  //   const makeTextFile = (text) => {
  //     const data = new Blob([text], { type: "text/plain" });

  //     return window.URL.createObjectURL(data);
  //   };

  //   var create = document.getElementById("create");
  //   var textbox = document.getElementById("textbox");

  //   create.addEventListener(
  //     "click",
  //     function () {
  //       var link = document.getElementById("downloadlink");
  //       link.href = makeTextFile(textbox.value);
  //       link.style.display = "block";
  //     },
  //     false
  //   );
  // };

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
            <h4>{field.label}</h4>
            {field.desc && <h5>{field.desc}</h5>}
            {values[field.name]}
          </div>
        )
      )}

      <hr />

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
