import ShipmentTable from '@/components/shipment & tax/ShipmentTable';
import ShipmentTableBody from '@/components/shipment & tax/ShipmentTableBody';
import TableComponentsHeader from '@/components/ui/TableComponentsHeader';
import { useState } from 'react';
import  shipmentData from '../../../public/shipmentData.json'

export default function ShipmentTax() {
  const data = shipmentData.shipmentData
  const [filter, setFilter] = useState('');
  console.log(filter);
//filter working
const filterData = data.filter(el=>{
  if(filter==="pending"){
    return el.status ==="pending"
  }
})
  return (
    <>
      <TableComponentsHeader title={'Shipments'}>
        <select className='hover:translate-y-[-2px] duration-300 ease-in-out flex flex-wrap items-center gap-2 border-2 py-2 px-3 rounded-md font-outfit font-medium'>
          <option value='delivered' onClick={(e) => setFilter(e.target.value)}>
            delivered
          </option>
          <option value='in transit' onClick={(e) => setFilter(e.target.value)}>
            in transit
          </option>
          <option value='pending' onClick={(e) => setFilter(e.target.value)}>
            pending
          </option>
        </select>
      </TableComponentsHeader>
      <ShipmentTable >
      <ShipmentTableBody shipmentTable={data}/>
      </ShipmentTable>
    </>
  );
}
