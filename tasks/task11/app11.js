/*11. Write a program to store 3 student names in an array. Take
another array to store score of these three students. Assume
that total marks are 500 for each student, display the scores &
percentages of students like:*/

var students = ["Michael","john","tony"];
var marks=[320,230,480];
ttl=500;

document.write("Score Of "+students[0]+" is " + marks[0]+" and percentage is "+(marks[0]/ttl)*100);
document.write("<br/>Score Of "+students[1]+" is " + marks[1]+" and percentage is "+(marks[1]/ttl)*100);
document.write("<br/>Score Of "+students[2]+" is " + marks[2]+" and percentage is "+(marks[2]/ttl)*100);

