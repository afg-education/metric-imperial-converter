/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';
var helmet = require("helmet");
var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  app.use(helmet());
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      
      var validation = 0;
    //console.log("0 : " + validation);
    
      //console.log(initNum);
      if(initNum == null) validation += 10;
    //console.log("1 : " + validation);
      if(initUnit == null) validation += 1;
    //console.log("2 : " + validation);
      
      if(validation > 0) {
        //console.log("here");
        let message = "";
        switch(validation) {
          case 1: 
            message = "invalid unit";
            break;
          case 10: 
            message = "invalid number";
            break;
          case 11: 
            message = "invalid number and unit";
            break;
        }
        //console.log(message);
        res.status(200).type("text").send(message);
      } else {
        var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      let returnObj = {
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: toString
      };
    
    console.log(returnObj)
      
      res.json(returnObj);  
      }
      
    });
    
};
