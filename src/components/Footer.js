import { Link } from "react-router-dom";

export default function Footer(props) {

  return (
    <div className="w-full b-0 mt-auto flex flex-row justify-center items-center text-shadow bg-neutral-200 text-xs md:text-sm">
      <Link to="/contact/">
        <button className="p-2 sm:p-4 font-bold hover:text-neutral-500">Contact Us</button>
      </Link>
      <a href="https://www.liberty.edu/">
        <div className="p-2 sm:p-4 font-bold hover:text-neutral-500">Liberty University</div>
      </a>
    </div>
  );

}

