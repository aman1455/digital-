function clock(){
    let hour = document.getElementsByClassName('hour');
    let minute = document.getElementsByClassName('minutes');
    let second = document.getElementsByClassName('second');
    let period= document.getElementsByClassName('period');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let amPm = h <= 12 ? "AM" : "PM"

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    period.innerHTML = amPm;

    

};


clock();