import Movie from "../Movie/Movie";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ModalMovie from "../ModalMovie/ModalMovie";
import { useState } from "react";

function MovieList({ moviesData }) {
    const [show, setShow] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});

    const handleShow = (movie) => {
        setShow(true);
        setSelectedMovie(movie);
    }
    const handleClose = () => {
        setShow(false);
    }


    return (
        <Row xs={1} md={4} className="g-4">
            {
                moviesData.map(movie => {
                    return (
                        <Col key={movie.id}>
                            <Movie movie={movie} handleShow={handleShow} />
                        </Col>
                    )
                })
            }
            <ModalMovie show={show} handleClose={handleClose} selectedMovie={selectedMovie} />
        </Row>
    )

}
export default MovieList;