const newYears='1 Jan 2023';//this time can be changed the way 

const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');


function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalseconds = (newYearsDate - currentDate)/1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600) % 24;
    const minutes = Math.floor(totalseconds/60) % 60
    const seconds = Math.floor(totalseconds)%60


    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=minutes;
    secondsEl.innerHTML=seconds;

}

countdown();
setInterval(countdown,1000);
//countdownfunction is called for every second