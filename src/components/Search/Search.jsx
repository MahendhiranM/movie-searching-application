export default function Search({ searchTerm, handleSearch }) {
    return (
        <section className="is-container-fluid bg-color-1">
            <div className="is-container">
                <div className="search">
                    <p className="is-title">Movie search application</p>
                    <div className="search-box">
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter a movie title or keyword"
                            value={searchTerm}
                            onChange={(event) => handleSearch(event)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
