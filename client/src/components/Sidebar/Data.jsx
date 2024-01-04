import { BsBag, BsBoxSeam, BsCart3, BsCashCoin } from 'react-icons/bs';

export const Data = [
  {
    id: 1,
    icon: <BsBag />,
    section: 'Order Management',
  },
  {
    id: 2,
    icon: <BsBoxSeam />,
    section: 'Customer Insights',
  },
  {
    id: 3,
    icon: <BsCart3 />,
    submenu: true,
    section: 'Product Performance',

    subSection: ['Product-wise sales trends', 'Inventory status'],
  },
  {
    id: 4,
    icon: <BsCashCoin />,
    section: 'Add Product',
  },
  {
    id: 5,
    icon: <BsBag />,
    section: 'Revenue Analytics',
  },
  {
    id: 6,
    icon: <BsBag />,
    section: 'Shipping and Tax',
  },

  {
    id: 7,
    icon: <BsBag />,
    section: 'Stock and Inventory Management',
  },
  {
    id: 8,
    icon: <BsBag />,
    section: 'Refund and Returns',
  },

  {
    id: 9,
    icon: <BsBag />,
    section: 'User Management',
  },
  {
    id: 10,
    icon: <BsBag />,
    section: 'Payment Gateway Analytics',
  },

  {
    id: 11,
    icon: <BsBag />,
    section: 'Security',
  },
];
