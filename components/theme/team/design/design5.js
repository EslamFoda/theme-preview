import Container from "../../../ui/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import { teamsData } from "../../../../constant/";
import Name from "../common/name";
import Position from "../common/position";
import cn from "clsx";
import EditorComp from "../../../editor";
import TeamPic from "../common/teamPic";
const Design5 = ({ choose, teamData, headers }) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {}
  );
  return (
    <>
      {choose ? (
        <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-center space-y-1  mb-2">
            <Title choose={choose} />
            <SubTitle choose={choose} />
          </div>
          <div
            className={
              "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full"
            }
          >
            {teamsData.map((team) => (
              <div key={team.id} className="text-center p-1 space-y-1">
                <div
                  style={{ backgroundImage: `url(${team.img})` }}
                  className="bg-no-repeat bg-center bg-cover overflow-hidden  h-10 w-full "
                ></div>
                <Name name={team.name} choose={choose} />
                <Position position={team.position} choose={choose} />
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <div>
          <Container className="py-16 ">
            <div className="text-center space-y-4 mb-16">
              <EditorComp initialValue={headers.title} />
              <EditorComp initialValue={headers.subTitle} />
            </div>
            <div className={gridClassName}>
              {teamData?.map((team, index) => (
                <div key={team.id}>
                  <div className="text-center hover:shadow-custom rounded-md transition-all p-6 space-y-5">
                    <TeamPic design="design5" pic={team.pic} />
                    <EditorComp initialValue={team.userName} />
                    <EditorComp initialValue={team.position} />
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
