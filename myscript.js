//Making 16x16 grid using DOM
//Going to use a loop function to add 16 <div>s to the #container
const container = document.querySelector('div#container');
const newDiv = document.createElement('div');

//This function uses a loop to create <divs> and add it to container
function makeGrid(){
    for(i = 1; i <= 16; i++){
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

