
const js_timer = document.querySelector("#js_timer");
const js_date = document.querySelector("#js_date")
const daysA = ["SUN","MON","TUE","WED","THU","FRI"]

function getTime(){
    let date = new Date(); //이게 함수밖에있으면 안됨
    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    let month=date.getMonth();//0부터 리턴..정확한 값은 +1 해야함
    let today=date.getDate(); 
    let year=date.getFullYear();
    let days=date.getDay();

    js_timer.innerHTML=`${hour < 10 ? `0${hour}` : hour} : ${
        min < 10 ? `0${min}` : min
      } : ${sec < 10 ? `0${sec}` : sec}`;
    js_date.innerHTML=`${daysA[days]}  ${today} . ${month+1} . ${year}`
}

function init(){
    setInterval(getTime,1000)
};

init();