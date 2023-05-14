import Movie from "./Movie/Movie";

export default function Movies({ movies }) {
    return (
        <section className="is-container-fluid">
                <div className="is-container">
                    <div className="is-flex">
                        {movies.length > 0 ? movies.map(movie => <Movie {...movie} />) : "No results"}
                    </div>
                </div>
        </section>
    );
}
