import { FC } from "react";
import cn from "clsx";
import useMainData from "../../../../hooks/useMainData";

interface Props {
  image: string;
  design?: "design2" | "design4" | "design5";
}

const ImageComp: FC<Props> = ({ image, design }) => {
  const { editSections } = useMainData();
  const rootClassName = cn("h-72 w-full relative", {
    "hover:outline-none": design === "design4",
  });

  return (
    <div className={rootClassName}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-no-repeat relative service-img bg-center h-full w-full bg-cover "
      >
        {design === "design4" ? (
          <svg
            className="absolute -bottom-1 left-0 w-[101%]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,64L60,90.7C120,117,240,171,360,160C480,149,600,75,720,74.7C840,75,960,149,1080,170.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        ) : null}
      </div>
    </div>
  );
};

export default ImageComp;
