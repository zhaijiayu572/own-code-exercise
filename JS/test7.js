var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    var tokens = line.split(' ');
    console.log(add(tokens[0],tokens[1]));

    rl.close();
});
function add(a,b){
    return a+b;
}