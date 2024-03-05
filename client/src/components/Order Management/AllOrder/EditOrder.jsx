import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

const EditOrder = ({
  isOpen,
  onOpenChange,
  handleOnSubmit,
  handleInputChange,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Order
              </ModalHeader>
              <ModalBody>
                <div className=" flex flex-col justify-center">
                  <form
                    onSubmit={handleOnSubmit}
                    className="relative sm:mx-auto"
                  >
                    <div className="relative md:mx-0 rounded-3xl">
                      <div className=" mx-auto">
                        <div className=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                          <div className="flex flex-col font-sora text-sm">
                            <label className="leading-loose">
                              Product Name
                            </label>
                            <input
                              type="text"
                              name="itemName"
                              onChange={handleInputChange}
                              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-96 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder="Product Name"
                            />
                          </div>
                          <div className="flex flex-col font-sora text-sm">
                            <label className="leading-loose">
                              Product Code
                            </label>
                            <input
                              type="text"
                              name="code"
                              onChange={handleInputChange}
                              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder=" Product Code"
                            />
                          </div>

                          <div className="flex flex-col font-sora text-sm">
                            <label className="leading-loose">
                              Product Price
                            </label>
                            <input
                              type="text"
                              name="amount"
                              onChange={handleInputChange}
                              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder="Product Price"
                            />
                          </div>
                        </div>
                      </div>

                      <button className=" px-2 bottom-0 py-1 text-sm mt-3 bg-blue-600 rounded-md text-white">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </ModalBody>
              <ModalFooter>
                <button
                  color="danger"
                  className=" border border-red-300 font-sora text-xs px-2 py-2 rounded-md"
                  onClick={onClose}
                >
                  Close
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditOrder;
