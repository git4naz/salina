
function run() {
var x = parseInt( document.querySelector("#value1").value);
var y =  parseInt( document.querySelector("#value2").value);
 
 document.getElementById("tc").innerHTML="Total Cost:"+" " + x*y;
}