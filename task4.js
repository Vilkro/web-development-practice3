function retirement(n){
    var x, y, z;
	var g = 90 - n;
    x = g * 365;
    y = g * 52;
    z = g * 12;
    console.log("You have " + x + " days, " + y + " weeks, and " + z + " months left.");
}
retirement(56);