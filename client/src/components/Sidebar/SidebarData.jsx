const SidebarData = ({ sections }) => {
  const { id, section, subSection } = sections;
  return (
    <div tabIndex={id} className="collapse collapse-arrow border-none -mb-6 ">
      <div className="collapse-title text-md font-semibold">{section}</div>
      <div className="collapse-content">
        <ul>
          {subSection.map((datas) => (
            <li key={id}>{datas}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarData;
