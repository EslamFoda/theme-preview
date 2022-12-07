import Container from "../../../ui/container";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";

const Design1 = ({ pricesData }) => {
  return (
    <>
      <div>
        <Container className="py-16">
          <div className="text-center space-y-4 mb-16">
            <EditorComp initialValue={pricesData?.title} />
            <EditorComp initialValue={pricesData?.subTitle} />
          </div>
          <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
            {pricesData?.items?.map((price, index) => (
              <div
                className=" flex  rounded-md flex-col self-start"
                key={price.id}
              >
                <div className="w-full flex flex-col gap-7 p-6  border border-solid border-black ">
                  <EditorComp initialValue={price.title} />
                  <EditorComp initialValue={price.subTitle} />
                  <hr className="bg-black h-[2px] block" />
                  <div className="text-4xl ">
                    <EditorComp initialValue={price.price} />
                  </div>

                  <Button full className="!rounded-none">
                    <EditorComp initialValue={price.btn} />
                  </Button>

                  <hr className="bg-black h-[3px] block" />

                  <EditorComp initialValue={price.features} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design1;
