Array.prototype.filter = function (){
    let filterArr = [];
    for(let i=0;i<this.length;i++){
        if(filterArr.length==0){
            filterArr.push(this[i]);
        }else{
            if(filterArr.includes(this[i])){
                continue;
            }else{
                filterArr.push(this[i]);
            }
        }
    }
    return filterArr;
}
var arr = [1,2,3,4,4,5,6,2,3,4,1];
console.log(arr.filter(arr));