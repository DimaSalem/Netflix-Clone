import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Movie(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${props.movie.postar_path}`} />
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    {
                        props.isFavPage &&
                        <>
                            <Button variant="success" onClick={() => { props.updateItem(props.movie) }} >Update</Button>{' '}
                            <Button variant="danger" onClick={() => { props.deleteItem(props.movie) }} >Delete</Button>{' '}
                        </>
                    }
                    {
                        !props.isFavPage && <Button variant="primary" onClick={() => { props.handleShow(props.movie) }}>Add to Favorite</Button>
                    }
                </Card.Body>
            </Card >

        </>
    )
}

export default Movie;