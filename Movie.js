// 1.a)Write a constructor for the class Movie, which takes a string representing the title of the movie
// a string represnting the studio, and a string representing the rating as its arguements, and sets the
// respective class properties to these values.

class movie {
 constructor(title, studio, rating) {
  this.title = title
  this.studio = studio
  this.rating = rating
 }

 getRating() {
  return "the rating is " + this.rating
 }
}

// b) The constructor for the class Movie will set class property rating to "PG" as default when no rating is provided.
class Movie {
 constructor(Title, Studio, Rating) {
  this.Title = Title
  this.Studio = Studio
  this.Rating = "PG"
 }
}

// c) Write a method getPG which takes an array of base type Movie as its arguement, and returns a new array of only those 
// movies in the input array with a rating of "PG". You may assume the input is array is full of Movie instances. The returned 
// array need not be full.

function getPG(movies) {
 const pgMovies = []
 for (const movie of movies) {
  if (movie.rating === "PG") {
   pgMovies.push(movie)
  }
 }
 return pgMovies
}

// d) Write a piece of code creates an instance of the class Movie with the title "Casino Royale",
// the studio "Eon Productions", and the rating "PG13"

const casinoRoyale = new movie("Casino Royale", "Eon Productions", "PG13")