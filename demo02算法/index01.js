var array  = [11,3,4,6,2,24];
var min = array[0];
var index = 1;

while ( index < 5 ) {
    if( min > array[index] ){
        min = array[index]
    }
    index += 1;
}
console.log( min );

var minB = array[0];
for ( var iii = 0; iii < array.length; iii ++ ){
    if( minB > array[iii] ){
        minB = array[iii]
    }
}
console.log( minB );

var arrayB  = [11,3];
var newArray = [];
var minC = arrayB[0];
for ( var ab = 0; ab < arrayB.length; ab ++ ){
    if( minC > arrayB[ab] ){
        minC = arrayB[ab];
    }
}
arrayB.splice( arrayB.indexOf(minC),1 );
newArray[0] = minC;
newArray[1] = arrayB[0];
console.log( newArray );