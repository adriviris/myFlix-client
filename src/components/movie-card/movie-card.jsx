import PropTypes from "prop-types"; 
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import './movie-card.scss'

export const MovieCard = ({ movie, onMovieClick }) => {
    return ( 
        <Card className="h-100">
            <Card.Img variant="top" src={movie.ImagePath} />
            <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Button 
            onClick={() => 
            onMovieClick(movie)} 
            variant="link"
            className="card-button"
            style={{ cursor: "pointer"}}
            >
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
