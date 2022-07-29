// hambergur menu---------

const menuLine = document.querySelector('.header-menu-line')
const menuBox = document.querySelector('.header-nav-bar-box')
const closeMenu = document.querySelector('#close-menu')
const darkBg = document.querySelector('.dark-bg')


menuLine.addEventListener('click', function (event) {
    event.target.classList.toggle('line-active')
    menuBox.style.right = '0'
    darkBg.style.display = 'block'
})

closeMenu.addEventListener('click', function () {
    menuBox.style.right = '-400px'
    menuLine.classList.remove('line-active')
    darkBg.style.display = 'none'
})

darkBg.addEventListener('click', function () {
    menuBox.style.right = '-400px'
    menuLine.classList.remove('line-active')
    darkBg.style.display = 'none'
})

// login form---------

const loginBtn = document.querySelector('.header-menu-login__btn')
const closeForm = document.querySelector('#close-login')
const loginBox = document.querySelector('.login-box')

loginBtn.addEventListener('click', function () {
    loginBox.style.left = '0'
    darkBg.style.display = 'block'
})

closeForm.addEventListener('click', function () {
    loginBox.style.left = '-410px'
    darkBg.style.display = 'none'
})
darkBg.addEventListener('click', function () {
    loginBox.style.left = '-410px'
    darkBg.style.display = 'none'
})

// slider----------------

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 4000,
    },
});

// search box----------------

const searchBox = document.querySelector('.header-search-box')
const closeSearch = document.querySelector('#close-search')
const openSearch = document.querySelector('#search-btn')

openSearch.addEventListener('click', function () {
    searchBox.style.visibility = 'inherit'
    searchBox.style.opacity = '1'
    searchBox.style.marginTop = '0'
})

closeSearch.addEventListener('click', function () {
    searchBox.style.visibility = 'hidden'
    searchBox.style.opacity = '0'
    searchBox.style.marginTop = '30px'
})

// conference timer----------------

const second1 = document.querySelector('#second1')
const min1 = document.querySelector('#min1')
const hour1 = document.querySelector('#hour1')
const day1 = document.querySelector('#day1')
const second2 = document.querySelector('#second2')
const min2 = document.querySelector('#min2')
const hour2 = document.querySelector('#hour2')
const day2 = document.querySelector('#day2')


let countDownDate = new Date(2022,6,28,4,25,22)

let discountTime = setInterval(function() {
    let dateTimeNow = new Date().getTime()
    let distace = countDownDate-dateTimeNow

    if (distace > 0) {
        let dayTime = 1000 * 60 * 60 * 24
        let hourTime = 1000*60*60
        let minuteTime = 1000*60

        let days = Math.floor(distace/dayTime)
        let hours = Math.floor((distace%dayTime)/hourTime)
        let minutes = Math.floor((distace%hourTime)/minuteTime)
        let seconds = Math.floor((distace%minuteTime)/1000)

        second1.innerHTML = seconds < 10 ? "0" + seconds:seconds
        min1.innerHTML = minutes < 10 ? "0" + minutes:minutes
        hour1.innerHTML = hours < 10 ? "0" + hours:hours
        day1.innerHTML = days < 10 ? "0" + days:days
    }
},1000)

let countDownDate2 = new Date(2022,6,10)

let discountTime2 = setInterval(function() {
    let dateTimeNow = new Date().getTime()
    let distace = countDownDate2-dateTimeNow

    if (distace > 0) {
        let dayTime = 1000 * 60 * 60 * 24
        let hourTime = 1000*60*60
        let minuteTime = 1000*60

        let days = Math.floor(distace/dayTime)
        let hours = Math.floor((distace%dayTime)/hourTime)
        let minutes = Math.floor((distace%hourTime)/minuteTime)
        let seconds = Math.floor((distace%minuteTime)/1000)

        second2.innerHTML = seconds < 10 ? "0" + seconds:seconds
        min2.innerHTML = minutes < 10 ? "0" + minutes:minutes
        hour2.innerHTML = hours < 10 ? "0" + hours:hours
        day2.innerHTML = days < 10 ? "0" + days:days
    }
},1000)

// counter section----------------

const counter = document.querySelectorAll('.counter-icon-num')
const counter2 = document.querySelector('.counter')
let checkStart = false





window.addEventListener('scroll', function() {


    
    if (window.scrollY+650  >= counter2.offsetTop) {

        if (!checkStart) {
            counter.forEach(function(event) {
                 
                event.innerHTML = '0'
            
                let updateNumber = function() {
            
                    let finishNumber = +event.dataset.number
                    let startNumber = +event.innerHTML
                    let increment = finishNumber / 100
                
                    if (startNumber < finishNumber) {
            
                        let sumNumber = startNumber + increment
                        event.innerHTML = Math.ceil(sumNumber)
                        setTimeout(updateNumber,10)
                    } else {
                        event.innerHTML = finishNumber
                    }
                }
            
                updateNumber()
            
            })
        }
        checkStart = true
    }
})






