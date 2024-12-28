function print(name, occupation, wage) {
    var output;
    output = "Hey, ".concat(name, ". You are an ").concat(occupation, " and your hourly wage is ").concat(wage, " dollars.");
    return output;
}
console.log(print("Sam", "Engineer", 25));
