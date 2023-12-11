import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import './movie-card.scss'

export const MovieCard = ({ movie, onMovieClick }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    
    const handleToggleFavorite = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    fetch(`https://gentle-reef-72252-e820382973dd.herokuapp.com/users/${storedUser.UserName}/movies/${movie._id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        method: "POST",
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("user", JSON.stringify(data));
        console.log(data);
    })

    setIsFavorite(!isFavorite);
 
       
};

return (
    <Card className="h-100">
    <Card.Img variant="top" src={movie.ImagePath} />
    <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
        <Button
            onClick={() => onMovieClick(movie)}
            variant="link"
            className="card-button"
            style={{ cursor: "pointer" }}
        >
            Open
        </Button>
        </Link>

        {/* Button to add/remove from favorites */}
        <Button
        variant={isFavorite ? "danger" : "success"}
        onClick={handleToggleFavorite}
        className="card-button"
        style={{ cursor: "pointer", marginTop: "10px" }}
        >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
        </Card.Body>
    </Card>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
    onMovieClick: PropTypes.func.isRequired,
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,

    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};
