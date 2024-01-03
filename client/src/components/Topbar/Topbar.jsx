const Topbar = () => {
  return (
    <>
      <div className="navbar flex justify-between bg-base-100 align-middle">
        <div className="flex">
          <a className="btn btn-ghost text-xl">E-commerce Dashboard</a>
        </div>

        <div className="flex justify-end">
          <div className="">
            <ul className="hidden lg:flex m-2 gap-6">
              <li>
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </li>
              <li>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button">
                    Hover
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-4 -ml-4"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button">
                    Hover
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-4 -ml-10"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button">
                    Hover
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 -ml-10 mt-4"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button">
                    Hover
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-4 -ml-20"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button">
                    Hover
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 -ml-28 mt-4"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-transparent border-none shadow-none"
                  >
                    <div className="avatar">
                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] -ml-40 menu p-2 shadow bg-base-100 rounded-box w-52 mt-1"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* small device */}
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 -ml-40"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Topbar;
