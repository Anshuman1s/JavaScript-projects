const endDate = "30 Jan 2024 4:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
const clock = () =>{
    const end = new Date(endDate)
    const now= new Date()
    if(diff<0){
        return;
    }
    const diff = (end - now)/1000;
    console.log(diff)
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff /3600) %24;
    inputs[2].value = Math.floor(diff /60 )% 60;
    inputs[3].value = Math.floor(diff )%60;

    console.log();
    

}
// clock();

// 1day 24hrs 
// 1 hrs 60 Min 
// 60 min 3600sec
setInterval(()=>{
    clock();
},1000)