const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        loading.style.display = 'none'
        // loading.style.opacity = '0'
        // setTimeout(()=>{
        // }, 500)
    },2000)

})


const currentYear = new Date().getFullYear();
console.log(currentYear)

const newYearTime = new Date(`January 1 ${currentYear+1} 00:00:00`)
// console.log(newYearTime)
year.innerText = currentYear+1;

function updateCountDown() {
    const currentTime = new Date();
    // console.log(currentTime)

    const diff = newYearTime-currentTime;
    // console.log(diff)

    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;
    // console.log(s);

    // console.log(d,h,m,s)

    days.innerHTML = d;
    hours.innerHTML = (h<10) ? '0' + h : h;
    minutes.innerHTML = (m<10) ? '0' + m : m;
    seconds.innerHTML = (s<10) ? '0' + s : s;   
}
// setTimeout(()=>{
//     loading.remove();
//     countdown.style.display = 'flex'
// },1000)

setInterval(updateCountDown,1000)
