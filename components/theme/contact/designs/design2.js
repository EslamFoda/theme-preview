import EditorComp from "../../../editor";
import Container from "../../../ui/container";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { RiMapPin2Line } from "react-icons/ri";
import InputComp from "../common/inputComp";
import Button from "../../../ui/Button";

const Design2 = ({ contactData }) => {
  const icons = {
    email: AiOutlineMail,
    phone: BsTelephone,
    address: RiMapPin2Line,
  };

  return (
    <Container className=" m-auto py-16 space-y-10">
      <div className="grid gap-x-20 gap-y-10 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="space-y-14">
          <div>
            <EditorComp initialValue={contactData.title} />
          </div>
          <div className="space-y-8">
            {contactData.contacts.map((contact) => {
              const IconComp = icons[contact.iconName];
              return (
                <div key={contact.id} className="flex gap-7">
                  <div className="flex justify-start items-start">
                    <IconComp size={25} />
                  </div>
                  <div className="space-y-1">
                    <EditorComp initialValue={contact.title} />
                    <EditorComp initialValue={contact.details} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
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
            <Button>
              <EditorComp initialValue={contactData.btn} />
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Design2;
