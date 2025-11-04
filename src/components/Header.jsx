import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex justify-between h-[15vh] w-full xl:w-7xl text-white pl-[3vw] pr-[3vw] mx-auto">
      <Link
        to="/"
        className="flex items-center font-libertinus text-[25px] sm:text-[30px] cursor-pointer"
      >
        Trivia Quiz
      </Link>
      <div className="flex flex-col justify-center items-end sm:flex-row sm:items-center gap-4 font-raleway uppercase text-[20px] cursor-pointer">
        <Link to="/">Hjem</Link>
        <Link to="scoreboard">Scoreboard</Link>
      </div>
    </nav>
  );
}
