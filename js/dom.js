const mainImg = document.querySelector("#main-img");
const header = document.getElementById("main-header");
const faceBtn = document.querySelector("#face-btn");
const instaBtn = document.querySelector("#insta-btn");
const twitterBtn = document.querySelector("#twitter-btn");
const imgAndVideoDiv = document.querySelector("#main-img-div");
const galaxyBtn = document.querySelector("#galaxy");
const lifeStyleBtn = document.querySelector("#LifeStyle");
const foodBtn = document.querySelector("#Food");
const weddingBtn = document.querySelector("#Wedding");
const imageContainer = document.querySelector("#imgs-container");
const resultImgOrVideos = document.querySelector("#description-result");


const creatTitleAndDescription = ((data) => {
    const imgOrVideoTitle = document.createElement("h4");
    imgOrVideoTitle.setAttribute("id", "title-of-img-or-video");
    resultImgOrVideos.appendChild(imgOrVideoTitle);
    const description = document.createElement("p");
    description.setAttribute("id", "description-of-img-or-video");
    resultImgOrVideos.appendChild(description);
    imgOrVideoTitle.textContent = data.title;
    description.textContent = data.explanation;
})
const createBoxImg = (data) => {
    const createImgBox = document.createElement("div");
    createImgBox.classList.add("imgs-box");
    createImgBox.setAttribute("id", "img-box");
    imageContainer.appendChild(createImgBox);

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

const LoopImages = (data) => {
    const hit = data.hits;
    hit.forEach((element) => {
        createBoxImg(element);
    });
};

const videoAndImg = ((data) => {
    if (data.media_type === "image") {
        creatTitleAndDescription(data);
        const imgMain = document.createElement("img");
        imgMain.setAttribute("id", "main-img");
        imgAndVideoDiv.appendChild(imgMain);
        imgMain.src = data.hdurl;
    } else {
        creatTitleAndDescription(data);
        const vid = document.createElement("iframe");
        vid.setAttribute("id", "videos-style")
        imgAndVideoDiv.appendChild(vid);
        vid.src = data.url;
    }
})

const removeAllElements = (() => {
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.lastChild);
    }
})

galaxyBtn.addEventListener("click", (() => {
    removeAllElements();
    value = "galaxy";
    req('GET', `https://pixabay.com/api/?key=24477339-22b8ee8a367b2cdaebd16eb69&q=${value}`, bringImg);
}))

lifeStyleBtn.addEventListener("click", (() => {
    removeAllElements();
    value = "LifeStyle";
    req('GET', `https://pixabay.com/api/?key=24477339-22b8ee8a367b2cdaebd16eb69&q=${value}`, bringImg);
}))

foodBtn.addEventListener("click", (() => {
    removeAllElements();
    value = "food";
    req('GET', `https://pixabay.com/api/?key=24477339-22b8ee8a367b2cdaebd16eb69&q=${value}`, bringImg);
}))

weddingBtn.addEventListener("click", (() => {
    removeAllElements();
    value = "wedding";
    req('GET', `https://pixabay.com/api/?key=24477339-22b8ee8a367b2cdaebd16eb69&q=${value}`, bringImg);
}))