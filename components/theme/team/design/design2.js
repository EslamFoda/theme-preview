import Container from "../../../ui/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import Name from "../common/name";
import Position from "../common/position";
import About from "../common/about";
import { teamsData } from "../../../../constant";
import cn from "clsx";
import EditorComp from "../../../editor";
import TeamPic from "../common/teamPic";
const Design2 = ({ choose, teamData, headers }) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-3 md:grid-cols-2 text-center sm:grid-cols-2 grid-cols-1",
    {
    }
  );
 
  return (
    <>
      {choose ? (
        <Container className="py-2 ">
          <div className="text-center space-y-1  mb-2">
            <Title choose={choose} />
            <SubTitle choose={choose} />
          </div>
          <div
            className={
              "grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1"
            }
          >
            {teamsData?.map((team) => (
              <div key={team.id} className=" space-y-1">
                <div
                  style={{ backgroundImage: `url(${team.img})` }}
                  className="bg-no-repeat bg-center bg-cover   h-12 w-full"
                ></div>
                <Name name={team.name} choose={choose} />
                <Position position={team.position} choose={choose} />
                <About about={team.about} choose={choose} />
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
                  <div className=" space-y-5">
                    <TeamPic design="design2" pic={team.pic} />
                    <EditorComp initialValue={team.userName} />
                    <EditorComp initialValue={team.position} />
                    <EditorComp initialValue={team.about} />
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

export default Design2;
