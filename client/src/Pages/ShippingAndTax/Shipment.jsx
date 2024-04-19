import ShipmentTableBody from '@/components/ShippingAndTax/ShipmentTableBody';
import ShipmentTableHead from '@/components/ShippingAndTax/ShipmentTableHead';
import TableComponentsHeader from '@/components/ui/TableComponentsHeader';
import { useState } from 'react';
import shipmentData from '../../../public/shipmentData.json';

export default function Shipment() {
  const data = shipmentData.shipmentData;
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter((el) =>
    !filter ? true : el.status === filter
  );
  return (
    <>
      <TableComponentsHeader title={'Shipments'}>
        <select
          value={filter}
          onChange={handleFilterChange}
          className='hover:translate-y-[-2px]  duration-300 ease-in-out flex flex-wrap items-center gap-2 border-2 py-2 px-3 rounded-md font-outfit font-medium'
        >
          <option value=''>Filter</option>
          <option value='delivered'>Delivered</option>
          <option value='in transit'>In transit</option>
          <option value='pending'>Pending</option>
        </select>
      </TableComponentsHeader>
      <ShipmentTableHead>
        <ShipmentTableBody shipmentTable={filteredData} />
      </ShipmentTableHead>
    </>
  );
}
