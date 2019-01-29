function produceDrivingRange(blockRange) {
  return function(startString, endString) {
    const start = parseInt(startString);
    const end = parseInt(endString);

    const distance = Math.abs(start - end);
    const difference = blockRange - distance;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}


// testing:

const tenBlockRange = produceDrivingRange(10);
tenBlockRange('10th', '15th');
// => "within range by 5"
tenBlockRange('10th', '24th');
// => "4 blocks out of range"


function produceTipCalculator(percentTip) {
  return function(total) {
    return total * percentTip;
  }
}

//testing:

const fifteenPercentTip = produceTipCalculator(.15);
fifteenPercentTip(40)
// => 6


function createDriver() {
  let DriverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId
    }
  }
}

// testing:

const Driver = createDriver();
let sarah = new Driver("Sarah");
sarah
// => {name: "Sarah", id: 1}
