let time = new Date();
let year = time.getFullYear();
let month = time.getMonth() + 1;
let day = time.getDate();

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
req("GET", `https://api.nasa.gov/planetary/apod?api_key=fth4fhaP5VEF5XBRzERX5xUb7TPCj3ERo2hmC3zO&date=${year}-${month}-${day}`, changeImg);