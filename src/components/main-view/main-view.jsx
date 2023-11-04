import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {

    const [movies, setMovies] = useState ([
    //     { id: 1, 
    //     title: "Silence of the Lambs",
    //     image: "https://m.media-amazon.com/images/I/51SHYSFNP2L.jpg",
    //     genre: "Thriller",
    //     description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    //     director: "Jonathan Demme"
    // }, 
    //     { id: 2, title: "A Knights Tale",
    //     image: "https://m.media-amazon.com/images/I/51KWR3S762L._SX300_SY300_QL70_FMwebp_.jpg",
    //     genre: "Romantic Comedy",
    //     description: "After his master dies, a peasant squire, fueled by his desire for foog and glory, creates a new identity for himself as a knight.",
    //     director: "Brian Thomas Helgeland"
    // },
    //     { id: 3, title: "Life is Beautiful",
    //     image: "https://m.media-amazon.com/images/I/517EeC7lo-L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    //     genre: "Drama",
    //     description: "A gentle Jewish-Italian waiter meets a pretty schoolteacher, and wins her over with his charm and humor. Eventually they marry and have a son, Giosue. Their happiness is abruptly halted, however, when the Guido and his son Giosue are separated from Dora, the mother, and taken to a concentration camp. Determined to shelter his son from the horrors of his surroundings, Guido convinces Giosue that their time in the camp is merely a game.",
    //     director: "Roberto Begnini"
    // },
    ]);
    useEffect(() => {
        fetch("https://gentle-reef-72252-e820382973dd.herokuapp.com/movies", {
            headers: {'Authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU2ODgzODAyZDYwZjFlMTk3NTY3ODMiLCJVc2VyTmFtZSI6Im1lcm1hbiIsIkVtYWlsIjoibWVybWFubm5ubkBleC5jb20iLCJQYXNzd29yZCI6ImxpbG1lcm1haWQiLCJCaXJ0aGRheSI6IjE5NzAtMDEtMDFUMDA6MDA6MDEuOTk2WiIsIkZhdm9yaXRlTW92aWVzIjpbXSwiX192IjowLCJpYXQiOjE2OTgyNzk3NjgsImV4cCI6MTY5ODg4NDU2OCwic3ViIjoibWVybWFuIn0.aaxSUuMn7AnEVkpYyEKUk99-A_Y7m6AnNEmFgEHHDW4"}
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("movies from api:", data);
            setMovies(data);
        });
    },[]); 
    //[token]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
    return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
}

    if (movies.length === 0) {
    return <div> The list is empty! </div>;
}

    return (
    <div>

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