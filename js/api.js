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
    if (data.media_type === "image") {
        mainImg.src = data.hdurl;
    } else {
        req("GET", `https://api.nasa.gov/planetary/apod?api_key=oSnqH9JmVcGOO58lqnKyVzgeWfd0VvokmLCLYFWX&date=${year}-${month}-${day-3}`, changeImg);
    }
})
req("GET", `https://api.nasa.gov/planetary/apod?api_key=oSnqH9JmVcGOO58lqnKyVzgeWfd0VvokmLCLYFWX&date=${year}-${month}-${day}`, changeImg);