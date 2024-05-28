import campus from '../assets/UMD-campus.jpg'
import '../styles/MainPage.css'

const MainPage = () => {
    var woods = {"name": "Woods", "location": 1,}
    var maryMount = {"name": "Mary Mount", "location": 10,}
    var dorchester = {"name": "Dorchester", "location": 100,}
    var pyonChen = {"name": "Pyon Chen", "location": 50,};
    //building variables
    var buildings = [woods, maryMount, dorchester];
    //array of all buildings
    var list = [];
    //closest list
    var guess = pyonChen;

    document.getElementById('userForm').addEventListener('submit', function(event) {
        //while (guessed != true) {
            event.preventDefault();
            const input = document.getElementById('name').value;
            addListItem(input);
            displayOutput();
            console.log("here");
            //Testing purposes
        //}
    });

    function addListItem(text) {
        if (text == guess.name) {
            console.log("correct");
            endGame();
        } else {
            for (var i = 0; i < buildings.length; i++) {
                if (text == buildings[i].name) {
                    list.push(buildings[i]);
                }
            }
        }
    }

    function displayOutput() {
        document.getElementById('output').textContent = `Closests:`;
            list.sort((a, b) => a.location - b.location);
            for (var i = 0; i < list.length; i++) {
                if (i != 0) {
                    document.getElementById('output').textContent += ',';
                }
                document.getElementById('output').textContent += ' ' + list[i].name;
            }  
    }

    function endGame() {
        console.log("end game");
        document.getElementById('output').textContent = `You Won!`;
    }
    //not working!! Start here

    return (
        <>
            <div id="container">
                <img src={campus}></img>
            </div>   

            <body>
                <h1>UMDle</h1>
                <form id="userForm">
                    <label htmlFor="name">Enter building name here:</label>
                    <input type="text" id="name" name="name" required/>
                    <button type="submit">Enter</button>
                </form>
                <p id="output"></p>
                <script src="script.js"></script>
            </body>
        </>       
    )
}


export default MainPage;