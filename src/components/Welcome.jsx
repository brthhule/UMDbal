import '../styles/Welcome.css'
import { Link } from "react-router-dom";


const Welcome = () => {
    const title="UMDbal";

    return (
        <>
            <div id="title-container">
                <h1>{title}</h1>

                <div></div>
                
                <Link to="/mainpage">
                    <button className="clickable">Enter Here!</button>
                </Link>
            </div>
        </>
    );
}


export default Welcome;