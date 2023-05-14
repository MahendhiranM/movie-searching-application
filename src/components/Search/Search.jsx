export default function Search({ searchTerm, handleSearch, inputRef}) {
    return (
        <section className="is-container-fluid bg-color-1">
            <div className="is-container">
                <div className="search">
                    <p className="is-title is-4">Welcome to Movie Search Application</p>
                    <p className="is-title">Find Your Favorite Movie </p>
                    <div className="search-box">
                        <input
                            type="text"
                            className="input"
                            placeholder="Type movie title or keyword"
                            value={searchTerm}
                            onChange={(event) => handleSearch(event)}
                            ref={inputRef}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
