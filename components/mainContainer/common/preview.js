import { containersData } from "../../../constant/data";
import useAnimation from "../../../hooks/useAnimation";
import { doc } from "firebase/firestore";
import { db } from "../../../utlis/firebase";
const Preview = ({
  containerWidth,
  comps,
  device,
  editSections,
  animate,
  themeId,
}) => {
  const effect = useAnimation();
  const themeData = doc(db, "themes", themeId);

  return (
    <div
      style={{
        margin: "0px auto",
        flex: "1 1 0%",
        transition: "width 0.2s ease 0s",
        width: containerWidth,
      }}
      className="flex flex-col"
    >
      {comps?.map((comp, i) => {
        const Component = containersData[comp.compName];
        return (
          <div className="relative demo-inline" id={comp.id} key={comp.id}>
            <Component
              animate={animate}
              comp={comp}
              comps={comps}
              themeId={themeId}
              index={i}
              themeData={themeData}
              device={device}
              editSections={editSections}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
