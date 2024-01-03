import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const TopBanner = () => {
  return (
    <section className="grid grid-cols-12 fixed">
      <div className="col-start-1 col-end-3 ">
        <Sidebar />
      </div>
      <div className="col-start-3 col-end-13">
        <Topbar />
      </div>
    </section>
  );
};

export default TopBanner;
