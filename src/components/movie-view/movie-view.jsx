import './movie-view.scss'
import { useNavigate } from 'react-router-dom';

export const MovieView = ({ movie, onBackClick }) => {
    const navigate = useNavigate();
    const imageUrl = location.href.split("/movie") [0] + "/" +movie.ImagePath;
    return (
    <div>
        <div>
        <img src={imageUrl} width="100%"/>
        </div>
        <div>
            <span>Title: </span><span>{movie.Title}</span>
            </div>
            <div>
            <span>Director: </span><span>{movie.Director.Name}</span>
            </div>
            <button 
            onClick={() => navigate(-1)}
            className="back-button"
            style={{ cursor: "pointer"}}
            >
                Back</button>
            </div>
    );
};