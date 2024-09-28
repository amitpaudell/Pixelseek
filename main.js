//We have created API Based Seacrch Engine with the help of Unsplash Free API.
//Unsplash provide copyright free images that you can use  on the website
const accessKey = "lN6YPpcvGOv40L9BgfuotGYQGyescsIJRe7v3K43A6k";

const formSearch = document.getElementById("form-search");
const inputSearch = document.getElementById("input-search");
const imageContainer = document.getElementById("image-container");
const loadMoreBtn = document.getElementById("load-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = inputSearch.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    imageContainer.innerHTML = "";
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
    imageContainer.appendChild(imageLink);
  });

  loadMoreBtn.style.display = "block";
}

formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

loadMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
