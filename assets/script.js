function GetInfo(){
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = ""+newName.value+""


fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=c0bed8ddceda23d6417503449293a1dd")
.then(response => response.json())
.then(data => {
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)+ "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min -284.77).toFixed(1)+ "°";
    }
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)+ "Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max -284.77).toFixed(1)+ "°";
    }
    for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png";
    }
})

.catch(err => alert("SOMETHING WENT WRONG! CHECK CONNECTION"))
}

function defaultScreen(){
    document.getElementById("cityInput").defaultValue = "Austin";
    GetInfo();
}

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }
    





