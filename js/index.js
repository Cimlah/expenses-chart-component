const jsonData = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]

const days = document.querySelectorAll('.day')
days.forEach((day, index) => {
    day.style.height = jsonData[index]/Math.max(...jsonData)*100 + "%"
})