import { useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import axios from "axios";
import { useState } from "react";

function Home() {
    const [moviesData, setMoviesData] = useState([])

    const getAllMovies = () => {
        const serverURL = 'http://localhost:3002/trending';
        axios.get(serverURL)
            .then(res => setMoviesData(res.data))
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => { getAllMovies(); }, [])

    return (
        <MovieList moviesData={moviesData} />
    )
}
export default Home;