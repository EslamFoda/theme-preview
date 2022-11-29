import React from "react";
import Container from "../../../ui/container";
import EditorComp from "../../../editor";

const Design1 = ({ choose = false, footerData }) => {
  return (
    <>
      {choose ? (
        <div className=""></div>
      ) : (
        <div>
          <Container className="py-10 text-center">
            <div className=" border-b border-solid py-5 border-b-[#96999d]">
              <EditorComp initialValue={footerData.desc} />
            </div>
            <div className="  gap-6 py-5">
              <EditorComp initialValue={footerData.copyRight} />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design1;
