import Container from "../../../ui/container";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";

const Design3 = ({ pricesData }) => {
  return (
    <>
      <div>
        <Container className="py-16">
          <div className="text-center space-y-4 mb-16">
            <EditorComp initialValue={pricesData?.title} />
            <EditorComp initialValue={pricesData?.subTitle} />
          </div>
          <div className="grid lg:grid-cols-3  md:grid-cols-2  grid-cols-1 gap-10">
            {pricesData?.items?.map((price, index) => (
              <div key={price.id}>
                <div
                  className={`w-full p-4 space-y-4 text-center border border-solid ${
                    index === 1 ? "border-primary" : ""
                  }`}
                >
                  <EditorComp initialValue={price.title} />

                  <EditorComp initialValue={price.price} />

                  <EditorComp initialValue={price.features} />

                  <Button
                    height={"20px"}
                    className={`!px-6 !rounded-sm ${
                      index !== 1
                        ? "!bg-white !text-black border-solid border-[#e5e7eb] border"
                        : ""
                    }`}
                  >
                    <EditorComp initialValue={price.btn} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design3;
