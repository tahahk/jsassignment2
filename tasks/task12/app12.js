/*Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end &
add that color to the end of the array. Display the updated
array in your browser.
c. Add two more color to the beginning of the array. Display
the updated array in your browser.

d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color &
color name. Then add the color to desired position/index.
. Display the updated array in your browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.*/


var color = ["Red","Green","Blue","Pink"]; //initializing an array
alert(color);
/*a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.*/

color.unshift(prompt("Enter a color to add to the begining","e.g: Yellow" ));
alert("updated colors: "+ color);

/*b. Ask the user what color he/she wants to add to the end &
add that color to the end of the array. Display the updated
array in your browser.*/

color.push(prompt("Enter a color to add to the end ","e.g: Purple" ));
alert("updated colors: "+ color);

/*c. Add two more color to the beginning of the array. Display
the updated array in your browser.d. Delete the first color in the array. Display the updated
array in your browser.*/

color.unshift("Cyan","Maroon");
alert("updated colors: "+ color);

/*d. Delete the first color in the array. Display the updated
array in your browser.*/

color.shift();
alert("updated colors: "+ color);

/*e. Delete the last color in the array. Display the updated
array in your browser.*/

color.pop();
alert("updated colors: "+ color);

/*f. Ask the user at which index he/she wants to add a color &
color name. Then add the color to desired position/index.*/

var i = +prompt("Enter a index number at which you want to add a color", "0-6"); // i is taken as index number
var name = prompt("Enter a color name to add on that index", "e.g: Orange");
color.splice(i,0,name);
alert("updated colors: " + color);

/*g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.*/

var d = +prompt("Enter a index number from which you want to delete color(s)", "1-7");
var e = +prompt("Enter how many colors do you want to delete from that index" , "0-7");
color.splice(d,e);
alert("updated colors: " + color);