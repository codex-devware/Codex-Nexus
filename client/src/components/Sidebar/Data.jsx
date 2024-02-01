import {
  IcAdd,
  IcDashboard,
  IcPayment,
  IcRevenueAnalysis,
  IcSecurity,
  IcStock,
  IcUserManagement,
} from '@/assets/icon';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { LuUserCog2 } from 'react-icons/lu';
export const Data = [
  {
    id: 1,
    icon: <IcDashboard />,
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
    ],
  },
  {
    id: 4,
    icon: <IcAdd />,
    section: 'Add Product',
    subSection: [],
    path: '/add-product',
  },
  {
    id: 5,
    icon: <IcRevenueAnalysis />,
    section: 'Revenue Analytics',
    subSection: [],
    path: 'revenue-analytics',
  },
  {
    id: 6,
    icon: <LiaShippingFastSolid />,
    section: 'Shipping and Tax',
    subSection: [],
    path: '/shipment-tax',
  },

  {
    id: 7,
    icon: <IcStock />,
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
  // {
  //   id: 8,
  //   icon: <ICRefund />,
  //   section: "Refund and Returns",
  //   subSection: [],
  //   path: "",
  // },

  {
    id: 8,
    icon: <IcUserManagement />,
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
    id: 9,
    icon: <IcPayment />,
    section: 'Payment Gateway Analytics',
    subSection: [],
    path: '/payment-Gateway-Analytics',
  },

  {
    id: 10,
    icon: <IcSecurity />,
    section: 'Security',
    subSection: [
      { title: 'Register', path: '/security/register' },
      { title: 'Login', path: '/security/login' },
    ],
    path: '',
  },
];
