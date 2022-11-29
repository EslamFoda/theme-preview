import React from "react";
import dynamic from "next/dynamic";
import {
  HiOutlineSupport,
  HiOutlineBriefcase,
  HiOutlineUsers,
} from "react-icons/hi";
import { TbAsteriskSimple } from "react-icons/tb";
const Design1 = dynamic(() => import("./designs/design1"));
const Design2 = dynamic(() => import("./designs/design2"));
const Design3 = dynamic(() => import("./designs/design3"));
const Design4 = dynamic(() => import("./designs/design4"));
const Design5 = dynamic(() => import("./designs/design5"));

const MainFeatured = ({ comp, animate }) => {
  const { designNum, compData, backgroundColor } = comp;

  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
  };

  const icons = {
    support: HiOutlineSupport,
    users: HiOutlineUsers,
    briefcase: HiOutlineBriefcase,
    asterisk: TbAsteriskSimple,
  };
  const FeaturedComp = designs[`design${designNum}`];

  return (
    <div
      style={{
        backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
      }}
      className={`relative group transition ease-in-out duration-700   w-full `}
    >
      <div data-aos={animate}>
        <FeaturedComp
          icons={icons}
          featuredHeader={compData.header}
          featuredData={compData.items}
        />
      </div>
    </div>
  );
};
export default MainFeatured;
