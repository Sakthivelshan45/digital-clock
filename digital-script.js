const hour = document.getElementById("hour");
const mint = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function UpdateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm1 = "AM"

    if (h > 12){
        h = h - 12
        ampm1 = "PM"
    }
       
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerHTML = h;
    mint.innerHTML = m;
    sec.innerHTML = s;
    ampm, (innerHTML = ampm1) 

    setTimeout(() => {
        UpdateClock()
    }, 1000);

}

UpdateClock()