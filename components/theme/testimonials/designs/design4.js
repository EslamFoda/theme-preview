import Container from "../../../ui/container";
import EditorComp from "../../../editor";
import UserPic from "./common/userPic";
import Title from "./common/title";
import SubTitle from "./common/subTitle";
import { testimonialsData } from "../../../../constant";
const Design4 = ({  choose, testiData, headers }) => {
  return (
    <>
      {choose ? (
        <div>
          <Container className="p-1">
            <div className="text-center space-y-1 mb-2">
              <Title />
              <SubTitle />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2">
              {testimonialsData?.map((client, index) => (
                <div key={client.id}>
                  <div className="flex">
                    <div className="w-full h-full justify-between flex flex-col gap-1   p-1  rounded-md   border-gray-border border">
                      <p className="text-very-small ">{client.review}</p>
                      <div className="flex items-center gap-1">
                        <div
                          style={{ backgroundImage: `url(${client.pic})` }}
                          className="w-4 h-4 bg-no-reapeat bg-cover bg-center bg-white shadow-md  rounded-full border-1 border-[#dfe0e1]"
                        ></div>

                        <div className="space-y-1 flex-1">
                          <h1 className="text-small">{client.name}</h1>
                          <p className="text-very-small font-semibold">
                            {client.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      ) : (
        <div>
          <Container className="py-16">
            <div className="text-center space-y-4 mb-16">
              <EditorComp initialValue={headers?.title} />
              <EditorComp initialValue={headers?.subTitle} />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
              {testiData?.map((client, index) => (
                <div key={client.id}>
                  <div className="flex">
                    <div className="w-full h-full justify-between flex flex-col gap-4   p-6  rounded-md   border-gray-border border">
                      <EditorComp initialValue={client.review} />
                      <div className="flex items-center gap-4">
                        <UserPic testi={client} design="design4" />
                        <div className="space-y-4 flex-1">
                          <EditorComp initialValue={client.userName} />

                          <EditorComp initialValue={client.position} />
                        </div>
                      </div>
                    </div>
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

export default Design4;
