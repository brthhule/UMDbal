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
        };    
}

function endGame() {
    document.getElementById('output').textContent = `You Won!`;
}
//not working!! Start here