import Container from "../../../ui/container";
import Title from "../../services/common/title";
import SubTitle from "../../services/common/subTitle";

import { galleryDatas } from "../../../../constant/";
import cn from "clsx";
import Image from "next/image";
import EditorComp from "../../../editor";
import ImageComp from "../common/imageComp";
const Design3 = ({ choose, galleryData }) => {
  const gridClassName = cn(
    "grid gap-6 lg:grid-cols-2 md:grid-cols-2  grid-cols-2",
    {}
  );
  return (
    <>
      {choose ? (
        <Container className="py-0 pt-2">
          <div className="text-center space-y-1  mb-2">
            <Title choose={choose} />
            <SubTitle choose={choose} />
          </div>
          <div
            className={"grid gap-1 lg:grid-cols-2 md:grid-cols-2  grid-cols-2"}
          >
            {galleryDatas.map((gallery) => (
              <div
                key={gallery.id}
                className="relative hover:shadow-custom transition-all h-12 w-full"
              >
                <Image
                  src={gallery.img}
                  className="absolute"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <div>
          <Container className="py-16 ">
            <div className="text-center space-y-4 mb-16">
              <EditorComp initialValue={galleryData.title} />
              <EditorComp initialValue={galleryData.subTitle} />
            </div>
            <div className={gridClassName}>
              {galleryData.items.map((gallery, index) => (
                <div key={gallery.id}>
                  <div className="relative hover:shadow-custom transition-all lg:h-72 md:h-52 h-32 w-full">
                    <ImageComp image={gallery.pic} />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design3;
