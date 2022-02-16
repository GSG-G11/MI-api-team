const mainImg = document.querySelector("#main-img");
const header = document.getElementById("main-header");
/////
const imageContainer = document.querySelector("#imgs-container");



const createBoxImg = (data) => {
    const createImgBox = document.createElement("div");
    createImgBox.classList.add("imgs-box");
    createImgBox.setAttribute("id", "img-box");
    imageContainer.appendChild(createImgBox)

    const imgInside = document.createElement("img");
    imgInside.setAttribute("id", "api-img");
    imgInside.src = data.largeImageURL;
    createImgBox.appendChild(imgInside);

    const titleInside = document.createElement("h4");
    titleInside.setAttribute("id", "api-img-title");
    titleInside.textContent = data.user;
    createImgBox.appendChild(titleInside);

    const categoryInside = document.createElement("p");
    categoryInside.setAttribute("id", "api-img-category");
    createImgBox.appendChild(categoryInside);
    categoryInside.textContent = data.tags;

  };

  const LoopImages = (data)=>{
    const hit = data.hits;
    hit.forEach(element  => {
        createBoxImg(element)
    });
  }