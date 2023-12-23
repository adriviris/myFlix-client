import React, { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({movies}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    console.log(email)

    const updateUser = (e) => {
        e.preventDefault();
        fetch(`https://myflixmyflix.netlify.app/users/${user.UserName}`, { 
            method: "PUT",
            body: JSON.stringify({
                Password: password,
                Birthday: birthday,
                Email: email

            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            if (response.ok) {
                alert("Update successful");
                return response.json();
            } else {
                alert("Signup failed");
                return response.json();
            }

        }).then(data => {
            localStorage.setItem("user", JSON.stringify(data))
            
        }).catch(error => console.error('Error:', error));
    };


    return (
    <div>
    <h2>User Profile</h2>

    <p>Name: {user.UserName}</p>
    <p>Email: {user.Email}</p>
    <p>Birthday: {user.Birthday}</p>

    <hr width="100%" />

    <form onSubmit={updateUser}>
  <label for="UserName">User name:</label><br />
  <input type="text" id="UserName" name="UserName" value={user.UserName} disabled /><br />
  <label for="Email">Email</label><br />
  <input type="text" id="Email" name="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  /><br/>
  <label for="Password">Password</label><br />
  <input type="password" id="Password" name="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
  <label for="UserName">Birthday</label><br />
  <input type="text" id="Birthday" name="Birthday" value={birthday} placeholder="01/01/01" onChange={(e)=>setBirthday(e.target.value)} /><br /><br/>
  <input type="submit" value="Submit" />
</form>

    <h1>Favorite Movies</h1>
      {/* Display favorite movies using MovieCard */}
    <div className="favorite-movies">
        {user.FavoriteMovies && user.FavoriteMovies.length > 0 ? (
            movies.filter(x => user.FavoriteMovies.includes(x._id))
            .map((movie) => (
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
