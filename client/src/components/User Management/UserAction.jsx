import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { MdBlock, MdDeleteOutline } from 'react-icons/md';

const UserAction = ({ handleFilter, id, onBlocked }) => {
  const [popup, setPopup] = useState(false);
  return (
    <div className='relative font-outfit'>
      <button onClick={() => setPopup(true)}>
        <BiDotsHorizontalRounded />
      </button>
      {popup && (
        <ClickAwayListener onClickAway={() => setPopup(false)}>
          <div className='absolute top-[-50px] left-[-130px]'>
            <div className={'popup'}>
              <div className='flex flex-col gap-2 py-3 rounded-lg bg-[#f1f1f1] border border-[#e9e9e9]'>
                <button
                  onClick={() => onBlocked(id)}
                  className=' flex items-center gap-1 cursor-pointer px-3 py-1 duration-300 ease-in-out hover:bg-[#e9e9e9]'
                >
                  <span className='text-red-600'>
                    <MdBlock fontSize={20} />
                  </span>
                  <span>Block User</span>
                </button>
                <button
                  onClick={() => handleFilter(id)}
                  className=' flex items-center gap-1 cursor-pointer px-3 py-1 duration-300 ease-in-out hover:bg-[#e9e9e9]'
                >
                  <span className='text-red-600'>
                    <MdDeleteOutline fontSize={20} />
                  </span>
                  <span>Delete User</span>
                </button>
              </div>
            </div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default UserAction;
