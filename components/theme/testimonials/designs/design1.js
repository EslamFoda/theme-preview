import Container from "../../../ui/container";
import EditorComp from "../../../editor";
import UserPic from "./common/userPic";
import TestiGridData from "./common/testiGridData";
import Title from "./common/title";
import SubTitle from "./common/subTitle";
const Design1 = ({
  choose,
  testiData,
  headers,
}) => {
  return (
    <>
      {choose ? (
        <div>
          <Container className="p-1">
            <div className="text-center space-y-1 mb-4">
              <Title />
              <SubTitle />
            </div>
            <TestiGridData />
          </Container>
        </div>
      ) : (
        <div>
          <Container className="py-16">
            <div className="text-center space-y-4 mb-16">
              <EditorComp initialValue={headers?.title} />
              <EditorComp initialValue={headers?.subTitle} />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-14">
              {testiData?.map((client, index) => (
                <div key={client.id}>
                  <div className="w-full bg-white flex flex-col gap-4 self-start  p-10 pt-12  shadow-big relative">
                    <UserPic testi={client} design="design1" />
                    <EditorComp initialValue={client.userName} />
                    <EditorComp initialValue={client.position} />
                    <EditorComp initialValue={client.review} />
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
