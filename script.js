function live(){
    let ctime=new Date();
    let hrs=ctime.getHours();
    let mins=ctime.getMinutes();
    let sec=ctime.getSeconds();
    if (hrs<10) {
        hrs="0"+hrs;
    }
    if (mins<10) {
        mins="0"+mins;
    }
    if (sec<10) {
        sec="0"+sec;
    }
    let tt=hrs+":"+mins+":"+sec+" ";
    if(hrs>11)
    {
        tt+="PM"
    }
    else
    tt+="AM";
    let b=document.getElementById("time-live").innerHTML=tt;
}

setInterval(live,1000);