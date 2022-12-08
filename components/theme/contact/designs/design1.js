import EditorComp from "../../../editor";
import Container from "../../../ui/container";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { RiMapPin2Line } from "react-icons/ri";
import InputComp from "../common/inputComp";
import Button from "../../../ui/Button";

const Design1 = ({
  contactData,
  comp,
  comps,
  themeData,
}) => {
  const icons = {
    email: AiOutlineMail,
    phone: BsTelephone,
    address: RiMapPin2Line,
  };

  return (
    <Container className="max-w-4xl m-auto py-16 space-y-10">
      <div className="text-center space-y-2">
        <EditorComp initialValue={contactData.title} />
        <EditorComp initialValue={contactData.subTitle} />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
        {contactData.contacts.map((contact) => {
          const IconComp = icons[contact.iconName];
          return (
            <div key={contact.id} className="flex gap-4">
              <div className="min-w-[64px] h-16  bg-primaryBg flex justify-center items-center">
                <IconComp size={25} className="text-primary" />
              </div>
              <div className="space-y-1">
                <EditorComp initialValue={contact.title} />
                <EditorComp initialValue={contact.details} />
              </div>
            </div>
          );
        })}
      </div>
      <form className="space-y-4">
        {contactData.items.map((item) => {
          return (
            <div key={item.id}>
              <InputComp
                placeHolder={item.placeHolder}
                required={item.required}
                inputType={item.inputType}
              />
            </div>
          );
        })}
        <div className="text-center">
          <Button>
            <EditorComp initialValue={contactData.btn} />
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Design1;
