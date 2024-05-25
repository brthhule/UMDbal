import './Welcome.css'
import MainPage from './MainPage'

function Welcome () {
    const title="UMDbal";

    return (
        <>
            <div id="title-container">
                <h1>{title}</h1>
                
                <button type="button" className="clickable" onClick>
                    Enter Here!
                </button>

                <MainPage/>
            </div>
        </>
    );
}


export default Welcome;