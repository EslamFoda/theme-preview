import { FC } from "react";

import cn from "clsx";

interface Props {
  image: string;
  design?: "design5";
}

const ImageComp: FC<Props> = ({ image, design }) => {
  const rootClassName = cn("h-full w-full relative", {
    "hover:outline-none": design === "design5",
  });

  return (
    <div className={rootClassName}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-no-repeat relative service-img bg-center h-full w-full bg-cover "
      ></div>
    </div>
  );
};

export default ImageComp;
