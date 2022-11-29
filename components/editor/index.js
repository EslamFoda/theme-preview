import React from "react";

import parse from "html-react-parser";

const EditorComp = ({ initialValue }) => {
  return (
    <>
      <>{parse(initialValue)}</>
    </>
  );
};
export default EditorComp;
