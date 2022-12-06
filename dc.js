function clock(){
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minutes');
    let second = document.getElementById('second');
    let period= document.getElementById('period');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let amPm = h <= 12 ? "AM" : "PM"

    if(h > 12){
         h = h - 12
    }
     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    period.innerHTML = amPm;

    

};
setInterval(clock, 1000);
