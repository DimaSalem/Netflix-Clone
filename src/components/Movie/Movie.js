import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function Movie(props) {


    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${props.movie.postar_path}`} />
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Button variant="primary" onClick={() => { props.handleShow(props.movie) }}>Add to favorite</Button>
                </Card.Body>
            </Card>



        </>
    )
}
export default Movie;