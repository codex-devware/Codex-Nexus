import { Progress } from "@nextui-org/react";

const ShipmentTable = ({ data }) => {
  return (
    <>
      <div className=" flex justify-between gap-2 items-center">
        <h1 className="sm:text-md text-xs font-semibold font-sora ms-2">
          Shipment Items
        </h1>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {data.map((item) => (
        <section key={item.id} className=" flex flex-col  p-4 darkCard dark:rounded dark:ms-1 dark:mb-2">
          {/* top section  */}

          <div>
            <div className="flex justify-between pb-4">
              <h3 className="text-xl font-semibold">{item.skuId}</h3>
              {/* <span>Delivery</span> */}
            </div>
            <Progress
              size="md"
              radius="sm"
              classNames={{
                base: "max-w-full",
                track: "drop-shadow-md border border-default",
                indicator: ` ${
                  item.status === "Delivered" && "bg-success-400"
                }  ${item.status === "Pending" && "bg-yellow-400 "} ${
                  item.status === "Canceled" && "bg-red-400 "
                }`,
                label: "tracking-wider font-medium ",
                value: "text-foreground/60",
              }}
              label={item.status}
              value={item.percentage}
              showValueLabel={true}
            />
            <div className="flex justify-between py-4 ">
              <div>
                <span className="font-light">01 Feb,2024</span>
                <h3 className="font-semibold text-md">Banani, Dhaka</h3>
              </div>
              <div className="w-5 flex align-middle ">
                <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-white fill-current" viewBox="0 0 512 512">
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
              <div>
                <span className="font-light">04 Feb,2024</span>
                <h3 className="font-semibold text-md">Banani, Dhaka</h3>
              </div>
            </div>
          </div>
          <hr />
        </section>
      ))}
    </>
  );
};

export default ShipmentTable;
