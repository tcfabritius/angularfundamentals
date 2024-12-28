function print (name:string, occupation:string, wage:number):string{
    let output:string;
    output = `Hey, ${name}. You are an ${occupation} and your hourly wage is ${wage} dollars.`;
    return output;
}
console.log(print("Sam", "Engineer", 25));