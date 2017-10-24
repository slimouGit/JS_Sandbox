var arr1 = [1,2,3,4,5,6,7,8,9];
console.log(arr1);

var arr8 = _.map(arr1, function(item){
    return item * 3;
});

console.log(arr8);

var arr9 = _.filter([2,3,4,5,6,7], function(item){
    return item%2 === 0;
});

console.log(arr9);
