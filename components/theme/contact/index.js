import React from "react";
import dynamic from "next/dynamic";

const Design1 = dynamic(() => import("./designs/design1"));
const Design2 = dynamic(() => import("./designs/design2"));

const MainContact = ({ comp, animate }) => {
  const { designNum, compData, backgroundColor } = comp;
  const designs = {
    design1: Design1,
    design2: Design2,
  };

  const ContactComp = designs[`design${designNum}`];

  return (
    <div
      style={{
        backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
      }}
      className={`relative group transition ease-in-out duration-700  w-full `}
    >
      <div data-aos={animate}>
        <ContactComp contactData={compData} />
      </div>
    </div>
  );
};
export default MainContact;
