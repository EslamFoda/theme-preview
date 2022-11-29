import Container from "../../../ui/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import ServiceTitle from "../common/serviceTitle";
import ServiceSubTilte from "../common/serviceSubTitle";
import Button from "../../../ui/Button";
import { servicesData } from "../../../../constant/";
import cn from "clsx";
import EditorComp from "../../../editor";
import ImageComp from "../common/imageComp";
const Design5 = ({ choose, serviceData, serviceHeaders }) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-2 text-center md:grid-cols-2 sm:grid-cols-1 grid-cols-1",
    {
      "!gap-2": choose,
    }
  );
  const headersClassName = cn(
    "grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-16",
    { "!mb-2": choose }
  );
  return (
    <>
      {choose ? (
        <Container className="py-2 ">
          <div className={headersClassName}>
            <Title choose={choose} />
            <SubTitle choose={choose} />
          </div>
          <div className={gridClassName}>
            {servicesData.map((service) => (
              <div key={service.id} className=" space-y-1">
                <div
                  style={{ backgroundImage: `url(${service.imgUrl})` }}
                  className="bg-no-repeat bg-center bg-cover   h-12 w-full"
                ></div>
                <ServiceTitle title={service.title} choose={choose} />
                <ServiceSubTilte subTitle={service.subTitle} choose={choose} />
                <button className="text-small">READ MORE</button>
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <div>
          <Container className="py-16 ">
            <div className={headersClassName}>
              <EditorComp initialValue={serviceHeaders.title} />
              <EditorComp initialValue={serviceHeaders.subTitle} />
            </div>
            <div className={gridClassName}>
              {serviceData?.map((service, index) => (
                <div key={service.id}>
                  <div className="space-y-5">
                    <ImageComp design="design5" image={service.pic} />
                    <EditorComp initialValue={service.title} />
                    <EditorComp initialValue={service.desc} keys="desc" />
                    <Button variant="primary">
                      <EditorComp initialValue={service.btn} />
                    </Button>
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
