import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import { Row, Col } from "react-bootstrap";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    
    useEffect(() => {
        if (!token) return;
        fetch("https://gentle-reef-72252-e820382973dd.herokuapp.com/movies", {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(/*"movies from api:",*/ data);
            setMovies(data);
        });
    }, [token]);

    const handleLogin = (loggedInUser, loggedInToken) => {
        setUser(loggedInUser);
        setToken(loggedInToken);
    };
    
    const handleLogout = () => {
        setUser(null);
        setToken(null);
        localStorage.clear();
    };
    
    return (
    <Row className="justify-content-md-center">
        {!user ? (
        <Col md={5}>
        <LoginView onLoggedIn={handleLogin} />
        or
        <SignupView />
        </Col>
        ) : selectedMovie ? (
        <Col md={5}>
        <MovieView
        style={{ border: "1px solid green" }}
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
        />
        </Col>
        ) : movies.length === 0 ? (
        <div>The list is empty!</div>
        ) : (
        <>
        <button onClick={handleLogout}>Logout</button>
        {movies.map((movie) => (
        <Col className="mb-5" key={movie.id} md={3}>
        <MovieCard
        key={movie._id}
        movie={movie}
        onMovieClick={(newSelectedMovie) =>
            setSelectedMovie(newSelectedMovie)
        }
        />
        </Col>
        ))}
        </>
    )}
    </Row>
    );
};
