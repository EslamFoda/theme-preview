import Container from "../../../ui/container";
import EditorComp from "../../../editor";
import UserPic from "./common/userPic";
import { TbQuote } from "react-icons/tb";

const Design6 = ({ testiData, headers, comp, compIndex, themeData }) => {
  return (
    <>
      <div>
        <Container className="py-16">
          <div className="text-center space-y-4 mb-16">
            <EditorComp initialValue={headers?.title} />
            <EditorComp initialValue={headers?.subTitle} />
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-16">
            {testiData?.map((client, index) => (
              <div key={client.id}>
                <div className="flex relative">
                  <div className="w-full h-full z-10 relative space-y-4 justify-between flex flex-col gap-4   p-6  rounded-md  bg-white shadow">
                    <TbQuote size={40} color="#2c925a" />
                    <EditorComp initialValue={client.review} />
                    <div className="space-y-2">
                      <UserPic testi={client} design="design4" />
                      <div className="flex  items-center gap-4">
                        <EditorComp initialValue={client.userName} />
                        <EditorComp initialValue={client.position} />
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-md z-0 h-full absolute bg-gradient-to-r from-primary to-secondary -bottom-3 -right-3"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design6;
