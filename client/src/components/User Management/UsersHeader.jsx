import { Link } from "react-router-dom";

const UsersHeader = () => {
  return (
    <div className="py-6">
      <div className="flex items-center flex-wrap justify-between">
        <h1 className="text-3xl font-outfit font-semibold">Users</h1>
        <Link
          to="/security/register"
          className="hover:translate-y-[-2px] duration-300 ease-in-out flex flex-wrap items-center gap-2 border-2 py-2 px-3 rounded-md font-outfit font-medium bg-white"
        >
          <span className="text-secondary/10"></span> User Application
        </Link>
      </div>
    </div>
  );
};

export default UsersHeader;
