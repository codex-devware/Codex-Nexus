import { GoStopwatch } from "react-icons/go";
import { TbShoppingCartCheck, TbShoppingCartStar } from "react-icons/tb";
import AllOrderTopShow from "./AllOrderTopShow";

const AllOrderTop = () => {
  const AllOrderStatData = [
    {
      icon: <TbShoppingCartStar fontSize={28} />,
      statName: "Total Orders",
      statCount: 850,
      progress: 59,
      color: "text-blue-500",
    },
    {
      icon: <GoStopwatch fontSize={28} />,
      statName: "Pending Orders",
      statCount: 640,
      progress: 64,
      color: "text-orange-600",
    },
    {
      icon: <TbShoppingCartCheck fontSize={28} />,
      statName: "Delivered Orders",
      statCount: 744,
      progress: 47,
      color: "text-green-600",
    },
  ];
  return (
    <>
      <section className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mxaut gap-2 mt-8 mb-6">
        {AllOrderStatData?.map((data, index) => (
          <AllOrderTopShow key={index} data={data} />
        ))}
      </section>
    </>
  );
};
export default AllOrderTop;
