function mapForEach(arr, fn){
    var newArray = [];
    for(var i = 0; i<arr.length;i++){
        newArray.push(
            fn(arr[i])
    );
    }
    return newArray;
}

//------------------------------------------------

var arr1 = [1,2,3,4,5,6,7,8,9];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item){
    return item * 2;
});

console.log(arr2);

//------------------------------------------------

var arr3 = mapForEach(arr2, function(item){
    return item * 2;
});

console.log(arr3);

//------------------------------------------------

var arr4 = mapForEach(arr1, function(item){
    return item > 2;
});

console.log(arr4);

//------------------------------------------------

var checkPastLimit = function(limiter, item){
    return item > limiter;
};

var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1));

console.log(arr5);

//------------------------------------------------
//ohne bind aber mit closures
var checkPastLimitVereinfacht = function(limiter){
    return function(item){
        return item > limiter;
    }
};

var arr6 = mapForEach(arr1, checkPastLimitVereinfacht(1));

console.log(arr6);

//------------------------------------------------
//Primzahl check
var isPrime = function(item){
    if(item<2){
        return false;
    }
    for(var i = 2;i<item;i++){
        if(item%i===0){
            return false;
        }
    }
    return true;
};

var arr7 = mapForEach(arr1, isPrime);

console.log(arr7);