import { BsBag, BsCartPlus, BsCashCoin } from 'react-icons/bs';
import { FaUserLock, FaUsersCog } from 'react-icons/fa';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { LuUserCog2 } from 'react-icons/lu';
import { MdOutlineInventory2, MdOutlinePayments } from 'react-icons/md';
import { RiRefund2Fill } from 'react-icons/ri';

export const Data = [
  {
    id: 1,
    icon: <BsBag />,
    section: 'Dashboard',
    path: '',
    subSection: [],
  },
  {
    id: 2,
    icon: <LuUserCog2 />,
    section: 'Order Management',
    path: '/order-management',
    subSection: [
      { title: 'All Orders', path: '/order-management/all-orders' },
      { title: 'Order History', path: '/order-management/order-history' },
      { title: 'Order Status', path: '/order-management/order-status' },
      { title: 'Payment Info', path: '/order-management/payment-info' },
    ],
  },
  // {
  //   id: 3,
  //   icon: <GrDocumentPerformance />,
  //   section: 'Add Product',

  //   subSection: [
  //     { title: 'Product-wise sales trends', path: '' },
  //     { title: 'Inventory status', path: '' },
  //   ],
  // },
  {
    id: 4,
    icon: <BsCartPlus />,
    section: 'Add Product',
    subSection: [],
    path: '/add-product',
  },
  // {
  //   id: 4,
  //   icon:<GrDocumentPerformance /> ,
  //   section: 'Add Product',
  //   subSection: [],
  //   path: '',
  // },
  {
    id: 5,
    icon: <BsCashCoin />,
    section: 'Revenue Analytics',
    subSection: [],
    path: '',
  },
  {
    id: 6,
    icon: <LiaShippingFastSolid />,
    section: 'Shipping and Tax',
    subSection: [],
    path: '',
  },

  {
    id: 7,
    icon: <MdOutlineInventory2 />,
    section: 'Stock & Inventory ',
    path: '/stock-inventory-management',
    subSection: [
      {
        title: 'Supplier management',
        path: '/stock-inventory-management/supplier-management',
      },
      {
        title: 'Return management',
        path: '/stock-inventory-management/return-order-management',
      },
    ],
  },
  {
    id: 8,
    icon: <RiRefund2Fill />,
    section: 'Refund and Returns',
    subSection: [],
    path: '',
  },

  {
    id: 9,
    icon: <FaUsersCog />,
    section: 'User Management',
    subSection: [
      {
        title: 'Users',
        path: '/users',
      },
      {
        title: 'User Active Log',
        path: '/users/user-active-log',
      },
    ],
  },
  {
    id: 10,
    icon: <MdOutlinePayments />,
    section: 'Payment Gateway Analytics',
    subSection: [],
    path: '',
  },

  {
    id: 11,
    icon: <FaUserLock />,
    section: 'Security',
    subSection: [],
    path: '',
  },
];
