import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useData from "../useData";

import { proposals } from "../data";

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

  const proposal = proposals.find((prop) => prop.model === template);
  console.log("this proposal", proposal);
  console.log("this values", values);

  const hanldleExport = () => {};

  const getMDContent = () => {
    return (proposal?.fields ?? [])
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

  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <h1>Review page</h1>
      <h3>{template}</h3>
      {(proposal?.fields ?? []).map((field) => (
        <div>
          <h4>{field.label}</h4>
          {field.desc && <h5>{field.desc}</h5>}
          {values[field.name]}
        </div>
      ))}

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
