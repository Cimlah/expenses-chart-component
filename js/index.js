import jsonData from '../data.json' assert {type: 'json'}

let moneySum = 0
for(let i = 0; i < 7; i++) {
    moneySum += jsonData[i].amount
}
const moneySumHTML = document.querySelector('.total-this-month-amount')
moneySumHTML.innerHTML = "$" + moneySum

const days = document.querySelectorAll('.day')
days.forEach((day, index) => {
    day.style.height = jsonData[index].amount/moneySum*100 + "%"
})