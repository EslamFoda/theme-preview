import React from "react";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import Design4 from "./designs/design4";
import Design5 from "./designs/design5";

const MainServices = ({ comp, animate }) => {
  const { designNum, compData, backgroundColor } = comp;

  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
  };

  const ServicesComp = designs[`design${designNum}`];

  return (
    <div
      style={{
        backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
      }}
      className={`relative group transition ease-in-out duration-700   w-full `}
    >
      <div data-aos={animate}>
        <ServicesComp
          serviceData={compData.items}
          serviceHeaders={compData.headers}
        />
      </div>
    </div>
  );
};

export default MainServices;
