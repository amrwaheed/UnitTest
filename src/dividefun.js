// function divideFun(num1, num2) {
//         if(num2 === 0 && num1 !==0) return "Not Allowed";
//         if(num1 === 0 && num2 !==0) return "Not Allowed";
//         if(num1 === 0 && num2 ===0) return "Not Allowed";
//         return num1 / num2;
// }



function Calculate() {
}
Calculate.prototype.divideFun = function(num1,num2) {
  this.num1 = num1;
  this.num2 = num2;
    if(num2 === 0 && num1 !==0) return "Not Allowed";
    if(num1 === 0 && num2 !==0) return "Not Allowed";
    if(num1 === 0 && num2 ===0) return "Not Allowed";
    return num1 / num2;
};

Calculate.prototype.sumFun = function(num1,num2) {
this.num1 = num1;
this.num2 = num2;
    
    return num1 + num2;
};

Calculate.prototype.subFun = function(num1,num2) {
this.num1 = num1;
this.num2 = num2;
    
    return num1 - num2;
};


Calculate.prototype.multFun = function(num1,num2) {
this.num1 = num1;
this.num2 = num2;
    if(num1  === 0 || num2 === 0){return "Not Allowed"}
    if(num1  < 0 || num2 < 0){return "Not Allowed"}
    return num1 * num2;
};

/**-------------------------------------------------- */

function Login(userName, Password) {

    if(Object.prototype.toString.call(userName) === "[object String]" && Object.prototype.toString.call(Password) === "[object String]"){
        if(String.prototype.toString.call(userName).length >= 9 && String.prototype.toString.call(Password).length >= 9 ){
            if (userName && Password === "amrwaheed") {return true;}else{return false}
    }else{return false;}
    }else{return false}
}


/**------------------------------------ */
 function powerfunction(a,b) {
    if (a && b === "Zero" ) { return "Positive";}
    if (a === "Zero" && b === "Positive") {return "Positive";}
    if (a === "Zero" && b === "negative") {return "Negative";}
    if (a === "negative" && b === "positive") {return "negative";}
    if (a === "negative" && b === "zero") {return "negative";}
 }

/**------------------------------------ */
function squrtfunction(a) {
    if(a < 0) return "illegal negative input";
    if( a >= 0 ) return Math.sqrt(a);

   
 }
