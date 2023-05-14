import Movie from "./Movie/Movie";

export default function Movies({ movies, searchTerm }) {
    return (
        <section className="is-container-fluid">
            <div className="is-container">
                <div className="card-container ">
                    {movies.length > 0
                        ? movies.map((movie) => <Movie {...movie} />)
                        : searchTerm.length > 0
                        ? "No results"
                        : null}
                </div>
            </div>
        </section>
    );
}
