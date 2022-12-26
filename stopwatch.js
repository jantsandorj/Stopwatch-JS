let hours = document.createElement("div")
let minutes = document.createElement("div")
let seconds = document.createElement("div")
let milseconds = document.createElement("div")
let main = document.getElementById("main")
main.appendChild(hours)
main.appendChild(minutes)
main.appendChild(seconds)
main.appendChild(milseconds)
function showtime() {
    let dates = new Date()
    let h = dates.getHours()
    let a = dates.getMinutes();
    let b = dates.getSeconds();
    let c = dates.getMilliseconds();
    hours.innerHTML = `
    <div class="variable">
        ${h}
        <p>hour</p>
    </div>
    <div class="temdeg"><span>:</span></div>
    `
    minutes.innerHTML = `
    <div class="variable">
        ${a}
        <p>min</p>
    </div>
    <div class="temdeg"><span>:</span></div>
    `
    seconds.innerHTML = `
    <div class="variable">
        ${b}
        <p>seconds</p>
    </div>
    <div class="temdeg"><span>:</span></div>
    `
    milseconds.innerHTML = `
    <div class="variable">
        ${c}
        <p>milliseconds</p>
    </div>
    `
    setTimeout(showtime, 1000)
}
showtime()

