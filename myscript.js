//Making 16x16 grid using DOM
//Going to use a loop function to add 16 <div>s to the #container
const container = document.querySelector('div#container');
var divs = document.querySelectorAll('div');

//This function uses a loop to create <divs> and add it to container
function makeGrid(){
    for(i = 1; i <= 16; i++){
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        
    }
}

makeGrid()s