import Movie from "../Movie/Movie";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ModalMovie from "../ModalMovie/ModalMovie";
import { useState, useEffect } from "react";
import axios from "axios";

function MovieList({ moviesData, isFavPage }) {


    const [show, setShow] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});

    const handleShow = (movie) => {
        setShow(true);
        setSelectedMovie(movie);
    }
    const handleClose = () => {
        setShow(false);
    }

    //FavMovies
    const [moviesFavorite, setMoviesFavorite] = useState([])


    const getAllFavMovies = () => {

        const serverURL = `http://localhost:3002/getAllMovies`;

        axios.get(serverURL)
            .then(response => {
                console.log(response.data)
                setMoviesFavorite(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getAllFavMovies();
    }, [])

    const deleteItem = (item) => {
        let url = `http://localhost:3002/deleteMovie/${item.id}`
        axios.delete(url)
            .then(response => {
                setMoviesFavorite(oldMovies => oldMovies.filter(movie => movie.id !== item.id));
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const updateItem = (item) => {
        handleShow(item);
    }

    const updateFavoriteMovies = (data) => {
        setMoviesFavorite(data);
    }







    return (
        <>
            {
                isFavPage && <Row>
                    {moviesFavorite?.map(movie => (
                        <Col key={movie.id}>
                            <Movie movie={movie} handleShow={handleShow} isFavPage={isFavPage} deleteItem={deleteItem} updateItem={updateItem} />
                        </Col>
                    ))}
                    <ModalMovie show={show} handleClose={handleClose} selectedMovie={selectedMovie} isFavPage={isFavPage} updateFavoriteMovies={updateFavoriteMovies} />
                </Row>
            }
            {
                !isFavPage && <Row xs={1} md={4} className="g-4">
                    {moviesData.map(movie => {
                        return (
                            <Col key={movie.id}>
                                <Movie movie={movie} handleShow={handleShow} />
                            </Col>
                        )
                    })}

                    <ModalMovie show={show} handleClose={handleClose} selectedMovie={selectedMovie} />
                </Row>
            }
        </>


    )

}
export default MovieList;