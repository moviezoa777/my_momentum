const movieForm = document.querySelector("#movie-form");
const movieInput = document.querySelector("#movie-input");
const movieButton = document.querySelector("#movie-button");
const movieList = document.querySelector("#movie-list");

function addList(){
    const list = document.createElement("li");
    const movieName = movieInput.value;
    const textNode= document.createTextNode(movieName);
    list.appendChild(textNode);
    movieList.appendChild(list);

}

movieButton.addEventListener("click", addList);