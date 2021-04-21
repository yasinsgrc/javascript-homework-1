let myName=document.querySelector("#myName");
myName.innerHTML=prompt("Adınız Nedir?");

function showTime(){
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var date=new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var day = date.getDay();

    hour=checkTime(hour);
    minute=checkTime(minute);
    second=checkTime(second);

     let clock =document.querySelector("#myClock");
     clock.innerText=`${hour}:${minute}:${second} ${days[day]}`;
     clock.textContent=`${hour}:${minute}:${second} ${days[day]}`;
     setTimeout(showTime, 1000);
}

function checkTime(time){
    if(time<10){
        time="0"+time;
    }
    return time;
}
showTime();