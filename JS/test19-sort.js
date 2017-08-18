const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.on('line',(input)=>{
    arr = input.split(' ');
    for(let i=0;i<arr.length;i++){
        arr[i] = parseInt(arr[i]);
    }
    console.log(bubble_sort(arr),'bubble_sort');
    console.log(merge_sort(arr), 'merge_sort');
    console.log(quick_sort(arr,0,arr.length-1), 'quick_sort');
    console.log(shell_sort(arr),'shell_sort');
    console.log(select_sort(arr), 'select_sort'); 
    console.log(insert_sort(arr), 'insert_sort'); 
    rl.close();
})
function bubble_sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[j] < arr[i]){
                let change = arr[j];
                arr[j] = arr[i];
                arr[i] = change;
            }
        }
    }
    return arr
}
function merge(left,right){
    let i=0,j=0;
    let mergeArr = [];
    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            mergeArr.push(left[i]);
            i++;
        }else{
            mergeArr.push(right[j]);
            j++;
        }
    }
    mergeArr = mergeArr.concat(left.slice(i));
    mergeArr = mergeArr.concat(right.slice(j));
    return mergeArr;
}
function merge_sort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let mid = parseInt(arr.length/2);
    let left = merge_sort(arr.slice(0,mid));
    let right = merge_sort(arr.slice(mid));
    return merge(left,right);
}
function quick_sort(arr,begin,end){
    if(begin >= end){
        return arr;
    }
    let left = begin;
    let right = end;
    let key = arr[begin];
    while(left < right){
        while(left < right && arr[right]>=key){
            right -= 1;
        }
        arr[left] = arr[right]
        while(left < right && arr[left]<=key){
            left += 1;
        }
        arr[right] = arr[left];
    }
    arr[right] = key;
    quick_sort(arr,begin,left-1);
    quick_sort(arr,left+1,end);
    return arr;
}
function shell_sort(arr){
    let step = parseInt(arr.length/2);
    while(step > 0){
        for(let i=0;i<step;i++){
            for(let j=i;j<arr.length;j+=step){
                for(let k=0;k<j;k+=step){
                    if(arr[j] < arr[k]){
                        let change = arr[j];
                        arr[j] = arr[k];
                        arr[k] = change;
                    }
                }
            }
        }
        step = parseInt(step/2);
    }
    return arr;
}
function select_sort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        let change = arr[min];
        arr[min] = arr[i];
        arr[i] = change;
    }
    return arr;
}
function insert_sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[i] < arr[j]){
                let change = arr[i];
                arr[i] = arr[j];
                arr[j] = change;
            }
        }
    }
    return arr;
}