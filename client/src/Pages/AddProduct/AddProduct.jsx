import Form from "@/components/AddProduct/Form";

const AddProduct = () => {
  return (
    <section data-aos="fade-up" className="bg-white custom-dark-mode darkBackground h-full p-3 sm:p-5 ">
      <div className=" px-4 lg:px-12">
        <div className="relative overflow-hidden w-full">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
