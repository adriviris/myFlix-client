import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {

    const [movies, setMovies] = useState ([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://gentle-reef-72252-e820382973dd.herokuapp.com/movies", {
            headers: {'Authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU2ODgzODAyZDYwZjFlMTk3NTY3ODMiLCJVc2VyTmFtZSI6Im1lcm1hbiIsIkVtYWlsIjoibWVybWFubm5ubkBleC5jb20iLCJQYXNzd29yZCI6ImxpbG1lcm1haWQiLCJCaXJ0aGRheSI6IjE5NzAtMDEtMDFUMDA6MDA6MDEuOTk2WiIsIkZhdm9yaXRlTW92aWVzIjpbXSwiX192IjowLCJpYXQiOjE2OTgyNzk3NjgsImV4cCI6MTY5ODg4NDU2OCwic3ViIjoibWVybWFuIn0.aaxSUuMn7AnEVkpYyEKUk99-A_Y7m6AnNEmFgEHHDW4"}
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("movies from api:", data);
            setMovies(data);
        });
    },[token]);

    if (!user) {
        return <LoginView onLoggedIn={(user) => setUser(user)} />;
    }

    if (selectedMovie) {
    return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
}

    if (movies.length === 0) {
    return <div> The list is empty! </div>;
}

return (
    <div>
    <button
        onClick={() => {
        setUser(null);
        }}
    >
        Logout
    </button>
    {movies.map((movie) => (
        < MovieCard 
        key={movie._id} 
        movie={movie}
        onMovieClick={(newSelectedMovie) => {
        setSelectedMovie(newSelectedMovie); 
        }}
        />
    ))}
    </div>
    );
    };