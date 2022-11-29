import React from "react";
import Container from "../../../ui/container";
import EditorComp from "../../../editor";

const Design3 = ({ choose = false, footerData }) => {
  return (
    <>
      {choose ? (
        <div className=""></div>
      ) : (
        <div>
          <Container className="py-10 text-center">
            <div className=" border-b border-solid py-5 border-b-[#96999d]">
              <EditorComp initialValue={footerData.desc} />
              <ul className="flex justify-center flex-wrap gap-5">
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
            <div className="  gap-6 py-5">
              <EditorComp initialValue={footerData.copyRight} />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design3;
