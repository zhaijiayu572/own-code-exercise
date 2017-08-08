var arr = [[1,2,3],[4,5,6],[6,7,8]];
var keyword = 4;
function find(arr,keyword){
    for(var i=0;i<arr.length;i++){
        var blockKey = arr[i][arr[i].length-1];
        if(blockKey<keyword){
            continue;
        }else if(blockKey>keyword){
            for(var j=0;j<arr[i].length;j++){
                if(arr[i][j]==keyword){
                    return 'success';
                }
            }
            return 'fail';
        }else{
            return 'success';
        }
    }

}
console.log(find(arr,keyword));