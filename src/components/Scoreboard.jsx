import useLocalStorage from "../hooks/useLocalStorage";

export default function Scoreboard() {
  const [results] = useLocalStorage("quizResults", []);

  const groupedResults = results?.reduce((groups, result) => {
    const difficulty = result.difficulty || "unknown";
    if (!groups[difficulty]) groups[difficulty] = [];
    groups[difficulty].push(result);
    return groups;
  }, {});

  Object.keys(groupedResults).forEach((difficulty) => {
    groupedResults[difficulty].sort((a, b) => {
      const percentA = (a.score / a.amount) * 100;
      const percentB = (b.score / b.amount) * 100;
      return percentB - percentA;
    });
  });

  if (!results.length) {
    return (
      <div className="min-h-[85vh] pt-10">
        <p className="text-white text-center mt-4">No results yet 😅</p>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] pt-10 w-[85vw] max-w[1024px] mx-auto">
      <div className="font-raleway text-white flex flex-col items-center md:items-start gap-6 w-[90%] md:flex-row mx-auto">
        {Object.entries(groupedResults).map(([difficulty, group]) => (
          <div
            key={difficulty}
            className="bg-darkgreen p-4 rounded-lg w-full shadow-lg"
          >
            <h2 className="text-2xl font-bold text-center mb-3">
              {difficulty.toUpperCase()}
            </h2>

            <ul className="flex flex-col  gap-2">
              {group.map((r, i) => {
                const percent = Math.round((r.score / r.amount) * 100);
                return (
                  <li
                    key={i}
                    className="relative bg-white text-black px-4 py-2 rounded-md group cursor-pointer hover:bg-gray-100 transition"
                  >
                    <p className="font-semibold">
                      {r.name} - {percent}%
                    </p>

                    {/* Tooltip */}
                    <div className="absolute hidden group-hover:flex flex-col bg-purple text-white text-sm p-2 rounded-md top-full mt-2 left-1/2 -translate-x-1/2 z-10 w-max shadow-md">
                      <p>Category: {r.category}</p>
                      <p>Questions: {r.amount}</p>
                      <p>Type: {r.type}</p>
                      <p>
                        Score: {r.score}/{r.amount}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
