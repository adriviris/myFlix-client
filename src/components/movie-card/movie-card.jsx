import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import './movie-card.scss';

export const MovieCard = ({ movie, onMovieClick }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const storedUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (storedUser.FavoriteMovies.includes(movie._id)) {
            setIsFavorite(true);
        }
    }, [movie._id, storedUser.FavoriteMovies]);

    const handleToggleFavorite = () => {
        fetch(`https://gentle-reef-72252-e820382973dd.herokuapp.com/users/${storedUser.UserName}/movies/${movie._id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            method: "POST",
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("user", JSON.stringify(data));
            setIsFavorite(!isFavorite);
        })
        .catch(error => console.error('Error:', error));
    };

    const handleTogglerRemoveFavorite = () => {
        fetch(`https://gentle-reef-72252-e820382973dd.herokuapp.com/users/${storedUser.UserName}/movies/${movie._id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            method: "DELETE",
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("user", JSON.stringify(data));
            setIsFavorite(!isFavorite);
            location.reload();
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={movie.ImagePath} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
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

                <Button
                    variant={isFavorite ? "danger" : "success"}
                    onClick={isFavorite ? handleTogglerRemoveFavorite : handleToggleFavorite}
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
    movie: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired, 
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};
