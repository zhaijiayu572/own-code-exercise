var object = {
    b: { c: 4 }, d: [{ e: 5 }, { e: 6 }]
};
var rs;
function parse(obj, str) {
    var reg = /[\[\]\.]+/;
    var arr = str.split(reg);

    for (var prop in obj) {
        if (prop == arr[0]) {
            obj = obj[arr[0]];
            arr.splice(0, 1);
            if (arr.length == 1) {
                rs = obj[arr[0]];
            } else {
                parse(obj, arr.join('.'));
            }

        } else if (arr.lentgh == 0) {
            return 'undefined';
        }
    }
    return rs;
}
console.log(parse(object, 'b.c'));