import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Movies from "./components/Movies/Movies";
import { getMovies } from "./api/Client";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const inputRef  = useRef();

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(()=>{
        inputRef.current.focus();
        getMovies(searchTerm, setMovies);
    }, [searchTerm])

    return (
        <>
            <Search searchTerm={searchTerm} handleSearch={handleSearch} inputRef={inputRef } />
            <Movies movies={movies} searchTerm={searchTerm} />
        </>
    );
};

export default App;
