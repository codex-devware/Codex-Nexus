const SidebarData = ({ sections, toggleMenu, menuHide, menuStates }) => {
  const { id, section, subSection } = sections;
  return (
    <div className="collapse border-none -mb-6 ">
      <div
        onClick={subSection?.length > 0 ? () => toggleMenu(section) : null}
        className="collapse-title text-sm flex justify-between items-center gap-20 font-semibold"
      >
        {section}{" "}
        {subSection?.length > 0 && (
          <span
            className={`text-2xl transition-transform transform ${
              menuStates === section ? "transform rotate-60" : ""
            }`}
          >
            {menuStates === section && menuHide[section] ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-[#777]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-[#777]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </span>
        )}
      </div>
      <div
        className={`transition-transform origin-top ease-in-out duration-300 ${
          menuStates === section && menuHide[section]
            ? "max-h-96 opacity-100 transform scale-y-100"
            : "max-h-0 opacity-0 transform scale-y-0"
        }`}
      >
        <ul className="ml-6 mb-6 text-sm">
          {subSection?.map((datas, index) => (
            <li key={index}>{datas}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarData;
