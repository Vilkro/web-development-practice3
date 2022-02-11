function bodySomething(weight, height){
    var bmi = weight / Math.pow(height, 2);
    if(bmi < 18.5){ return "Your BMI is " + bmi + ", so you are underweight." }
    else if(bmi > 24.9){ return "Your BMI is " + bmi + ", so you are overwight" }
    else return "Your BMI is " + bmi + ", so you have a normal weight."
}
bodySomething(80, 1.93);