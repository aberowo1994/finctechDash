"use strict"

let mainMenu = document.querySelector('.menu');
const mainOverview = document.querySelector('.main');

mainMenu.addEventListener('mouseover',menuToggle);
mainMenu.addEventListener('mouseout',menuToggle);

function menuToggle() {
    mainMenu.classList.toggle('active');
    mainOverview.classList.toggle('active');

}


let myLineChart = document.getElementById('myChart');
// const labels = Utils.months({count: 5});
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
]
const data = {
    labels:labels,
   datasets: [{
    data:[5, 50, 70, 15, 80],
    label: "A Line Chart",
    fill: true,
    borderColor: 'rgba(250, 110, 6, 0.7)',
    backgroundColor: 'rgba(250, 110, 6, 0.6)',
    borderDash: [1,0],
    tension: 0.1,
   }]
}


// myLineChart.getContext('2d');
// this is the config
let chartDefault = (Chart.defaults.color = 'rgba(255,255,255,0.7)');
let familyDefault = (Chart.defaults.font.family = 'Mochiy Pop P One');

let theChart = new Chart(myLineChart,{
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 100,
            },

            // ticks: {
            // textStrokeColor: '#fff',

            // },
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});

console.log('hello');

/**
 * the progress bar javascript integration ************************
 */

let progressNumber = document.getElementById('counting--num');

let reader = 0;
setInterval(function(){
    if (reader === 50) {
        clearInterval();
    } else {
        reader = reader + 1;
        progressNumber.textContent = `${reader}%`
    }
    // reader++;
    // progressNumber.textContent = reader + '%'
}, 35)
