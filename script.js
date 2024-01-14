function clock(){
    // calulating today date and hours 
    let enddate = document.querySelector(".enddate")
    let inputs = document.querySelectorAll("input")
    var currentDate = new Date()
    let date = currentDate.getDate()
    let monthName = ["Jan","Feb","Mar","April","May","June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let month = monthName[currentDate.getMonth()]
    let year = currentDate.getFullYear()
    // // Last date 
    let finalDate = date + 2 ;
    // // change inner html of lastdate 
    enddate.innerText = finalDate + " " + month+ " " + year + " 11:00 am ";
    let end = enddate.innerHTML;
    let lastDate = new Date(end)
    // time left for last date in sec
    let diff = (lastDate - currentDate)/1000;
    if (diff<0) return
    let daysleft = Math.floor(diff/3600/24)
    let hoursLeft =(diff/3600)%24
    let minLeft = (diff/60)%60
    let secLeft = (diff%60)
    // change into days hours and min 
    inputs[0].value = daysleft;
    inputs[1].value = Math.floor(hoursLeft);
    inputs[2].value = Math.floor(minLeft);
    inputs[3].value = Math.floor(secLeft);
}
clock()

setInterval(()=>{
    clock()
    console.log("hii google")
},1000);



