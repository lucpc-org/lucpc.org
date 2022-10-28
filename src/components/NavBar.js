import { Link } from "react-router-dom";

export default function NavBar(props) {

  return (
    <div className="w-full fixed bg-background font-bold text-lg">

      <div className="flex flex-row justify-between items-center px-4">
        <Link to="/">
          <h1 className="font-bold text-2xl px-4 py-8">LUCPC</h1>
        </Link>

        <div className="flex">
          <Link to="/leaderboard/"><div className="px-4 py-8">About</div></Link>
          <Link to="/leaderboard/"><div className="px-4 py-8">Leaderboard</div></Link>
          <Link to="/leaderboard/"><div className="px-4 py-8">Problems</div></Link>
        </div>
      </div>
    </div>
  );
}