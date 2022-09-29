let userName = prompt("Adiniz ve soyadiniz:")
myName.innerHTML = userName


function onInterval(){
    let time = new Date()
    myClock.innerHTML = time 

}
function showTime (){
    setInterval(onInterval,1000)
}