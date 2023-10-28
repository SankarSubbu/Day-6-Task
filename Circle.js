class Circle {
 constructor(radius = 1.0, color = "red") {
  this.radius = radius;
  this.color = color;
 }

 getRadius() {
  return this.radius;
 }

 setRadius(radius) {
  this.radius = radius;
 }

 getColor() {
  return this.color;
 }

 setColor(color) {
  this.color = color;
 }

 toString() {
  return `Circle[radius=${this.radius}, color=${this.color}]`;
 }

 getArea() {
  return Math.PI * this.radius * this.radius;
 }

 getCircumference() {
  return 2 * Math.PI * this.radius;
 }
}

const circle = new Circle(2.0, "blue");

const radius = circle.getRadius();
const color = circle.getColor();

circle.setRadius(3.0);
circle.setColor("green");

const stringRepresentation = circle.toString();

const area = circle.getArea();
const circumference = circle.getCircumference();
