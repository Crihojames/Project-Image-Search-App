const accesskey = "Njo1jCjHylkI8-zPfZ2fKRemp94-b9Epkc9HdnK-s1E"
 
const formEl = document.querySelector("form")
const searchInputEl = document.getElementById("search-input")
const searchResulteEl = document.querySelector(".search-results")
const showMoreButton = document.getElementById("show-more-button")

let inputData = "";
let page = 1;

function searchImages(){
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    searchImages();
} )
