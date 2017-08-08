function isMerge(s,part1,part2){
    let sArr = s.split('');
    let part1Arr = part1.split('');
    let part2Arr = part2.split('');
    let flag = true;    // true表示是由两个部分组成的
    for(let i=0;i<sArr.length;i++){
        if (part1Arr.includes(sArr[i])){
            continue;
        }else if (part2Arr.includes(sArr[i])){
            continue;
        }else{
            flag = false;
        }
    }
    flag?console.log('是由两部分组成的'):console.log('不是由两部分组成的');
}
var str = 'abcde';
var part1 = 'ab';
var part2 = 'ed';
isMerge(str,part1,part2);