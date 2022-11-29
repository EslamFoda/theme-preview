import Image from "next/image";
import { FC } from "react";
import cn from "clsx";

interface Props {
  design: "design1" | "design4" | "design5";
  client: {
    pic: string;
  };
}

const ClientPic: FC<Props> = ({ client, design }) => {
  const rootClassName = cn("relative", {
    "h-20 w-44": design === "design1",
    "h-20 w-40": design === "design4",
    "h-16 w-24": design === "design5",
  });
  return (
    <div className={rootClassName}>
      <Image
        src={client.pic}
        layout="fill"
        objectFit="contain"
        className="absolute"
        alt="client picture"
      />
    </div>
  );
};

export default ClientPic;
