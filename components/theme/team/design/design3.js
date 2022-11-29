import Container from "../../../ui/container";

import { teamsData } from "../../../../constant/";
import Name from "../common/name";
import About from "../common/about";
import Position from "../common/position";
import cn from "clsx";
import EditorComp from "../../../editor";
import TeamPic from "../common/teamPic";
const Design3 = ({
  choose,
  teamData,
}) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
    }
  );
  return (
    <>
      {choose ? (
        <Container className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className={
              "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full"
            }
          >
            {teamsData.map((team) => (
              <div key={team.id} className=" space-y-1">
                <div
                  style={{ backgroundImage: `url(${team.img})` }}
                  className="bg-no-repeat bg-center bg-cover overflow-hidden  h-5 w-5 rounded-full"
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
            <div className={gridClassName}>
              {teamData?.map((team, index) => (
                <div key={team.id}>
                 
                    <div className=" space-y-5">
                      <TeamPic
                        design="design3"
                        pic={team.pic}
                      />
                      <EditorComp
                        initialValue={team.userName}
                        
                      />
                      <EditorComp
                        initialValue={team.position}
                       
                      />
                      <EditorComp
                        initialValue={team.about}
                      />
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
