export default function ProgressBar({ progress }) {
  return (
    <div className="w-full lg:w-4xl bg-gray-200 rounded-full h-5 border-none">
      <div
        className="bg-purple h-5 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
