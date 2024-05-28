import campus from '../assets/UMD-campus.jpg'
import '../styles/MainPage.css'

const MainPage = () => {
    return (
        <>
            <div id="container">
                <img src={campus}></img>
            </div>   

            <body>
                <h1>UMDble</h1>
                <form id="userForm">
                    <label htmlFor="name">Enter building name here:</label>
                    <input type="text" id="name" name="name" required/>
                    <button type="submit">Enter</button>
                </form>
                <p id="output"></p>
            </body>
        </>       
    )
}


export default MainPage;
