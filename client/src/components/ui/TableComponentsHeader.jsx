export default function TableComponentsHeader({ btnTitle, title, children }) {
  return (
    <div className="py-6">
      <div className="flex flex-wrap justify-between">
        <div className="">
          <h1 className="text-3xl font-outfit font-semibold">{title}</h1>
        </div>
        <div className="">
          {children && children}
          {btnTitle && (
            <button className="hover:translate-y-[-2px] duration-300 ease-in-out flex flex-wrap items-center gap-2 border-2 py-2 px-3 rounded-md font-outfit font-medium">
              <span className="text-[#1E40AF]"></span> {btnTitle}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
