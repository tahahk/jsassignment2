/*Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
the following dropdown/select menu in your browser using
document.write() method:*/

var mobile = [ "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
document.write("<select>"+ "<option>"+ mobile[0]+"</option>" + 
"<option>"+ mobile[1]+"</option>" + "<option>"+ mobile[2]+"</option>" + 
"<option>"+ mobile[3]+"</option>" + "<option>"+ mobile[4]+"</option>" +"</select>");
