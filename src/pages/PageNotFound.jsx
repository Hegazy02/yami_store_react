import NoPage from "../assets/404.svg";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mt-4">Page Not Found</h1>
      <img src={NoPage} alt="" className="w-1/2" />
      <Link to="/">
        <button className="btn btn-primary mt-4">Back to Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
