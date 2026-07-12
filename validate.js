// Created by user on 6/8/2026, 7:57:02 PM
// Last modified by user on 6/8/2026, 9:59:17 PM
//alert("hi!");
function isNumber(valueToCheck){
    return !isNaN(valueToCheck);
}
window.onload = function(){
    var numberField = document.getElementById("myForm").numberField;//.element[0];
    var textField = document.getElementById("myForm").textField;//.element[0];
    var submit = document.getElementById("myForm").submit;
    var info = document.getElementById("info");

    var i = 0;
    var isEveryThingOk = true;
    numberField.onkeyup = function (e) {
        if (!isNumber(this.value)){
        //if (!isNumber(String.fromCharCode(e.which)) && e.which !== 0 && e.which !== 190){
            info.innerHTML = "Please, type a number";
            this.style.backgroundColor = "red";
            isEveryThingOk = false;
            //e.preventDefault();
        } 
        else {
            info.innerHTML = " ";
            this.style.backgroundColor = "green";
            isEveryThingOk = true;
        }
    }
};