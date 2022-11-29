import React from "react";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import Design4 from "./designs/design4";
import Design5 from "./designs/design5";

const MainFooter = ({ comp }) => {
  const { designNum, compData } = comp;
  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
  };

  const FooterComp = designs[`design${designNum}`];

  return (
    <div className={`relative group  w-full `}>
      <FooterComp footerData={compData} />
    </div>
  );
};

export default MainFooter;
