import { createRoot } from 'react-dom/client';

//IMPORT STATEMENT TO INDICATE THAT YOU NEED TO BUNDLE './INDEX.SCSS'
import "./index.scss";

//MAIN COMPONENT (WILL EVENTUALLY USE ALL THE OTHERS)
const MyFlixApplication = () => {
    return (
        <div className="my-flix">
            <div>Good morning</div>
        </div>
    );
};

//FINDS THE ROOT OF YOUR APP
const container = document.querySelector("#root");
const root = createRoot(container);

//TELLS REACT TO RENDER YOUR APP IN THE ROOT DOM ELEMENT 
root.render(<MyFlixApplication />)