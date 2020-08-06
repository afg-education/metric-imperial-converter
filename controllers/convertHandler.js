/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    
    //find number and unit from query
    var findUnitRegex = /([a-z]|[A-Z])/;
    let test = input.match(findUnitRegex);
    result = input.slice(0,test.index);
    console.log(result);
    
    if(result == "") {
      return 1;
    }
    
    //return invalid if query is not starting with a number
    var startRegex = /^[0-9]/;
    //console.log(startRegex.test(input));
    if(!startRegex.test(result)) {
      return null;
    }
    
    
    
    //find how many fraction ('/') character are there in the number part
    let numberOfFraction = result.split('/').length - 1;
    //console.log(result);
    //console.log(numberOfFraction);
        
    //console.log("before eval : " + result);
    result = eval(result);
    //console.log("after eval : " + result);
    
    if(typeof(result) !== "number" || numberOfFraction > 1) {
      //console.log("invalid")
      return null;
    }
    
    //console.log("end of func");
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    //find number and unit from query
    var findUnitRegex = /([a-z]|[A-Z])/;
    let test = input.match(findUnitRegex)
    result = input.slice(test.index).trim().toLowerCase();
    //console.log(result)
    
    if(result == "gal" || result == "l" || result == "lbs" || result == "kg" || result == "mi" || result == "km") {
      return result;
    }
    
    return null;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit.toLowerCase()) {
      case "gal":
        return "l";
      case "l":
        return "gal";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
      case "mi":
        return "km";
      case "km":
        return "mi";
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    switch(unit) {
      case "gal":
        return "galons";
      case "l":
        return "liters";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
    }
    
    return "result";
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch(initUnit.toLowerCase()) {
      case "gal":
        return initNum * galToL;
      case "l":
        return initNum / galToL;
      case "lbs":
        return initNum * lbsToKg;
      case "kg":
        return initNum / lbsToKg;
      case "mi":
        return initNum * miToKm;
      case "km":
        return initNum / miToKm;
    }
    
    return "result";
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
