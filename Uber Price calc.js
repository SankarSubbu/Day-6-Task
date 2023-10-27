class UberPriceCalculator {
 constructor(baseRate, operatingFee, distance, duration, surgeMultiplier){
  this.baseRate = baseRate
  this.operatingFee = operatingFee
  this.distance = distance
  this.duration = duration
  this.surgeMultiplier = surgeMultiplier
 }
}

function calculatePrice(){
 const fare = this.baseRate + this.operatingFee + (this.distance * this.surgeMultiplier);
 return fare;
}

const UberPriceCalculator = new UberPriceCalculator(2.5, 1.0, 5.0, 10.0, 1.5)
const fare = UberPriceCalculator.calculatePrice()

console.log(fare)