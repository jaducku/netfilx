import MovieVideo from "../components/MovieVideo";
import ReceltlyAdded from "../components/ReceltlyAdded";

export default function HomePage() {
    return (
        <div className="p-5 lg:p-0">
            <MovieVideo/>
            <h1 className="text-3xl font-bold">Receltly Added</h1>
            <ReceltlyAdded/>
        </div>
    )
}