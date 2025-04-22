function getAge(x) {
    return 3;
}
var a1 = function (x) { return x; };
var a2 = function (x) { return x; };
function getAge2(p) {
    console.log("hello");
}
var b = 4;
getAge2(getAge);
