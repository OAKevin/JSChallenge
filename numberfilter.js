var numbers = [ 0, -1, -2, 10, -0.25];
console.log(numbers);
numbers = numbers.filter(
    function(x){
        return x > 0
}
);
console.log(numbers)