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
          <Container className="py-10">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 border-b border-solid py-5 border-b-[#96999d]">
              <EditorComp initialValue={footerData.desc} />
              <ul className="flex  gap-5">
                <li>
                  <span
                    className="block cursor-pointer font-bold text-black"
                    aria-current="page"
                  >
                    Home
                  </span>
                </li>
                <li>
                  <span className="block  cursor-pointer font-bold text-black">
                    About
                  </span>
                </li>
                <li>
                  <span className="block  cursor-pointer font-bold text-black">
                    Services
                  </span>
                </li>
                <li>
                  <span className="block cursor-pointer  font-bold text-black">
                    Pricing
                  </span>
                </li>
                <li>
                  <span className="block  cursor-pointer font-bold text-black">
                    Contact
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2  gap-6 py-5">
              <EditorComp initialValue={footerData.copyRight} />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design1;
