import Sidebar from "../Sidebar/Sidebar";

const TopBanner = () => {
  return (
    <section className="grid grid-cols-12">
      <div className="col-start-1 col-end-3">
        <Sidebar />
      </div>
      <div className="">
        <h1 className="text-3xl font-bold ">Hello Developers</h1>
      </div>
    </section>
  );
};

export default TopBanner;
