function time(){
    const myTime=new Date();
    let hrs=myTime.getHours();
    let min=myTime.getMinutes();
    let sec=myTime.getSeconds();
    let session=document.getElementById("sessions");

    document.getElementById("hours").innerHTML= hrs;
    document.getElementById("minutes").innerHTML= min;
    document.getElementById("seconds").innerHTML = sec;
}
setInterval(time);