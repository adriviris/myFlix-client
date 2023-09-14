import { createRoot } from 'react-dom/client';
import { MainView } from "../src/components/main-view/main-view";
//IMPORT STATEMENT TO INDICATE THAT YOU NEED TO BUNDLE './INDEX.SCSS'
import "./index.scss";

//MAIN COMPONENT (WILL EVENTUALLY USE ALL THE OTHERS)
const MyFlixApplication = () => {
    return (
        <div className="my-flix">
            < MainView />
        </div>
    );
};

//FINDS THE ROOT OF YOUR APP
const container = document.querySelector("#root");
const root = createRoot(container);

//TELLS REACT TO RENDER YOUR APP IN THE ROOT DOM ELEMENT 
root.render(<MyFlixApplication />)