//Making 16x16 grid using DOM
//Going to use a loop function to add 16 <div>s to the #container
const container = document.querySelector('div#container');
const newDiv = document.createElement('div');

//This function uses a loop to create <divs> and add it to container
function makeGrid(){
    for(i = 1; i <= 256; i++){
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        
    }
}
makeGrid();

//Using function to add a class list to the 16 new divs

//Assigned divs variable to all the divs within the container -- results in a nodelist
const divs = document.querySelectorAll('#container > div');
//Using a loop function to name each div within the node list
function namingGrids(){
    for (i = 0; i <= divs.length - 1; i++){
        divs[i].classList.add('grid-boxes');
    }
}
namingGrids();

const grids = document.querySelectorAll('.grid-boxes');

//Made function that adds style to each grid box using a loop function
function stylingGrids(){
    for (i = 0; i <= grids.length - 1; i++){
        grids[i].style.cssText = "display: flex; padding: 24px; border-style: solid; border-width: 1px; border-color: black";
    }
}
stylingGrids();

function addEventListenerGrids(list, event, fn){
    for(i = 0; i <= grids.length - 1; i++){

        list[i].addEventListener(event, fn);
    };
}

function gridColorChange(event){
        event.target.style.cssText = "background: yellow; display: flex; padding: 24px; border-style: solid; border-width: 1px; border-color: black";
    }

addEventListenerGrids(grids, 'mouseover', gridColorChange);

function getUserInput(){
    const userInput = prompt('How many squares per side? Max amount of squares is 100.')

    return console.log(userInput)
}
