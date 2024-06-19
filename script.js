const output = document.querySelector('.output');

let i=10;

function Countdown(){
    const para= document.createElement('p');
    if (i === 10) {
        para.textContent = "Countdown 10";
    } else if (i === 0) {
        para.textContent ="Blast off!";
    } else {
        para.textContent = i;
    }
    output.appendChild(para);
    i--;

    if (i<0) {
        clearInterval(intervalId);
    }
}
const intervalId = setInterval(Countdown, 1000); //1000 milliseconds (1 second) 