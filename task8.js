function fibonacciGenerator(n){
    var a = [0, 1];
    for (var i = 0; i < 60; i++){
        a[i+2] = a[i] + a[i+1];
    }
    var s = [];
    for (var i = 0; i < n; i++){
        s[i] = a[i];
    }
    return s;
}
fibonacciGenerator(5);