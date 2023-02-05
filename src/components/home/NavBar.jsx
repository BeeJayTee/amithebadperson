import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar container m-auto px-8 md:px-0">
      <div className="pt-8 flex justify-between md:justify-start gap-8">
        <Link className="font-bold" to="/">
          amithebadperson
        </Link>
        <Link
          to="/add"
          className="text-slate-400 text-center hover:text-slate-800 hover:cursor-pointer"
        >
          + post
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
