//Making 16x16 grid using DOM
//Going to use a loop function to add 16 <div>s to the #container
const container = document.querySelector('div#container');
const newDiv = document.createElement('div');
const testRows = document.createElement('div');
function makeTestRows(){
    for(var i = 1; i <= 10; i++){
        const testRows = document.createElement('div');
        container.appendChild(testRows);        
    }
}
makeTestRows();

const allRows = document.querySelectorAll('#container > div');

function namingRows(){
    for (var i = 0; i <= allRows.length - 1; i++){
        allRows[i].classList.add('rows');
    }
}
namingRows()

function makeSquare(){
    for(var i = 0; i < 10; i++){
        const testSquares = document.createElement('div');
        const oneRow = allRows[i];
        oneRow.appendChild(testSquares);
    }
}

function makingMultipleSquares(){
    for(var i = 0; i < 10; i++){

       makeSquare();
    }
}
makingMultipleSquares();

const allSquares = document.querySelectorAll('.rows > div');

function namingSquares(){
    for(var i = 0; i <= allSquares.length - 1; i++){
        allSquares[i].classList.add('squares');
    }
}
namingSquares();

function stylingRows(){
    for (i = 0; i <= allRows.length - 1; i++){
        allRows[i].style.cssText = "display: flex; height: 100%;"
    }
}
stylingRows();

function stylingSquares(){
    for (i = 0; i <= allSquares.length - 1; i++){
        allSquares[i].style.cssText = "display: flex; width: 100%; border-width: 2px; border-style: solid; border-color: black"
    }
}
stylingSquares();

function makeNewGrid(){
    let gridSize = getUserSelection();
}





//This function uses a loop to create <divs> and add it to container
function makeGrid(){

    let gridSize = getUserSelection();

    for(i = 1; i <= (gridSize * gridSize); i++){
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);        
    }

    
    const divs = document.querySelectorAll('#container > div');
    for (i = 0; i <= divs.length - 1; i++){
        divs[i].classList.add('grid-boxes');
    }

    const grids = document.querySelectorAll('.grid-boxes');
    for (i = 0; i <= grids.length - 1; i++){
        grids[i].style.cssText = "display: flex; padding: 24px; border-style: solid; border-width: 1px; border-color: black";
    }
}

//Using function to add a class list to the 16 new divs

//Assigned divs variable to all the divs within the container -- results in a nodelist
const divs = document.querySelectorAll('#container > div');

//Using a loop function to name each div within the node list
function namingGrids(){
    for (i = 0; i <= divs.length - 1; i++){
        divs[i].classList.add('grid-boxes');
    }
}

const grids = document.querySelectorAll('.grid-boxes');

//Made function that adds style to each grid box using a loop function
function stylingGrids(){
    for (i = 0; i <= grids.length - 1; i++){
        grids[i].style.cssText = "display: flex; padding: 24px; border-style: solid; border-width: 1px; border-color: black";
    }
}


//Made function that when ran adds an event listener to each node in a node list
function addEventListenerGrids(list, event, fn){
    for(i = 0; i <= grids.length - 1; i++){

        list[i].addEventListener(event, fn);
    };
}

//Made a function that changes the node's style when an event happens
function gridColorChange(event){
        event.target.style.cssText = "background: yellow; display: flex; padding: 24px; border-style: solid; border-width: 1px; border-color: black";
    }

//Call function that changes grid color when the mouse is over the individual grid
addEventListenerGrids(grids, 'mouseover', gridColorChange);

//Function to get user input and assign it to a variable
function getUserSelection(){
    let input = prompt('How many squares for each side of the grid? Max amount is 100.');
    return input;
}

//Assign button to equal input button node
const button = document.querySelector('button#input-button');

//Add event listener to the button to run get userinput
button.addEventListener('click', makeNewGrid)