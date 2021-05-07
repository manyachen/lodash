const _ = {
  clamp (number, lower, upper) {
    var lowerClampedValue = Math.max(number, lower);  
    var clampedValue = Math.min(lowerClampedValue, upper);  
    return clampedValue;
  },
  inRange (number, start, end){
    if (end === undefined)
    {
      end = start;
      start = 0;
    }
    if (start > end)
    {
      var temp = end;
      end = start;
      start = temp;
    }
    var isInRange = start<= number && number < end;
    return isInRange;
  },
  words(string){
    var words = string.split(' ');
    return words;
  },
  pad(string, length){
    if(string.length >=length) return string;
    
    var startPaddingLength = Math.floor((length - string.length)/2);
    var endPaddingLength = length - string.length - startPaddingLength;
    var paddedString = ' '.repeat(startPaddingLength) + string +' '.repeat(endPaddingLength)
        return paddedString;
  },
  has(object, key){
    var hasValue = object[key] != undefined;
    return hasValue;
  },
  invert(object)
  {
    var invertedObject = {};
    for (let key in object){
      var orginalValue = object[key];
      invertedObject = {originalValue:key};
    }
    return invertedObject;
  },
  findKey(object, predicate){
    for ( let key in object){
      var value = object[key];
      var predicateReturnValue = predicate(value);
      if(predicateReturnValue) 
        return key;
    }
    return undefined;
  },
  drop(array,n)
  {
    if(n===undefined) n = 1;
    return array.slice(n);
  },
  dropWhile(array,predicate)
  {
    const cb = (element, index) =>{
      return !predicate(element, index, array);
    }
    var dropNumber = array.findIndex(cb);
    var dropArray = this.drop(array, dropNumber);
    return dropArray;
  }
  
};




// Do not write or modify code below this line.
module.exports = _;