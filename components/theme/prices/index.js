import React from "react";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";

const MainPrices = ({ comp, animate }) => {
  const { compData, backgroundColor, designNum, backgroundImage, bgImgColor } = comp;
  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
  };
  const PricesComp = designs[`design${designNum}`];

  return (
    <div
    style={{
      backgroundImage: `linear-gradient(rgba(${bgImgColor?.r}, ${bgImgColor?.g}, ${bgImgColor?.b}, ${bgImgColor?.a}), rgba(${bgImgColor?.r}, ${bgImgColor?.g}, ${bgImgColor?.b}, ${bgImgColor?.a})), url(${backgroundImage})`,
      backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
    }}
      className={`relative group transition ease-in-out duration-700  w-full `}
    >
      <div data-aos={animate}>
        <PricesComp pricesData={compData} />
      </div>
    </div>
  );
};

export default MainPrices;
