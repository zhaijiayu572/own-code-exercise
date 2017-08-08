var color = 'green';
var test = {
    color: 'blue',
    testFun() {
        var color = 'red';
        console.log(this.color);
    }
}
var mytest = test.testFun;
mytest();
test.testFun();