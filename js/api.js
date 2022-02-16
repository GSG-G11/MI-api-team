let time = new Date();
let year = time.getFullYear();
let month = time.getMonth() + 1;
let day = time.getDate();
let value = "photography";

const req = ((method, url, cb) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cb(JSON.parse(xhr.responseText));
        }
    };
    xhr.open(method, url, true);
    xhr.send();
})

const changeImg = ((data) => {
    mainImg.src = data.hdurl;
})
req("GET", `https://api.nasa.gov/planetary/apod?api_key=fth4fhaP5VEF5XBRzERX5xUb7TPCj3ERo2hmC3zO&date=${year}-${month}-${day-1}`, changeImg);





// const boxImges = ((data)=> {
//     // console.log((data))
//     // console.log((data).hits[0])
//     // console.log((data).hits[0].largeImageURL)
//     apiImg.src = data.hits[0].largeImageURL;
//     imgTitle.textContent = data.hits[0].user;
//     imgCategory.textContent = data.hits[0].tags;
// })



// const newImgBox = ((data) =>{
//     console.log(data);
//     data.forEach(element => {
//             const WholeBox = ` <div id="imgs-container" class="imgs-container">
//                 <div id="img-box" class="img-box"> 
//                     <img id="api-img" src="${apiImg.src}" alt="Reload">
//                     <h4 id="api-img-title">${imgTitle.textContent}</h4>
//                     <span id="api-img-category">${imgCategory.textContent}</span>
//                 </div>
//                 </div>`
//                 imageContainer.appendChild(WholeBox);
//     });
// })


req('GET' , `https://pixabay.com/api/?key=24477339-22b8ee8a367b2cdaebd16eb69&q=${value}` , LoopImages);




//get img urls form api (data) stor them using DOM// --> append them in html create elemnts

