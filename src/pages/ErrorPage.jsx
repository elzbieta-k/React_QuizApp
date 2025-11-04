import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-darkgreen text-white">
            <p className="text-2xl pb-10">Something went wrong!</p>
            <Link to="/" className="bg-purple text-white rounded-xl p-2 w-50 text-center">Back to home</Link>
        </div>
    )
}