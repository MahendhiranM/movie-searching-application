import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Movies from "./components/Movies/Movies";
import { getMovies } from "./api/Client";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(()=>{
        getMovies(searchTerm, setMovies);
    }, [searchTerm])

    return (
        <>
            <Search searchTerm={searchTerm} handleSearch={handleSearch} />
            <Movies movies={movies} />
        </>
    );
};

export default App;
