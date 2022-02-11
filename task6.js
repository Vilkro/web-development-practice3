function isLeap(year){
    var leap = new Boolean(0);
    if(year%4==0){
        if(year%100==0 && year%400==0) leap = 1;
    }
    else leap = 0;
    if(leap) return "Leap Year.";
    else return "Not Leap Year.";
}
isLeap(2022);