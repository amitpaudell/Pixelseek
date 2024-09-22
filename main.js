//We have created API Based Seacrch Engine with the help of Unsplash Free API.
//Unsplash provide copyright free images that you can use  on the website
const accessKey = "lN6YPpcvGOv40L9BgfuotGYQGyescsIJRe7v3K43A6k";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }
  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img"); //Create a new element with img tag
    image.src = result.urls.small; //Add src to img tag
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    //Placing image inside a tag
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });

  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
