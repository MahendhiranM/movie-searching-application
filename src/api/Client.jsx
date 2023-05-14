import axios from "axios";

export const getMovies = (searchTerm, setMovies) => {
    axios
        .get(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mjc2NjFiYzkxODgyNGRmYjc3MTUxM2M1Yzk5MzEwMCIsInN1YiI6IjY0NWZjMDc0ZTNmYTJmMDE4N2I4MTdiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96poXyE8qz2qsAfS4kDbBUnriA0Z2kLv7Qj1LSBedR0`,
            },
        })
        .then((response) => {
            setMovies(response.data.results);
            console.log(response.data.results);
        })
        .catch((error) => {
            console.log(error);
        });
};
