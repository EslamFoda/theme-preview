import Design1 from "./designs/design1";
import Design2 from "./designs/design2";

const MainWork = ({ comp, animate }) => {
  const { designNum, backgroundColor, compData, backgroundImage, bgImgColor } =
    comp;
  const designs = {
    design1: Design1,
    design2: Design2,
  };
  const WorkComp = designs[`design${designNum}`];

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(${bgImgColor?.r}, ${bgImgColor?.g}, ${bgImgColor?.b}, ${bgImgColor?.a}), rgba(${bgImgColor?.r}, ${bgImgColor?.g}, ${bgImgColor?.b}, ${bgImgColor?.a})), url(${backgroundImage})`,
        backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
      }}
      className={`relative group transition ease-in-out duration-700 bg-no-repeat bg-cover bg-center    w-full `}
    >
      <div data-aos={animate}>
        <WorkComp workData={compData} />
      </div>
    </div>
  );
};

export default MainWork;
