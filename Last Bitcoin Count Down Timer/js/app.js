const endDate = "2140"

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")

function clock () {
    const end = new Date(endDate);
    const now = new Date();
    //console.log("end =  ", end, "now = ", now);
    const currentTimeDifferenceInDays = (end - now)/1000;
    console.log(currentTimeDifferenceInDays);
    inputs[0].value = Math.floor(currentTimeDifferenceInDays/60/60/24/30.4375/12/100);
    inputs[1].value = Math.floor((currentTimeDifferenceInDays/60/60/24/30.4375/12)%100);
    inputs[2].value = Math.floor((currentTimeDifferenceInDays/60/60/24/30.4375)%12);
    inputs[3].value = Math.floor((currentTimeDifferenceInDays/60/60/24)%30.4375);

}

clock();

