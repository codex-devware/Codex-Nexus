import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { HiReceiptRefund } from "react-icons/hi2";
import { RiMessage3Fill } from "react-icons/ri";

const TableAction = () => {
    const [popup, setPopup] = useState(false);
  return (
    <>
        <button onClick={() => setPopup(true)}
                  id="apple-imac-27-dropdown-button"
                  data-dropdown-toggle="apple-imac-27-dropdown"
                  className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none "
                  type="button"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
        {popup && (
        <ClickAwayListener onClickAway={() => setPopup(false)}>
        <div
            id="apple-imac-27-dropdown"
            className="absolute top-[-35px] left-[-110px] z-10 w-auto bg-white rounded divide-y divide-gray-100 shadow"
            >
                <ul
                className="py-1 text-sm text-gray-700"
                aria-labelledby="apple-imac-27-dropdown-button"
                >
                <li className="">
                    <a
                    href="#"
                    className="py-2 px-4 hover:bg-gray-100 flex items-center gap-2"
                    >
                    <span><HiReceiptRefund/></span>
                    <span>Refund</span>
                    </a>
                </li>
                </ul>
                <div className="py-1">
                    <a
                      href="#"
                      className="flex items-center gap-2 py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >
                    <span><RiMessage3Fill/></span>
                    <span>Message</span>
                    </a>
                </div>
        </div>
        </ClickAwayListener>
        )}
    </>
  )
}

export default TableAction