//Making 16x16 grid using DOM
//Going to use a loop function to add 16 <div>s to the #container
const container = document.querySelector('div#container');
const newDiv = document.createElement('div');
const testRows = document.createElement('div');
function makeTestRows(gridSize){
    for(var i = 1; i <= gridSize; i++){
        const testRows = document.createElement('div');
        container.appendChild(testRows);        
    }
}


function namingRows(){
    const allRows = document.querySelectorAll('#container > div');
    for (var i = 0; i <= allRows.length - 1; i++){
        allRows[i].classList.add('rows');
    }
}

function makeSquare(){
    const allRows = document.querySelectorAll('#container > div');
    for(var i = 0; i < allRows.length; i++){
        const testSquares = document.createElement('div');
        const oneRow = allRows[i];
        oneRow.appendChild(testSquares);
    }
}

function makingMultipleSquares(gridSize){
    for(var i = 0; i < gridSize; i++){

       makeSquare(i);
    }
}

function namingSquares(){
    const allSquares = document.querySelectorAll('.rows > div');    
    for(var i = 0; i <= allSquares.length - 1; i++){
        allSquares[i].classList.add('squares');
    }
}

function stylingRows(){
    const allRows = document.querySelectorAll('#container > div');
    for (i = 0; i <= allRows.length - 1; i++){
        allRows[i].style.cssText = "display: flex; height: 100%;"
    }
}

function stylingSquares(){
    const allSquares = document.querySelectorAll('.rows > div');
    for (i = 0; i <= allSquares.length - 1; i++){
        allSquares[i].style.cssText = "display: flex; width: 100%; border-width: 2px; border-style: solid; border-color: black"
    }
}



function makeNewGrid(){

    let gridSize = getUserSelection();

    makeTestRows(gridSize);

    namingRows();

    makeSquare();
    
    makingMultipleSquares(gridSize);

    namingSquares();

    stylingRows();

    stylingSquares();
    
    const grids = document.querySelectorAll('.squares');

    addEventListenerGrids(grids, 'mouseover', gridColorChange);
}

//Assigned divs variable to all the divs within the container -- results in a nodelist
const divs = document.querySelectorAll('#container > div');

const grids = document.querySelectorAll('.squares');



//Made function that when ran adds an event listener to each node in a node list
function addEventListenerGrids(list, event, fn){
    const grids = document.querySelectorAll('.squares');
    for(i = 0; i <= grids.length - 1; i++){

        list[i].addEventListener(event, fn);
    };
}

//Made a function that changes the node's style when an event happens
function gridColorChange(event){
        event.target.style.cssText = "background: yellow; display: flex; width: 100%; border-width: 2px; border-style: solid; border-color: black"
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