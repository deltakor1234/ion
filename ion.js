//ion.js
/*
  분수 : fraction
  분자 : numerator
  분모 : denominator
*/

function isInt(factor){ //isInt = returns true if factor is integer, else, return false
  return (typeof factor == "number") && (factor%1 === 0) //check if typeof factor is number and factor % 1 is 0
}

function gcd(x,y){ //gcd = returns the greatest common divisor (gcd) of x,y ; if x,y isn't integer, throws gcd error
  if(isInt(x) && isInt(y)){ //check if x,y is integer
    while (y) { //calculates gcd
        var temp = x;
        x = y;
        y = temp % y;
    }
    return x //return the gcd of x,y
  } else {
    var e = new Error("Factors must be integer") //make error
    e.name = "FunctionError" //set error type
    throw e //throw error
  }
}

let Fraction = function(numerator,denominator){ //Fraction = makes Fraction
  if(denominator === 0){ //denominator must not be 0
    var e = new Error("Denominator can't be 0") //make error
    e.name = "FractionError" //set error type
    throw e //throw error
  }
  if(isInt(numerator) && isInt(denominator)){ //numerator and denominator must be integer
    this.numerator = numerator //set numerator
    this.denominator = denominator //set denominator
  } else { //if numerator or denominator isn't integer
    var e = new Error("numberator and Denominator must be integer") //make error
    e.name = "FractionError" //set error type
    throw e //throw error
  }
  return this //return fraction
}

Fraction.prototype.__defineGetter__("reduce",function(){ //Fraction.reduce = Reduces the Fraction
  var tmp = this //copy this to tmp
  var g = gcd(tmp.numerator,tmp.denominator) //set g to gcd of numerator, denominator
  tmp.numerator = tmp.numberator/g //divide numerator by gcd
  tmp.denominator = tmp.denominator/g //divide denominator by gcd
  return tmp //return result
})
