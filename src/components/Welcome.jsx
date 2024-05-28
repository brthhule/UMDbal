import '../styles/Welcome.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Welcome = () => {
    const title="UMDbal";

    let navigate = useNavigate(); 
    const changePages = () => {
        let path = "/MainPage"; 
        navigate(path);
    }

    return (
        <>
            <div id="title-container">
                <h1>{title}</h1>

                <div></div>
                
                <button type="button" className="clickable" onClick={changePages()}>
                    Enter Here!
                </button>
            </div>
        </>
    );
}


export default Welcome;