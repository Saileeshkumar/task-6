class UberPriceCalculator {
  constructor(distance, time, peakMultiplier = 1) {
    this.distance = distance;
    this.time = time;
    this.peakMultiplier = peakMultiplier;
  }

  calculateFare(baseFarePerKm, farePerMinute) {
    const baseFare = baseFarePerKm * this.distance;
    const timeFare = farePerMinute * this.time;
    const totalFare = (baseFare + timeFare) * this.peakMultiplier;
    return totalFare;
  }
}

//usage:
const calculator = new UberPriceCalculator(10, 20, 1.5);
const fare = calculator.calculateFare(5, 0.5);
console.log("Total fare:", fare.toFixed(2), "dollars");
