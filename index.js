//counts, subtracts and clears the number
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    
}

function decrease() {
    if (count > 0) {
        count = count - 1
        countEl.innerText = count
    }
}

function clearCount() {
    count = 0
    countEl.innerText = count
}