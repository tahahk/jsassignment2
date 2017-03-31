/*18. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In-First
Out)*/



var array = [];
array[0] = ["Keyboard"];
array[1] = ["Mouse"];
array[2] = ["Printer"];
array[3] = ["Monitor"];

document.write("<br/>Devices: </br>"+ array +"<br/>");
document.write("<br/>Out: <br/>"+array.pop());
document.write("<br/>Out: <br/>"+array.pop());
document.write("<br/>Out: <br/>"+array.pop());
document.write("<br/>Out: <br/>"+array.pop());