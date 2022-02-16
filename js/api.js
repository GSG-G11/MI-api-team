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
    if (data.media_type === "image") {
        console.log(data.hdurl);
        mainImg.src = data.hdurl;
    } else {
        req("GET", `https://api.nasa.gov/planetary/apod?api_key=oSnqH9JmVcGOO58lqnKyVzgeWfd0VvokmLCLYFWX&date=${year}-${month}-${day-3}`, changeImg);
    }
})
req("GET", `https://api.nasa.gov/planetary/apod?api_key=fth4fhaP5VEF5XBRzERX5xUb7TPCj3ERo2hmC3zO&date=${year}-${month}-${day-1}`, changeImg);



req('GET', `https://pixabay.com/api/?key=24477339-22b8ee8a367b2cdaebd16eb69&q=${value}`, LoopImages);