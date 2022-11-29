import Container from "../../../ui/container";
import { TbQuote } from "react-icons/tb";
import EditorComp from "../../../editor";
import Title from "./common/title";
import SubTitle from "./common/subTitle";
import { testimonialsData } from "../../../../constant";
const Design5 = ({ choose, testiData, headers }) => {
  return (
    <>
      {choose ? (
        <div>
          <Container className="p-1">
            <div className="text-center space-y-1 mb-2">
              <Title />
              <SubTitle />
            </div>
            <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-1">
              {testimonialsData?.map((client, index) => (
                <div
                  className="odd:bg-primary   testi5  flex  rounded-sm flex-col self-start   even:bg-white odd:text-white"
                  key={client.id}
                >
                  <div className="w-full space-y-1  p-1  shadow-md ">
                    <TbQuote size={10} className="quote-icon" />
                    <p className="text-very-small ">{client.review}</p>
                    <h1 className="text-small">{client.name}</h1>
                    <p className="text-very-small font-semibold">
                      {client.position}
                    </p>
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
            <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-14">
              {testiData?.map((client, index) => (
                <div
                  className="odd:bg-primary   testi5  flex  rounded-md flex-col self-start   even:bg-white odd:text-white"
                  key={client.id}
                >
                  <div className="w-full space-y-4  p-8  shadow-big ">
                    <TbQuote size={40} className="quote-icon" />
                    <EditorComp initialValue={client.review} />
                    <EditorComp initialValue={client.userName} />
                    <EditorComp initialValue={client.position} />
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

export default Design5;
