function arrayBuilder(one, two, three , four) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    arr.pop();
    arr.push(four)
    console.log(arr);
}
var one="apple";
var two="mango";
var three="pear";
var four="its a pop";

arrayBuilder(one, two, three, four);

