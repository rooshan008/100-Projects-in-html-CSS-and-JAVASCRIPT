const valueCount = document.querySelector(".value")
const decrementBtn = document.querySelector(".decrementBtn")
const incrementBtn = document.querySelector(".incrementBtn")
const inputBox = document.querySelector(".inputBox")
const resetBtn = document.querySelector(".resetBtn")


let count = 0
incrementBtn.addEventListener("click", () => {
    count = (count + Number(inputBox.value))
    valueCount.innerHTML = count
 
})

decrementBtn.addEventListener("click", () => {
    count = (count - Number(inputBox.value))
    valueCount.innerHTML = count
})

resetBtn.addEventListener("click", () => {
    count = 0
    inputBox.value = 0
    valueCount.innerHTML = 0
})