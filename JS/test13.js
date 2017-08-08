function find(n){
    let arr = ['s','l','p','r','h'];
    let count = 0;
    while(count !=n){
        count++;
        let now = arr.shift();
        arr.push(now);
        arr.push(now);
    }
    return arr[0];
}
console.log(find(1));