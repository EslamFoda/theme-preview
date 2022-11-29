import React from "react";
import Container from "../../../ui/container";
import EditorComp from "../../../editor";

const Design4 = ({ choose = false, footerData }) => {
  return (
    <>
      {choose ? (
        <div className=""></div>
      ) : (
        <div>
          <Container className="py-10 text-center">
            <div className="py-8">
              <EditorComp initialValue={footerData.copyRight} />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design4;
