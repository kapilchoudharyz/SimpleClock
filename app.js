'use strict'
let labelHour = document.querySelector('.hour')
let labelMinute = document.querySelector('.minute')
let labelSecond = document.querySelector('.second')
let timer = function (){
    let time = new Date()
    labelHour.textContent = `${time.getHours()}`.padStart(2,'0')
    labelMinute.textContent = `${time.getMinutes()}`.padStart(2,'0')
    labelSecond.textContent = `${time.getSeconds()}`.padStart(2,'0')
    setInterval(function(){
        time = new Date()
        labelHour.textContent = `${time.getHours()}`
        labelMinute.textContent = `${time.getMinutes()}`
        labelSecond.textContent = `${time.getSeconds()}`.padStart(2,'0')
    },1000)
}
timer()