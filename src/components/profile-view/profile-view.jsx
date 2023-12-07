import React, { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    console.log(user)
    return (
    <div>
    <h2>User Profile</h2>
    <p>Name: {user.UserName}</p>
    <p>Email: {user.Email}</p>
    <p>Birthday: {user.Birthday}</p>
    <hr width="100%" />
    <h1>Favorite Movies</h1>
      {/* Display favorite movies using MovieCard */}
    <div className="favorite-movies">
        {user.FavoriteMovies && user.FavoriteMovies.length > 0 ? (
            user.FavoriteMovies.map((movie) => (
            <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={() => {}}
            />
            ))
            ) : (
        <p>No favorite movies available</p>
        )}
        </div>
        </div>
        );
};
