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
    path: "",
    subSection: [],
  },
  {
    id: 2,
    icon: <LuUserCog2 />,
    section: "Customer Insights",
    path: "",
    subSection: [],
  },
  {
    id: 3,
    icon: <GrDocumentPerformance />,
    section: "Product Performance",
    path: "",
    subSection: [
      { title: "Product-wise sales trends", path: "" },
      { title: "Inventory status", path: "" },
    ],
  },
  {
    id: 4,
    icon: <BsCartPlus />,
    section: "Add Product",
    subSection: [],
    path: "add-product",
  },
  {
    id: 5,
    icon: <BsCashCoin />,
    section: "Revenue Analytics",
    subSection: [],
    path: "",
  },
  {
    id: 6,
    icon: <LiaShippingFastSolid />,
    section: "Shipping and Tax",
    subSection: [],
    path: "",
  },

  {
    id: 7,
    icon: <MdOutlineInventory2 />,
    section: "Stock and Inventory Management",
    subSection: [],
    path: "",
  },
  {
    id: 8,
    icon: <RiRefund2Fill />,
    section: "Refund and Returns",
    subSection: [],
    path: "",
  },

  {
    id: 9,
    icon: <FaUsersCog />,
    section: "User Management",
    subSection: [],
    path: "",
  },
  {
    id: 10,
    icon: <MdOutlinePayments />,
    section: "Payment Gateway Analytics",
    subSection: [],
    path: "",
  },

  {
    id: 11,
    icon: <FaUserLock />,
    section: "Security",
    subSection: [],
    path: "",
  },
];
