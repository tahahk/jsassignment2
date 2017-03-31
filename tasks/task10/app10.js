/*10. Declare and Initialize an array with your favorite cars. Show
a. First index of the array
b. Car at first index of the array
c. Last index of the array
d. Car at last index of the array*/

var car=[];
car.push("Geely")   
car.push("Audi")
car.push("Volvo")
car.push("Lamborghiny")
document.write("<h1>Favorite Cars</h1><br/>"+car+"<br>");
document.write("First index of Array: 0");
document.write("<br>Car at first index of the array:",car[0]);
document.write("<br/>Last index of the array:",(car.length-1));
document.write("<br/>Car at last index of the array:",car[3]);
