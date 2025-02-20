function processNumbers(a,b,anonymous)
{
         return anonymous(a,b)
        
}
var anonymous=function(x,y)
{
    return x+y
}

var result=processNumbers(3,4,anonymous)
console.log("Sum: ",result)

function greet(callback)
{
    return callback("Alice")
}
var result=greet(function(name)
{
    return "Hello, "+name+"!"
})
console.log(result)

function calculate(a,b,callback)
{
    return callback(a,b)
}
var result=calculate(10,5,function(x,y)
{
    return x-y
})
console.log("Difference: ",result)
