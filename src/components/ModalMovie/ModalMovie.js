import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalMovie(props) {

    const addMovie = (receivedComment) => {
        const url = "http://localhost:3002/addMovie";

        const obj = {
            title: props.selectedMovie.title,
            release_date: props.selectedMovie.release_date,
            poster_path: props.selectedMovie.poster_path,
            overview: props.selectedMovie.overview,
            comment: receivedComment
        }
        axios.post(url, obj)
            .then(response => {
                console.log(response);
                console.log('success');
            })
            .catch(error => {
                console.log(error);
            });
    }

    const addComment = (e) => {
        e.preventDefault();
        let comment = e.target.comment.value || "";
        addMovie(comment);
    }

    return (
        <>
            <Modal show={props.show}
                onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Info Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={addComment}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${props.selectedMovie.postar_path}`} width='100%'
                            style={{
                                width: "100%",
                                height: "400px"
                            }} />
                        <h3 style={{ textAlign: "center" }}>{props.selectedMovie.title}</h3>
                        <Form.Group className="mb-3">
                            <>
                                <Form.Group className="mb-3">
                                    <Form.Label>Add a comment</Form.Label>
                                    <Form.Control name='comment' placeholder="Enter your comment" />
                                </Form.Group>
                            </>
                        </Form.Group>
                        <Button variant="primary" type='submit'>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal >

        </>
    )
}
export default ModalMovie;