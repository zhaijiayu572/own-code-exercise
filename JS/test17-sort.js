const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// 选择排序   从未排序的数组里面选一个最大或最小的将它放在首位，游标向后移动
function selectSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        // 从后面序列中挑选出最小的，放在前面序列的队尾
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

// 插入排序 在每次插入数据的时候都进行一次排序，使得前面的序列保持有序
function insert_sort(arr){
    for(let i=0;i<arr.length;i++){
        // 对前序列进行遍历，对比当前要插入的值大的进行替换
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
// 快速排序   最左边设置为中枢，则要从右边开始
function quick_sort(arr,begin,end){
    console.log(arr);
    var left = begin;
    var right = end;
    if(left >= right){
        return arr;
    }
    let key = arr[left];
    while(left < right){
        while (left < right && arr[right] >= key) {
            right -= 1;
        }
        arr[left] = arr[right];
        while(left<right && arr[left]<=key){
            left += 1;
        }
        arr[right] = arr[left];
       
    }
    arr[left] = key;
    quick_sort(arr,begin,left-1);
    quick_sort(arr,left+1,end);
    return arr;
}
// 归并排序
function merge(left,right){
    var result = [];
    var i=0,j = 0;
    var left_len = left.length;
    var right_len = right.length
    while(i<left_len&& j<right_len){
        if(left[i]<=right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    result = result.concat(left.slice(i));
    result = result.concat(right.slice(j));
    return result;
}
function merge_sort(arr){
    if(arr.length <=1){
        return arr;
    }
    var mid = parseInt(arr.length / 2);
    var left = arr.slice(0,mid);
    var right = arr.slice(mid);
    var left_arr = merge_sort(left);
    var right_arr = merge_sort(right);
    return merge(left_arr,right_arr);
}
// 冒泡排序
function bubble_sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                let change = arr[j];
                arr[j] = arr[i];
                arr[i] = change;
            }
        }
    }
    return arr;
}
// shell排序
function shell_sort(arr){
    let length = arr.length;
    let step = parseInt(length / 2);
    while (step > 0){
        for(let i=0;i<step;i++){
            let next_group_mem = i+step;
            while(next_group_mem<length){
                let last_group_mem = next_group_mem - step;
                // 插入排序
                for(let j=i;j<next_group_mem;j+=step){
                    if (arr[next_group_mem] < arr[j]) {
                        let change = arr[next_group_mem];
                        arr[next_group_mem] = arr[j];
                        arr[j] = change;
                    }
                }
                
                // while(last_group_mem >=0){
                //     if(arr[next_group_mem]<arr[last_group_mem]){
                //         let change = arr[next_group_mem];
                //         arr[next_group_mem] = arr[last_group_mem];
                //         arr[last_group_mem] = change;
                //     }
                //     last_group_mem -= step;

                // }
                next_group_mem += step;
            }
        }
        step = parseInt(step/2);
    }
    return arr;
}
rl.on('line',(input)=>{
    let arr = input.split(' ');
    for(let i=0;i<arr.length;i++){
        arr[i] = parseInt(arr[i]);
    }
    console.log(merge_sort(arr));
});