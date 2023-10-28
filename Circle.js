class Circle {
 constructor(radius = 1.0, color = "red") {
  this.radius = radius
  this.color = color
 }
 getRadius() {
  return this.radius
 }

 setRadius(radius) {
  this.radius = radius
 }

 getColor() {
  this.color = this.color
 }

 setColor(color) {
  this.color = color
 }

 toString() {
  return `Radius: ${this.radius} & Color: ${this.color}`
 }

 getArea() {
  return Math.PI * this.radius * this.radius
 }

 getCircumference() {
  return 2 * Math.PI * this.radius
 }
}

const circle = new Circle(2.0, "blue")
const radius = new circle.getRadius()
const color = new circle.getColor()
console.log(circle)
console.log(radius)
console.log(color)

circle.setRadius(3.0)
circle.setColor("red")

const stringRepresentation = circle.toString()
console.log(stringRepresentation)

const area = circle.getArea()
const circumference = circle.getCircumference()
console.log(area)
console.log(circumference)
