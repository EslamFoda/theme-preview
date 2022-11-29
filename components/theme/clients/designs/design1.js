import Container from "../../../ui/container";
import { clientsData } from "../../../../constant/";
import cn from "clsx";
import Image from "next/image";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import EditorComp from "../../../editor";
import ClientPic from "../common/clientPic";
const Design1 = ({
  choose,
  clientData,
}) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
    }
  );
  return (
    <>
      {choose ? (
        <Container className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-center space-y-1  mb-5">
            <Title choose={choose} title={"Our Clients"} />
            <SubTitle
              choose={choose}
              subTitle={
                "Some of the world’s biggest brands trust us with their services"
              }
            />
          </div>
          <div
            className={
              "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full"
            }
          >
            {clientsData.map((client) => (
              <div
                key={client.id}
                className="relative justify-self-center h-4 w-6"
              >
                <Image
                  src={client.img}
                  layout="fill"
                  objectFit="contain"
                  className="absolute"
                  alt="client picture"
                />
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <div>
          <Container className="py-16 ">
            <div className="text-center space-y-4 mb-16">
              <EditorComp initialValue={clientData.title} />
              <EditorComp initialValue={clientData.subTitle} />
            </div>
            <div className={gridClassName}>
              {clientData.items.map((client, index) => (
                <div className="justify-self-center" key={client.id}>
                  <div>
                    <ClientPic design="design1" client={client} />
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

export default Design1;
