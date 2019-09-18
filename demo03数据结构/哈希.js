var arrayStr = {
    "0":0,
    "1":2,
    "2":4,
    "3":56,
    "4":-3,
    "5":67,
    "6":4,
    "7":4,
    "length":8
}

var arrayHash = {};

var index = 0;

var number;

while(index < arrayStr["length"] ){
    number = arrayStr[index];
    index++;
    if(arrayHash[number] === undefined){
        arrayHash[number] = 1;
    } else {
        arrayHash[number] = arrayHash[number]+1
    }
}

console.log( arrayHash );

console.log( arrayHash[-3] );

var index2 = 0;

var maxStr;

while(index2 < arrayStr["length"] ){
    if( maxStr <= arrayStr[index2] || maxStr === undefined){
        maxStr = arrayStr[index2];
    }
    index2++;
}

console.log( maxStr );

var maxStr2;

for(var key in arrayHash){  
    if( maxStr2 <= Number(key) || maxStr2 ==undefined ){
        maxStr2 = Number(key)
    }
}

console.log( maxStr2 );