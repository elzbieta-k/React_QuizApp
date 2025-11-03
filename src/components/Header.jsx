import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex justify-between font-londrina h-[15vh] w-full xl:w-7xl text-white p-[3vw] text-[25px] sm:text-[30px] mx-auto">
      <Link to="/">Trivia Quiz</Link>
      <div className="flex gap-4 ">
        <Link to="/">Hjem</Link>
        <Link to="scoreboard">Scoreboard</Link>
      </div>
    </nav>
  );
}
