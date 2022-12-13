import React from "react";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import Design4 from "./designs/design4";
import Design5 from "./designs/design5";
import Design6 from "./designs/design6";

const MainTestimonials = ({ comp, animate }) => {
  const { designNum, compData, backgroundColor, backgroundImage, bgImgColor } = comp;

  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
    design6: Design6,
  };

  const TestiComp = designs[`design${designNum}`];

  return (
    <div
    style={{
      backgroundImage: `linear-gradient(rgba(${bgImgColor?.r}, ${bgImgColor?.g}, ${bgImgColor?.b}, ${bgImgColor?.a}), rgba(${bgImgColor?.r}, ${bgImgColor?.g}, ${bgImgColor?.b}, ${bgImgColor?.a})), url(${backgroundImage})`,
      backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
    }}
      className={`relative group transition ease-in-out duration-700  w-full `}
    >
      <div data-aos={animate}>
        <TestiComp testiData={compData.items} headers={compData.headers} />
      </div>
    </div>
  );
};

export default MainTestimonials;
