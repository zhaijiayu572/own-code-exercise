const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.on('line',(input)=>{
    let key = parseInt(input);
    let arr = [2,3,4,6,9,10,22];
    console.log(half_find(arr,key),'half_find');
})
// 二分查找
function half_find(arr,key){
    let low = 0;
    let high = arr.length-1;
    while (low <= high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] == key){
            return 'find';
        }else if(key > arr[mid]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
        console.log(mid);
    }
    return 'not find'
}