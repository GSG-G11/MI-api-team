// Intilize the date of the day
let time = new Date();
let year = time.getFullYear();
let month = time.getMonth() + 1;
let day = time.getDate();
let value = "galaxy";

// This function will handle the api request 
const req = ((method, url, cb) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                cb(JSON.parse(xhr.responseText));
            } else if (xhr.status === 404) {
                console.log("HTTP error 404 :page not found ");
            } else if (xhr.status === 500) {
                console.log("HTTP error 500 : Internal Server Error");
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send();
})

const changeImg = ((data) => {
    videoAndImg(data);
})
const bringImg = ((data) => {
    LoopImages(data)
})
req("GET", `https://api.nasa.gov/planetary/apod?api_key=fth4fhaP5VEF5XBRzERX5xUb7TPCj3ERo2hmC3zO&date=${year}-${month}-${day}`, changeImg);
req('GET', `https://pixabay.com/api/?key=24477339-22b8ee8a367b2cdaebd16eb69&q=${value}`, bringImg);