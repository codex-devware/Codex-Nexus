import { BsBag, BsBoxSeam, BsCart3, BsCashCoin } from "react-icons/bs";

const sideBarDataDB = [
  {
    id: 1,
    icon: BsBag,
    section: "Order Management",
  },
  {
    id: 2,

    section: "Customer Insights",
  },
  {
    id: 3,
    submenu: true,
    section: "Product Performance",

    subSection: ["Product-wise sales trends", "Inventory status"],
  },
  {
    id: 4,

    section: "Add Product",
  },
  {
    id: 5,

    section: "Revenue Analytics",
  },
  {
    id: 6,

    section: "Shipping and Tax",
  },

  {
    id: 7,

    section: "Stock and Inventory Management",
  },
  {
    id: 8,

    section: "Refund and Returns",
  },

  {
    id: 9,

    section: "User Management",
  },
  {
    id: 10,

    section: "Payment Gateway Analytics",
  },

  {
    id: 11,

    section: "Security",
  },
];

export default sideBarDataDB;
