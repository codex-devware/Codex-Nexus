import { BsBag, BsCashCoin, BsCartPlus } from "react-icons/bs";
import { LuUserCog2 } from "react-icons/lu";
import { GrDocumentPerformance } from "react-icons/gr";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineInventory2 } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { FaUsersCog } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";

export const Data = [
  {
    id: 1,
    icon: <BsBag />,
    section: "Order Management",
  },
  {
    id: 2,
    icon: <LuUserCog2 />,
    section: "Customer Insights",
  },
  {
    id: 3,
    icon: <GrDocumentPerformance />,
    submenu: true,
    section: "Product Performance",

    subSection: ["Product-wise sales trends", "Inventory status"],
  },
  {
    id: 4,
    icon: <BsCartPlus />,
    section: "Add Product",
  },
  {
    id: 5,
    icon: <BsCashCoin />,
    section: "Revenue Analytics",
  },
  {
    id: 6,
    icon: <LiaShippingFastSolid />,
    section: "Shipping and Tax",
  },

  {
    id: 7,
    icon: <MdOutlineInventory2 />,
    section: "Stock and Inventory Management",
  },
  {
    id: 8,
    icon: <RiRefund2Fill />,
    section: "Refund and Returns",
  },

  {
    id: 9,
    icon: <FaUsersCog />,
    section: "User Management",
  },
  {
    id: 10,
    icon: <MdOutlinePayments />,
    section: "Payment Gateway Analytics",
  },

  {
    id: 11,
    icon: <FaUserLock />,
    section: "Security",
  },
];
