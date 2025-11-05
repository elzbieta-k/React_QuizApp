import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex justify-between h-[15vh] w-full xl:w-7xl text-white pl-[3vw] pr-[3vw] mx-auto">
      <Link
        to="/"
        className="flex items-center font-londrina text-[30px] sm:text-[35px] cursor-pointer"
      >
        Trivia Quiz
      </Link>
      <div className="flex flex-row justify-center items-center gap-4 font-raleway uppercase text-[18px] cursor-pointer">
        <Link to="/">Hjem</Link>
        <Link to="scoreboard">Scoreboard</Link>
      </div>
    </nav>
  );
}
