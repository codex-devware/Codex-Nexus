import mdKawsar from "../../assets/mdKawsar.png";
const Topbar = ({ setOpenToggle, openToggle }) => {
  return (
    <>
      <div className="navbar flex lg:pr-36 justify-between align-middle h-20 bg-blue-500">
        <div className="flex">
          <a className="btn bg-transparent border-none shadow-none hover:bg-transparent text-xl">
            E-commerce Dashboard
          </a>
          <button
            className="lg:hidden"
            onClick={() => setOpenToggle(!openToggle)}
          >
            +
          </button>
        </div>

        <div className="flex justify-end">
          <div className="">
            <ul className="hidden lg:flex m-2 gap-6 items-center">
              <li>
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </li>
              {/* notifcation  */}
              <li>
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-[#F9FAFB] p-3 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-4 -ml-4"
                  >
                    <li>
                      <a>NEW DAILY OFFER ADDED RECENTLY PAID</a>
                    </li>
                    <li>
                      <a>PRODUCT EVALUATION</a>
                    </li>
                    <li>
                      <a>RETURN OF A PRODUCT</a>
                    </li>
                    <li>
                      <a> RECENTLY PAID</a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* cart items  */}
              <li>
                <div className="dropdown dropdown-hover ">
                  <div
                    className="bg-[#F9FAFB] p-3 rounded-full"
                    tabIndex={0}
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="18"
                      viewBox="0 0 576 512"
                    >
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                  </div>

                  <table
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box mt-4 -ml-40 table-auto min-w-full text-left text-sm font-light"
                  >
                    <thead className="bg-[#F4F7F9] font-medium">
                      <tr>
                        <th scope="col" className="pr-3 py-2.5">
                          Products Name
                        </th>

                        <th scope="col" className="px-6 py-2.5">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-2.5">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-dashed">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Babor
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          00$
                        </td>
                        <td className="whitespace-nowrap font-medium">
                          <button className="btn btn-circle bg-transparent border-none shadow-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="14"
                              viewBox="0 0 448 512"
                              fill="green"
                            >
                              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                            </svg>
                          </button>
                          <button className="btn btn-circle btn-outline bg-transparent border-none shadow-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="18"
                              viewBox="0 0 576 512"
                              fill="red"
                            >
                              <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
              {/* day night toggle  */}
              <li>
                <div className="dropdown dropdown-hover ">
                  <div className="bg-[#F9FAFB] p-3 rounded-full" role="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                    >
                      <path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
                    </svg>
                  </div>
                </div>
              </li>

              {/* user details */}
              <li>
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-transparent border-none shadow-none"
                  >
                    <div className="avatar">
                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                        <img src={mdKawsar} />
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] -ml-40 menu p-2 shadow bg-base-100 rounded-box w-52 mt-1"
                  >
                    <li className="">
                      <h2 className=" text-[16px] font-bold bg-transparent border-none shadow-none hover:bg-transparent grid-cols-1 grid-rows-2">
                        <span>Md Kawsar</span>
                        <span className="text-xs !block !w-full">
                          Web Designer
                        </span>
                      </h2>
                      {/* <h4 className='text-xs bg-transparent border-none shadow-none hover:bg-transparent -mt-4'></h4> */}
                    </li>
                    <li>
                      <a>Balance: 000$</a>
                    </li>
                    <li>
                      <a>Log out</a>
                    </li>
                    <li>
                      <a>Task Manager</a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* small device */}
          <div className="navbar-start pr-10">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] -ml-40 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
