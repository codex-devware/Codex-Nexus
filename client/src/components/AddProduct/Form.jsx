import { useEffect, useState } from "react";
import mobileAddProductBanner from "../../assets/add-product-mobile.svg";
import BgBigScreenBanner from "../../assets/sample.png";
import Addons from "./Addons";
import ProductGallery from "./ProductGallery";
import Step from "./Step";
import Thankyou from "./Thankyou";
import YourInfo from "./YourInfo";

const Form = () => {
  //------------------------------STATES------------------------------
  const [stepNumber, setStepNumber] = useState(() => 1);
  const [goBackVisible, setGoBackVisible] = useState("invisible");
  const [steps, setSteps] = useState([
    { id: 1, title: "Product info", active: true },
    { id: 2, title: "Product Gallery", active: false },
    { id: 3, title: "Product Category", active: false },
  ]);

  const [yourInfo, setYourInfo] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });
  const [isEmpty, setIsEmpty] = useState(false);

  const [addonOptions, setAddonOptions] = useState([
    {
      id: 1,
      title: "Online services",
      desc: "Access to all of your services",
      price: 1,
      monthlyPrice: 1,
      yearlyPrice: 10,
      selected: false,
    },
    {
      id: 2,
      title: "Offline services",
      desc: "Warehouse facilities",
      price: 2,
      monthlyPrice: 2,
      yearlyPrice: 20,
      selected: false,
    },
    {
      id: 3,
      title: "Customizable Product",
      desc: "Custom theme for product",
      price: 2,
      monthlyPrice: 2,
      yearlyPrice: 20,
      selected: false,
    },
  ]);

  const [addons, setAddons] = useState([]);

  const [displayThankyou, setDisplayThankyou] = useState(false);

  //------------------------------SIDE EFFECTS------------------------------
  useEffect(() => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) => {
        if (step.id === stepNumber) {
          return { ...step, active: true };
        } else {
          return { ...step, active: false };
        }
      });
      return updatedSteps;
    });
    if (stepNumber > 1) {
      setGoBackVisible("visible");
    } else {
      setGoBackVisible("invisible");
    }
  }, [stepNumber, yourInfo, addons, addonOptions, displayThankyou]);

  //------------------------------FUNCTIONS------------------------------
  const nextStep = () => {
    if (stepNumber == 1) {
      if (
        yourInfo.name.length == 0 ||
        yourInfo.category.length == 0 ||
        yourInfo.price.length == 0 ||
        yourInfo.description.length == 0
      ) {
        setIsEmpty(true);
        return;
      } else {
        setIsEmpty(false);
      }
    }

    setStepNumber((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStepNumber((prevStep) => prevStep - 1);
  };

  const changeYourInfo = (event) => {
    setYourInfo((prevInfo) => {
      return { ...prevInfo, [event.target.name]: event.target.value };
    });
  };

  const checkBox = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"));
    const title = e.target.getAttribute("data-title-name");
    const price = parseInt(e.target.getAttribute("data-price"));
    if (e.target.checked == true) {
      setAddons((prevAddons) => [
        ...prevAddons,
        { id: id, title: title, price: price },
      ]);
    } else {
      setAddons((prevAddons) => {
        return prevAddons.filter((addon) => addon.id != id);
      });
    }

    setAddonOptions((prevAddons) => {
      const updatedAddons = prevAddons.map((addon) => {
        if (addon.id == id) {
          if (addon.selected == false) {
            return { ...addon, selected: true };
          } else {
            return { ...addon, selected: false };
          }
        } else {
          return addon;
        }
      });
      return updatedAddons;
    });
  };

  return (
    <div className="container">
      <div className=" md:bg-white dark:text-[#1E293B]  rounded-xl md:p-3 xl:flex justify-center">
        <div className="relative">
          <img
            className="hidden xl:block w-full h-[78%] rounded-xl"
            src={BgBigScreenBanner}
            alt="sidebar"
          />
          <img
            className="block lg:block xl:hidden w-full rounded-lg"
            src={mobileAddProductBanner}
            alt="topbar"
          />

          <div className="flex justify-around items-center mt-8 absolute inset-0  xl:block md:mt-0 md:pl-6 md:pt-8 xl:space-y-7">
            {steps.map((step) => (
              <Step
                key={step.id}
                number={step.id}
                title={step.title}
                active={step.active}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center mx-auto relative  md:static mb-40 rounded-2xl  pb-16 bg-white md:px-0 md:py-5 md:mx-12 md:w-100 md:my-2">
          {(displayThankyou && (
            <>
              <Thankyou />
            </>
          )) || (
            <>
              <div>
                {(stepNumber === 1 && (
                  <YourInfo
                    onChangeYourInfo={changeYourInfo}
                    yourInfo={yourInfo}
                    currentStep={stepNumber}
                    isEmpty={isEmpty}
                  />
                )) ||
                  (stepNumber === 2 && (
                    <ProductGallery
                      onBoxCheck={checkBox}
                      currentStep={stepNumber}
                      addonOptions={addonOptions}
                    />
                  )) ||
                  (stepNumber === 3 && (
                    <Addons
                      onBoxCheck={checkBox}
                      currentStep={stepNumber}
                      addonOptions={addonOptions}
                    />
                  ))}
              </div>
              <div className="flex justify-between  bottom-0 left-0 w-full bg-white md:p-0 md:static items-center ">
                <div
                  onClick={prevStep}
                  className={`font-medium text-[#9699ab] dark:text-[#1E293B] select-none cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
                >
                  Go back
                </div>
                {stepNumber === 3 ? (
                  <div
                    onClick={() => setDisplayThankyou(true)}
                    className="font-medium text-[14px] bg-[#473dff] select-none dark:text-[#1E293B] text-white py-2 px-3 rounded-lg cursor-pointer transition duration-100  mt-4 hover:opacity-90"
                  >
                    Confirm
                  </div>
                ) : (
                  <div
                    onClick={nextStep}
                    className="font-medium text-[14px] bg-[#02295a] select-none text-white py-2 px-3 mt-3 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
                  >
                    Next Step
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
