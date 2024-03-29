import { Progress } from "@nextui-org/react";

const RevenueAnalyticsPurchaseCard = () => {
  return (
    <section className=" flex flex-col gap-6 p-4">
      <div className=" flex justify-between gap-2 items-center">
        <h1 className="sm:text-md text-xs font-semibold font-sora">
          Purchase Items
        </h1>
        <select className="select select-accent select-sm w-32">
          <option disabled selected className="">
            Product
          </option>
          <option>Groceris</option>
          <option>Clothing</option>
          <option>Gadgets</option>
        </select>
      </div>

      <Progress
        size="md"
        radius="sm"
        color="default"
        classNames={{
          base: "full",
          track: "drop-shadow-md border border-default",
          indicator: "#e67e22",

          label: "tracking-wider font-medium ",
        }}
        label={"Rover Waist Pack"}
        value={"+65"}
        showValueLabel={true}
      />

      <Progress
        size="md"
        radius="sm"
        color="success"
        classNames={{
          base: "full",
          track: "drop-shadow-md border border-default",
          indicator: " bg-red-400",
          label: "tracking-wider font-medium ",
          value: "text-foreground/60",
        }}
        label={"Hoddie benckizer"}
        value={"+91"}
        showValueLabel={true}
      />

      <Progress
        size="md"
        radius="sm"
        classNames={{
          base: "full",
          track: "drop-shadow-md border border-default",
          indicator: " bg-violet-500",
          label: "tracking-wider font-medium ",
          value: "text-foreground/60",
        }}
        label={"Office Backpack"}
        value={"+53"}
        showValueLabel={true}
      />

      <Progress
        size="md"
        radius="sm"
        color="default-200"
        classNames={{
          base: "full",
          track: "drop-shadow-md border border-default",
          indicator: "",
          label: "tracking-wider font-medium ",
          value: "text-foreground/60",
        }}
        label={"High-fi Hoodiee"}
        value={"+83"}
        showValueLabel={true}
      />

      <Progress
        size="md"
        radius="sm"
        classNames={{
          base: "full",
          track: "drop-shadow-md border border-default",
          indicator: " bg-violet-600",
          label: "tracking-wider font-medium ",
          value: "text-foreground/60",
        }}
        label={"Stylish Shirts Pants"}
        value={"+87"}
        showValueLabel={true}
      />
    </section>
  );
};

export default RevenueAnalyticsPurchaseCard;
