const produceDrivingRange = function(blockRange){
  return function(start, end){
    let s = parseInt(start);
    let e = parseInt(end);
    let distance = Math.abs(s - e);
    let diff = blockRange - distance;

    if (diff > 0){
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}

const produceTipCalculator = function(percentage){
  return function(rideFare){
    return rideFare * percentage
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
