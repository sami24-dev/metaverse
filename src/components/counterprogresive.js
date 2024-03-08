const counterElements = document.querySelectorAll('.counter')
let interval = 1000
counterElements.forEach((counterElement)=>{
    let numberCurrent = parseInt(counterElement.textContent)
    let numberFinish = parseInt(counterElement.getAttribute('data-amount-max'))
    let duration = Math.floor(interval / numberFinish)
    let counter = setInterval(function () {
        let newCount = numberCurrent ++
        counterElement.textContent = newCount
        if (newCount == numberFinish) {
            clearInterval(counter)
        }  
    }, duration)
})