import campus from '../assets/UMD-campus.jpg'
import '../styles/HomeScreen.css'

const MainPage = () => {
    return (
        <>
            <body>
                <h1>UMDble</h1>
                <form id="userForm">
                    <label htmlFor="name">Enter building name here:</label>
                    <input type="text" id="name" name="name" required/>
                    <br></br>
                    <button type="submit">Enter</button>
                </form>
                <p id="output"></p>
            </body>

            <div id="container">
                <img src={campus}></img>
            </div>   
        </>       
    )
}


export default MainPage;
