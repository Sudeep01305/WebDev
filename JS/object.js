/*
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); 
console.log(house2.rooms);
*/
/*
var car = {};
car["color"] = "green";
car.color = "red";
car["speed"] = 200;
car.speed = 100;
car["number of doors"] = 4;
car["2022"] = 1901;
console.log(car); 
*/
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}
