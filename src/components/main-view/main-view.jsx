import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
    const [movies, setMovies] = useState ([
        { id: 1, 
        title: "Silence of the Lambs",
        image: "https://m.media-amazon.com/images/I/51SHYSFNP2L.jpg",
        genre: "Thriller",
        description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
        director: "Jonathan Demme"
    }, 
        { id: 2, title: "A Knights Tale",
        image: "https://m.media-amazon.com/images/I/51KWR3S762L._SX300_SY300_QL70_FMwebp_.jpg",
        genre: "Romantic Comedy",
        description: "After his master dies, a peasant squire, fueled by his desire for foog and glory, creates a new identity for himself as a knight.",
        director: "Brian Thomas Helgeland"
    },
        { id: 3, title: "Life is Beautiful",
        image: "https://m.media-amazon.com/images/I/517EeC7lo-L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        genre: "Drama",
        description: "A gentle Jewish-Italian waiter meets a pretty schoolteacher, and wins her over with his charm and humor. Eventually they marry and have a son, Giosue. Their happiness is abruptly halted, however, when the Guido and his son Giosue are separated from Dora, the mother, and taken to a concentration camp. Determined to shelter his son from the horrors of his surroundings, Guido convinces Giosue that their time in the camp is merely a game.",
        director: "Roberto Begnini"
    },
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
    return <MovieView book={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
}

    if (movies.length === 0) {
    return <div> The list is empty! </div>;
}

    return (
    <div>

    {movies.map((movie) => (
        < MovieCard 
        key={movie.id} 
        movie={movie}
        onMovieClick={(newSelectedMovie) => {
        setSelectedMovie(newSelectedMovie); 
        }}
        />
    ))}
    </div>
    );
    };