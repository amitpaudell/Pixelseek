function loadMoreText() {
  var contentDiv = document.querySelector(".description");
  var newText = document.createElement("p");
  newText.innerHTML =
    "PixelSeek aspires to make image searching more intuitive and accessible for everyone, from casual users to professional content creators. By leveraging available and accessible API technologies, PixelSeek promotes the expansion of knowledge and information in the digital space, supporting various industries and individuals who rely on accurate image search capabilities.";
  contentDiv.appendChild(newText);

  //    You can hide the button after text is loaded
  document.querySelector(".cta").style.display = "none";
}
