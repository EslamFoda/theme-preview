import Container from "../../../ui/container";
import EditorComp from "../../../editor";

const Design6 = ({ serviceData, serviceHeaders }) => {
  return (
    <>
      <div className="bg-gradient-to-bl text-white from-primary to-secondary">
        <Container className="py-16">
          <div className="text-center  space-y-4 mb-16">
            <EditorComp initialValue={serviceHeaders.title} />
            <EditorComp initialValue={serviceHeaders.subTitle} />
          </div>
          <div className={"flex items-start gap-8 justify-center flex-wrap"}>
            {serviceData?.map((service, index) => (
              <div key={service.id}>
                <div
                  key={service.id}
                  className="space-y-5 lg:w-[344px] md:w-[344px] w-full min-h-[389px]   hover:border-b-8 hover:border-white border-b-8 border-transparent transition-all bg-secondary rounded-md px-8 py-16"
                >
                  <div>
                    <span className="text-4xl">
                      {index < 9 ? `0${index + 1}` : `${index + 1}`}
                    </span>
                  </div>
                  <EditorComp initialValue={service.title} />
                  <div className="w-16 h-[1px] bg-white"></div>
                  <EditorComp initialValue={service.desc} />
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
