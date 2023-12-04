import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(storedUser);
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

    <BrowserRouter>

    <NavigationBar 
    user={user}
    onLoggedOut={() => {
        setUser(null);
    }}
    />
    
    <Row className="justify-content-md-center">
        {/* <Routes>
            <Route
            path="/signup"
            element={
            <>
            {user ? (
            <Navigate to="/" />
            ) : (
            <Col md={5}>
                <SignupView />
                </Col>
                )}
                </>
                }
                />
                <Route
                path="/login"
            element={
            <>
                {user ? (
                <Navigate to="/" />
                ) : (
                <Col md={5}>
                    <LoginView 
                    onLoggedIn={(user, token) => 
                        handleLogin(user, token)}
                    />
                </Col>
                )}
            </>
            }
        />
        <Route
            path="/movies/:movieId"
            element={
            <>
                {!user ? (
                <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
                ) : (
                <Col md={8}>
                    <MovieView movie={selectedMovie} />
                </Col>
                )}
            </>
            }
        />
                  <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col md={8}>
                    <ProfileView user={user} />
                  </Col>
                )}
              </>
            }
          />
        <Route
            path="/"
            element={
            <>
                {!user ? (
                <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
                ) : (
                <>
                    {movies.map((movie) => (
                    <Col className="mb-4" key={movie.id} md={3}>
                        <MovieCard
                        movie={movie}
                        onMovieClick={(movie) => 
                        setSelectedMovie(movie)}
                        />
                    </Col>
                    ))}
                </>
                )}
            </>
            }
        />
        </Routes> */}

        <Routes>
        <Route
            path="/"
            element={
        
                <>
                    {movies.map((movie) => (
                    <Col className="mb-4" key={movie.id} md={3}>
                        <MovieCard
                        movie={movie}
                        onMovieClick={(movie) => 
                        setSelectedMovie(movie)}
                        />
                    </Col>
                    ))}
                </>
            }
        />

<Route
            path="/login"
            element={
              
                <Col md={5}>
                    <LoginView 
                    onLoggedIn={(user, token) => 
                        handleLogin(user, token)}
                    />
                </Col>
              
            
            }
        />

<Route
            path="/signup"
            element={
              <SignupView/>
            }
        />

<Route
            path="/profile"
            element={
              <>
                
                  <Col md={8}>
                    <ProfileView user={user} />
                  </Col>
               
              </>
            }
          />

        </Routes>
    </Row>
    </BrowserRouter>
);
};
