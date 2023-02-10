import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar m-auto px-8 md:px-32 bg-slate-50">
      <div className="py-4 flex justify-between md:justify-start gap-8">
        <Link className="font-bold hover:text-green-700" to="/">
          amithebadperson
        </Link>
        <Link
          to="/add"
          className="text-slate-400 text-center hover:text-green-700 hover:cursor-pointer"
        >
          + post
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
