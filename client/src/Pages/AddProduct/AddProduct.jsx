import Form from "@/components/AddProduct/Form";

const AddProduct = () => {
  return (
    <section className="bg-white h-full p-3 sm:p-5 ">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden w-full">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
