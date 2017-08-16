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
    console.log(quick_sort(arr,0,arr.length-1),'quick-sort');
    console.log(select_sort(arr),'select-sort');
    console.log(insert_sort(arr),'insert-sort');
    console.log(shell_sort(arr),'shell-sort');
    console.log(merge_sort(arr), 'merge-sort');
})
// 冒泡排序
function bubble_sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[i]){
                let change = arr[i];
                arr[i] = arr[j];
                arr[j] = change;
            }
        }
    }
    return arr
}
// 快速排序
function quick_sort(arr,begin,end){
    if(begin >= end){
        return arr;
    }
    let left = begin;
    let right = end;
    let key = arr[begin];
    while (left < right){
        while(left< right && arr[right] >=key){
            right -= 1;
        }
        arr[left] = arr[right];
        while(left < right && arr[left] <= key){
            left += 1;
        }
        arr[right] = arr[left]; 
    }
    arr[left] = key;
    quick_sort(arr,begin,left-1);
    quick_sort(arr,left+1,end);
    return arr;
}
// 选择排序
function select_sort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i;j<arr.length;j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        let change = arr[i];
        arr[i] = arr[min];
        arr[min] = change;
    }
    return arr;
}
// 插入排序
function insert_sort(arr){
    for(let i=0;i<arr.length;i++){
        let key = arr[i];
        for(let j=0;j<i;j++){
            if(arr[i]<arr[j]){
                let change = arr[j];
                arr[j] = arr[i];
                arr[i] = change;
            }
        }
    }
    return arr;
}
// 希尔排序
function shell_sort(arr){
    let step = parseInt(arr.length/2);
    while (step > 0){
        for(let i=0;i<step;i++){
            let next_group_num = i + step;
            while (next_group_num < arr.length){
                for (let j = 0; j < next_group_num; j += step) {
                    if (arr[next_group_num] < arr[j]) {
                        let change = arr[j];
                        arr[j] = arr[next_group_num];
                        arr[next_group_num] = change;
                    }
                }
                next_group_num += step
            }
            
        }
        step = parseInt(step/2);
    }
    return arr;
}
// 归并排序
function merge(left,right){
    let i=0,j=0;
    var merge_arr = [];
    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            merge_arr.push(left[i]);
            i ++;
        }else{
            merge_arr.push(right[j]);
            j++;
        }
    
    }
    merge_arr = merge_arr.concat(left.slice(i));
    merge_arr = merge_arr.concat(right.slice(j));
    return merge_arr;
}

function merge_sort(arr){
    if(arr.length <= 1){
        return arr;
    }
    var mid = parseInt(arr.length/2);
    var left_arr = arr.slice(0,mid);
    var right_arr = arr.slice(mid);
    var left = merge_sort(left_arr);
    var right = merge_sort(right_arr);
    return merge(left,right);
}
