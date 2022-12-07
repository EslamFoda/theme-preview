import Container from "../../../ui/container";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";

const Design2 = ({ pricesData }) => {
  return (
    <>
      <div>
        <Container className="py-16">
          <div className="text-center space-y-4 mb-16">
            <EditorComp initialValue={pricesData?.title} />
            <EditorComp initialValue={pricesData?.subTitle} />
          </div>
          <div className="grid lg:grid-cols-2  md:grid-cols-2  grid-cols-1 gap-10">
            {pricesData?.items?.map((price, index) => (
              <div key={price.id}>
                <div
                  className={`flex flex-col justify-center items-center gap-6 p-6  text-center`}
                >
                  <EditorComp initialValue={price.title} />

                  <EditorComp initialValue={price.price} />

                  <EditorComp initialValue={price.subTitle} />

                  <Button className="!px-6 ">
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

export default Design2;
