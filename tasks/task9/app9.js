/*Declare and initialize an empty array to store top movies of
2015. Add movies one by one in an array. Display the elements
& length of array in your browser. (Use array’s length method)*/

var movies = [];
movies[0] = ("Avengers Age Of Ultron");
movies[1] = ("Spectre");
movies[2] = ("Jurrassic World");
movies[3] = ("Inside Out");
document.write("<h1>Top movies 2015</h1><br/>")
document.write("1)"+movies[0]+"<br/>2)"+movies[1]+"<br/>3)"+movies[2]+"<br/>4)"+movies[3]);
document.write("<h1>Length Of The Array: ",movies.length+"</h1>")