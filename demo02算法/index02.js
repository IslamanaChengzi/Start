{
    var array  = [11,3,33,4,6,2,24];
    var newstr =array[0];   
    for ( var iii = 0; iii < array.length; iii ++ ){
        if( newstr < array[iii] ){
            newstr = array[iii]
        }
    }
    console.log( newstr );
}

{
    var array  = [33,11,3,4,6,2,24];
    var newArray = [];
    for ( var iii = 0; iii < array.length; iii ++ ){
        for ( var inStr = 0; inStr < array.length - 1 - iii; inStr ++ ){
            if( array[inStr] < array[inStr+1] ){
                array[inStr] = array[inStr] +  array[inStr+1];
                array[inStr+1] = array[inStr] - array[inStr+1];
                array[inStr] = array[inStr] - array[inStr+1];
            }
        }
    }
    console.log( array );
}

function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    console.time('选择排序耗时');
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.timeEnd('选择排序耗时');
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]