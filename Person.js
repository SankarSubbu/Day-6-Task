class Person {
 constructor(name, age, mailid, phoneNumber, degree, skills, languagesKnown){
  this.name = name
  this.age = age
  this.mailid = mailid
  this.phoneNumber = phoneNumber
  this.degree = degree
  this.skills = skills
  this.languagesKnown = languagesKnown
 }
}

const Name = new Person("Sankar", 21, "sankar@gmail.com", 9003575842, "B.Sc CT", "Leadership", "English and Tamil")
console.log(Name)