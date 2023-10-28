const accesskey = "Njo1jCjHylkI8-zPfZ2fKRemp94-b9Epkc9HdnK-s1E"
 
const formEl = document.querySelector("form")
const searchInputEl = document.getElementById("search-input")
const searchResulteEl = document.querySelector(".search-results")
const showMoreButtonEl = document.getElementById("show-more-button")

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
    const response = await fetch(url);
    const data = await response.json();
    if(page === 1){
        searchResulteEl.innerHTML = ""
    }

    const results = data.results;


    results.map(result => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a")
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink)
    searchResulteEl.appendChild(imageWrapper)
    });

    page++;

    if (page > 1) {
        showMoreButtonEl.style.display = "block";
    }

}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
} )

showMoreButtonEl.addEventListener("click", () => {
    searchImages();
})