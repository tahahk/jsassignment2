/*15. Write a program to initialize an array with city names. Copy
3 array elements from cities array to selectedCities array.*/

var cities = ["Islamabad","Lahore","Karachi","Quetta","Peshawar"];
document.write("<h1>Cities: </h1><br/>"+ cities)
var selectedCities = cities.slice(2,4);
document.write("<h1><br/>Selected Cities: </h1><br/>"+ selectedCities)
