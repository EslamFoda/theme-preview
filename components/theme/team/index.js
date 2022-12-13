import React from "react";
import Design1 from "./design/design1";
import Design2 from "./design/design2";
import Design3 from "./design/design3";
import Design4 from "./design/design4";
import Design5 from "./design/design5";

const MainTeam = ({ comp, animate }) => {
  const { designNum, compData, backgroundColor, backgroundImage, bgImgColor } = comp;

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
      backgroundImage: `linear-gradient(rgba(${bgImgColor?.r}, ${bgImgColor?.g}, ${bgImgColor?.b}, ${bgImgColor?.a}), rgba(${bgImgColor?.r}, ${bgImgColor?.g}, ${bgImgColor?.b}, ${bgImgColor?.a})), url(${backgroundImage})`,
      backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
    }}
      className={`relative group transition ease-in-out duration-700 bg-no-repeat bg-cover bg-center   w-full `}
    >
      <div data-aos={animate}>
        <ServicesComp teamData={compData.items} headers={compData.headers} />
      </div>
    </div>
  );
};

export default MainTeam;
