import Form from '../../components/AddProduct/Form';

const AddProduct = () => {
  return (
    <section className='bg-white h-full p-3 sm:p-5'>
      <div className='mx-auto max-w-screen-xl'>
        <div className=' relative  overflow-hidden w-full bg-gray-100 '>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
