const movieForm = document.querySelector("#movie-form");
const movieInput = document.querySelector("#movie-input");
const movieButton = document.querySelector("#movie-button");
const movieList = document.querySelector("#movie-list");
let toWatchLists = [];
let newObject = {};

// deleteStorage()함수에서 이벤트가 발생한 imgTag의 부모 요소(li)를 찾아서 
// 로컬 스토리지에서 제거하고, 화면에서도 제거하도록 한다.
function deleteStorage(event){    
    const li = event.target.parentElement;
    const movieTitle = li.firstChild.textContent;

    localStorage.removeItem(movieTitle);
    li.remove();
}

function saveList(movieName){  //movieName매개변수 추가
    newObject = {
        title : movieName,
        id : Date.now(),
   }
   localStorage.setItem(newObject.title , newObject.id );  
   toWatchLists.push(newObject);
}
function makeNode(){
    const movieName = movieInput.value; //movieName을 makeNode()함수에서 초기화
    const listTag = document.createElement("li");
    const textNode= document.createTextNode(movieName);
    listTag.appendChild(textNode);
    movieList.appendChild(listTag);

    const imgTag = document.createElement("img");
    const imgNode = document.createAttribute("src");
    imgNode.value = "images/trashcan.png";
    imgTag.setAttributeNode(imgNode);
    listTag.appendChild(imgTag);
    saveList(movieName); // movieName 인수 추가

    imgTag.addEventListener("click", deleteStorage);
    // imgTag에 이벤트 리스너를 추가하는 부분을 makeNode()함수에서 처리하도록 한다.
}
function summitList(event){
    event.preventDefault();
    makeNode();
} 
