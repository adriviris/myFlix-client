import PropTypes from "prop-types"; 
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
    return ( 
        <Card>
            <Card.Img variant="top" src={book.image} />
            <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Button onClick={() => onMovieClick(movie)} variant="link">
                Open
            </Button>
            </Card.Body>
            </Card>
            );
        };
    

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,

    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};