import campus from '../assets/UMD-campus.jpg'
import '../styles/MainPage.css'

const MainPage = () => {
    var woods = {"name": "Woods", "xCoord": 38.98520825094225, "yCoord": -76.94178927335166}
    var maryMount = {"name": "Mary Mount", "xCoord": 38.9851333833028, "yCoord": -76.94086354821499}
    var dorchester = {"name": "Dorchester", "xCoord": 38.98684874201056, "yCoord": -76.9461386886941}
    var pyonChen = {"name": "Pyon Chen", "xCoord": 38.99217621364386, "yCoord": -76.94490983773476};
    //all building variables defined
    var buildings = [woods, maryMount, dorchester, pyonChen];
    //array of all buildings
    var list = [];
    //list for guesses, ordered closest to furthests
    var answer = pyonChen;
    var guessed = false;
    //answer building variable stored and if guessed variable stored

    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const input = document.getElementById('name').value;
        addListItem(input);
        displayOutput();
    });

    function addListItem(text) {
        if (text == answer.name) {
            guessed = true;
            return;
        }
        let inList = false;
        for (var i = 0; i < list.length; i++) {
            if (list[i].name == text) {
                inList = true;
            }
        }
        if (inList == false) {
            for (var i = 0; i < buildings.length; i++) {
                if (text == buildings[i].name) {
                    list.push(buildings[i]);
                }
            }
        }
    }

    function calculateDistance(coord1, coord2) {
        const R = 6371e3; 
        const φ1 = coord1.xCoord * Math.PI/180;
        const φ2 = coord2.xCoord * Math.PI/180;
        const Δφ = (coord2.xCoord - coord1.xCoord) * Math.PI/180;
        const Δλ = (coord2.yCoord - coord1.yCoord) * Math.PI/180;

        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return R * c; 
    }

    function displayOutput() {
        if (guessed == true) {
            console.log("end game");
            document.getElementById('output').textContent = `You Won!`;
        } else {
            document.getElementById('output').textContent = `Closests:`;
            list.sort((a, b) => calculateDistance(a, answer) - calculateDistance(b, answer));
            for (var i = 0; i < list.length; i++) {
                if (i != 0) {
                    document.getElementById('output').textContent += ',';
                }
                document.getElementById('output').textContent += ' ' + list[i].name;
            };  
        }  
    }

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