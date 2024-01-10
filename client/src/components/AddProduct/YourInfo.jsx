import { useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

const YourInfo = ({ yourInfo, onChangeYourInfo, isEmpty }) => {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: "name",
      label: "Product name",
      placeholder: "Laptop Devices",
    },
    {
      id: 2,
      name: "category",
      label: "Category",
      placeholder: "Computer",
    },
    {
      id: 3,
      name: "price",
      label: "Price",
      placeholder: "20 $",
    },
    {
      id: 4,
      name: "description",
      label: "Description",
      placeholder: "write your product description",
    },
  ]);

  // useEffect(() => {
  //   console.log(isEmpty);
  // }, [isEmpty]);

  return (
    <div>
      <SectionHeading
        title="Product Info"
        desc="Please provide your product name, price, category, description"
      />
      <form>
        <div className="flex flex-col  space-y-6 text-[14px]">
          {formFields.map((formField) => (
            <FormField
              onChangeYourInfo={onChangeYourInfo}
              key={formField.id}
              name={formField.name}
              label={formField.label}
              placeholder={formField.placeholder}
              value={yourInfo[formField.name]}
              isEmpty={isEmpty}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default YourInfo;
