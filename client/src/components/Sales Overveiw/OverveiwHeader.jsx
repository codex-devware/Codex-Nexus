import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FiDownload } from "react-icons/fi";
const OverveiwHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="mt-8">
      <div className="flex flex-wrap justify-between items-center">
        <div data-aos="fade-right" className="font-outfit">
          <h1 className="text-3xl font-semibold">Welcome Back,</h1>
          <p className="text-[#6B7280] pt-2">
            <span>Sourov</span>, {"Let's"} check your status today!
          </p>
        </div>
        <div data-aos="fade-up" className="flex flex-wrap gap-4">
          <button className="hover:translate-y-[-2px] duration-300 ease-in-out flex flex-wrap items-center gap-2 border-2 py-2 px-3 rounded-md font-outfit font-medium bg-white">
            <span className="text-primary">
              <FiDownload />
            </span>{" "}
            Download Report
          </button>
          <button className="hover:translate-y-[-2px] duration-300 ease-in-out py-2 px-3 border-2 border-primary rounded-md font-outfit bg-primary text-white">
            Add Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default OverveiwHeader;
