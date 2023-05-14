import StarRating from "../../StarRating/StarRating";

export default function Movie(props) {
    return (
        <div key={props.id} className="is-card">
            <div className="card-img">
                {props.poster_path ? (
                    <img
                        src={
                            "https://image.tmdb.org/t/p/w500" +
                            props.poster_path
                        }
                        alt={props.title}
                    />
                ) : (
                    <div className="no-image"></div>
                )}
            </div>
            <p className="is-title">{props.title}</p>
            <p className="is-desc">
                <StarRating
                    rating={(props.vote_average / 2).toFixed(3).slice(0, -2)}
                />
            </p>
                <p className="release-date">{props.release_date}</p>
        </div>
    );
}
