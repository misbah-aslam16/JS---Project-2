function RamadanCounter(){
    
    var myDate = new Date();
    var curr = myDate.getTime();
    
    
    var ramadan = new Date("February 28, 2025"); 
    var nextRamadan = ramadan.getTime();
    
    var differenceInMonth = nextRamadan - curr;
    var differenceInDays = differenceInMonth / (1000 * 60 * 60 * 24) ;
    var hours = (differenceInDays - Math.floor(differenceInDays) ) * 24; 
    var minutes = (hours - Math.floor(hours) ) * 60;
    var seconds = (minutes - Math.floor(minutes) ) * 60;
    
    var day =  document.getElementById('days');
    day.innerHTML = "<h1>" + Math.floor(differenceInDays) + "</h1>";
    
    var hour = document.getElementById('hours');
    hour.innerHTML = "<h1>" + Math.floor(hours) + "</h1>";
    
    var minute = document.getElementById('minutes');
    minute.innerHTML = "<h1>" + Math.floor(minutes) + "</h1>";
    
    var second = document.getElementById('seconds');
    second.innerHTML = "<h1>" + Math.floor(seconds) + "</h1>";
    }
    
    setInterval('RamadanCounter()', 1000);
    RamadanCounter();