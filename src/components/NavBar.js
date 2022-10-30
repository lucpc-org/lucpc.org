import { Link } from "react-router-dom";

export default function NavBar(props) {

  return (
    <div className="w-full fixed bg-background font-bold text-base md:text-lg">

      <div className="flex flex-row justify-between items-center px-2 md:px-4">
        <Link to="/">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl px-4 py-6 md:py-8">LUCPC</h1>
        </Link>

        <div className="flex">
          <Link to="/about/"><div className="px-2 md:px-4 py-6 md:py-8 hover:text-neutral-500">About</div></Link>
          <Link to="/leaderboard/"><div className="px-2 md:px-4 py-6 md:py-8  hover:text-neutral-500">Leaderboard</div></Link>
          <Link to="/problems/"><div className="px-2 md:px-4 py-6 md:py-8  hover:text-neutral-500">Problems</div></Link>
        </div>
      </div>
    </div>
  );
}