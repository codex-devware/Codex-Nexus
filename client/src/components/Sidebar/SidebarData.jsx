import { useState } from 'react';
import { BsDashSquare, BsChevronDown } from 'react-icons/bs';
const SidebarData = ({ sections, open }) => {
  const [openSubMenu, setSubMenu] = useState(false);
  const { id, section, subSection, icon } = sections;
  return (
    <>
      <ul>
        <li className=' text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md duration-200'>
          <span className=' text-2xl block float-left'>{icon}</span>
          <span
            onClick={() => setSubMenu(!openSubMenu)}
            className={`text-[14px] font-medium flex-1 flex items-center  gap-10 duration-150 ${
              !open && 'hidden'
            }`}
          >
            {section}

            {sections?.submenu && (
              <BsChevronDown
                className={`${openSubMenu && 'rotate-180 duration-300'}`}
              />
            )}
          </span>
        </li>
        {sections?.submenu && openSubMenu && open && (
          <ul>
            {subSection.map((item, index) => (
              <li
                className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 pl-12 hover:bg-gray-700 rounded-md duration-500'
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </ul>
    </>
  );
};

export default SidebarData;
