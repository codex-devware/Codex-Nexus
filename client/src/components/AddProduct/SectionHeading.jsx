const SectionHeading = ({ title, desc }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-blue/20 my-1">{title}</h1>
      <p className="text-[#9699ab] text-[14px]">{desc}</p>
    </div>
  );
};

export default SectionHeading;
