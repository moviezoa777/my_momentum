const movieForm = document.querySelector("#movie-form");
const movieInput = document.querySelector("#movie-input");
const movieButton = document.querySelector("#movie-button");
const movieList = document.querySelector("#movie-list");
let movieName = movieInput.value;
let toWatchs = [];


function makeNode(){
    const listTag = document.createElement("li");
    movieName = movieInput.value;

    const textNode= document.createTextNode(movieName);
    listTag.appendChild(textNode);
    movieList.appendChild(listTag);

    const imgTag = document.createElement("img");
    const imgNode = document.createAttribute("src");
    imgNode.value = "images/trashcan.png";
    imgTag.setAttributeNode(imgNode);
    listTag.appendChild(imgTag);

    const newObject = {
        title : movieName,
        id : Date.now(),
    }
   localStorage.setItem(newObject.title , newObject.id );  
   toWatchs.push(newObject);

   imgTag.addEventListener("click", function(){
    this.parentNode.remove(); 
    })
}


function addList(event){
    event.preventDefault();
    makeNode();
} 

movieButton.addEventListener("click", addList);

if(toWatchs !== null){
    toWatchs.forEach(makeNode);
}









