import { BsArrowRight } from 'react-icons/bs';
import SidebarData from './SidebarData';
import { Data } from './Data';
const Sidebar = ({ setOpen, open }) => {
  return (
    <section>
      <div className='flex overflow-hidden'>
        <div
          className={`h-full pt-8 ${
            open ? 'w-full md:p-5' : ' w-0 p-0 md:p-5  md:w-20'
          } duration-300 relative`}
        >
          <BsArrowRight
            className={`bg-white text-dark-purple text-4xl rounded-full absolute -right-3 top-9 px-2  border border-dark-purple cursor-pointer ${
              !open && 'rotate-180'
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className='pt-2'>
            {Data?.map((sections, index) => (
              <SidebarData open={open} key={index} sections={sections} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
