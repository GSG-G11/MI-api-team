// link html file to js
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
const search = document.querySelector("#Search");
const inputSearch = document.querySelector("#input-box");

// This function will creat the title and the description of the main photo or video
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

// This will creat images and there title and description in the main area
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


// The loop to create all images that reseved from API
const LoopImages = (data) => {
    const hit = data.hits;
    hit.forEach((element) => {
        createBoxImg(element);
    });
};

// This function will creat the main photo or video
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

// This function will remove all elements from the page 
const removeAllElements = (() => {
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.lastChild);
    }
})

// This function will change the images to galaxy images
galaxyBtn.addEventListener("click", (() => {
    removeAllElements();
    value = "galaxy";
    req('GET', `https://pixabay.com/api/?key=24477339-22b8ee8a367b2cdaebd16eb69&q=${value}`, bringImg);
}))

// This function will change the images to life style images
lifeStyleBtn.addEventListener("click", (() => {
    removeAllElements();
    value = "LifeStyle";
    req('GET', `https://pixabay.com/api/?key=24477339-22b8ee8a367b2cdaebd16eb69&q=${value}`, bringImg);
}))

// This function will change the images to food images
foodBtn.addEventListener("click", (() => {
    removeAllElements();
    value = "food";
    req('GET', `https://pixabay.com/api/?key=24477339-22b8ee8a367b2cdaebd16eb69&q=${value}`, bringImg);
}))

// This function will change the images to wedding images
weddingBtn.addEventListener("click", (() => {
    removeAllElements();
    value = "wedding";
    req('GET', `https://pixabay.com/api/?key=24477339-22b8ee8a367b2cdaebd16eb69&q=${value}`, bringImg);
}))

// This function will change the images to value you added the input 
search.addEventListener("click", (() => {
    event.preventDefault();
    if (inputSearch.value === "") {
        return
    } else {
        value = inputSearch.value;
        removeAllElements();
        req('GET', `https://pixabay.com/api/?key=24477339-22b8ee8a367b2cdaebd16eb69&q=${value}`, bringImg);
    }
}))