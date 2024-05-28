import '../styles/Welcome.css'
import { useHistory } from 'react-router-dom';

const Welcome = () => {
    const title="UMDbal";
    const history = useHistory();

    const navigateToMainPage = () => {
        history.push('/MainPage');
    };

    return (
        <>
            <div id="title-container">
                <h1>{title}</h1>
                
                <button type="button" className="clickable" onClick={navigateToMainPage}>
                    Enter Here!
                </button>
            </div>
        </>
    );
}


export default Welcome;