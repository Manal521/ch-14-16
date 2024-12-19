//QUESTION NO:1
// let stdName = [];

//QUESTION NO:2
// let stdName = [];

//QUESTION NO:3
// let stdName = ["Manal", "Urooj", "Sawaira", "Warda"];
// console.log(stdName["3"]);

//QUESTION NO:4
// let stdName = ["1", "2", "3", "4"];
// console.log(stdName["0"]);


//QUESTION NO:5
// let stdName = [true,false,true,false];
// console.log(stdName["0"]);


//QUESTION NO:6
// let stdName = [true,"Manal","4",false];
// console.log(stdName["0"]);

//QUESTION NO:7
// let educAtion = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h1>Qualification</h1>");
// document.write(educAtion[0] + "<br>");
// document.write(educAtion[1] + "<br>");
// document.write(educAtion[2] + "<br>");
// document.write(educAtion[3] + "<br>");
// document.write(educAtion[4] + "<br>");
// document.write(educAtion[5] + "<br>");
// document.write(educAtion[6] + "<br>");
// document.write(educAtion[7] + "<br>");

//QUESTION NO:8

// let studentNames = ["Manal", "Urooj", "Komal"];
// let studentScores = [450, 400, 475];

// let totalMarks = 500;

// let percentage1 = (studentScores[0] / totalMarks) * 100;
// document.write(
//     "<p>" + studentNames[0] + " scored " + studentScores[0] + " out of " + totalMarks + " with a percentage of " + percentage1.toFixed(2) + "%</p>");

// let percentage2 = (studentScores[1] / totalMarks) * 100;
// document.write(
//     "<p>" + studentNames[1] + " scored " + studentScores[1] + " out of " + totalMarks + " with a percentage of " + percentage2.toFixed(2) + "%</p>");

// let percentage3 = (studentScores[2] / totalMarks) * 100;
// document.write(
//     "<p>" + studentNames[2] + " scored " + studentScores[2] + " out of " + totalMarks + " with a percentage of " + percentage3.toFixed(2) + "%</p>");

//QUESTION NO:9

// let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
// console.log("Original Array: " + colors.join(", "));


// let colorToAddStart = prompt("What color do you want to add at the starting of the array?");
// colors.unshift(colorToAddStart);
// console.log("Starting color: " + colors.join(", "));


// let colorToAddEnd = prompt("What color do you want to add at the end of the array?");
// colors.push(colorToAddEnd);
// console.log("End colors: " + colors.join(", "));


// colors.unshift("Orange", "Pink");
// console.log("Updated Array after adding two colors at the starting: " + colors.join(", "));


// colors.shift();
// console.log("Updated Array after deleting the first color: " + colors.join(", "));


// colors.pop();
// console.log("Updated Array after deleting the last color: " + colors.join(", "));


// let indexToAdd = prompt("At which index do you want to add a color?");
// let colorToAddIndex = prompt("What color do you want to add?");
// indexToAdd = parseInt(indexToAdd);
// colors.splice(indexToAdd, 0, colorToAddIndex);
// console.log("Updated Array after adding color at index " + indexToAdd + ": " + colors.join(", "));


// let indexToDelete = prompt("At which index do you want to delete color(s)?");
// let numOfColorsToDelete = prompt("How many colors do you want to delete?");
// indexToDelete = parseInt(indexToDelete);
// numOfColorsToDelete = parseInt(numOfColorsToDelete);
// colors.splice(indexToDelete, numOfColorsToDelete);
// console.log("Updated Array after deleting color(s) from index " + indexToDelete + ": " + colors.join(", "));

//QUESTION NO:10
// let studentScores = [85, 72, 91, 65, 88, 79];
// studentScores.sort(function(a, b) {
//     return a - b;
// });
// document.write(studentScores);

//QUESTION NO:11
// let cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi"];
// document.write("<h1>List:</h1>");
// document.write(cities[1] + "<br>");
// document.write(cities[2] + "<br>");
// document.write(cities[3] + "<br>");
// document.write(cities[7] + "<br>");
// document.write("<h1>Selected List:</h1>");
// document.write(cities[2] + "<br>");
// document.write(cities[3] + "<br>");

//QUESTION NO:12

// let sen = ["This ", " is ", " my ", " cat."];
// var result = sen.join("");
// document.write(result);

//QUESTION NO:13
// let cities = ["keyboard", "mouse", "CPU"];
// document.write("<h1>Devices:</h1>");
// document.write(cities[0] + "<br>");
// document.write(cities[1] + "<br>");
// document.write(cities[2] + "<br>");

//QUESTION NO:14
// let cities = ["keyboard", "mouse", "CPU"];
// document.write("<h1>Devices:</h1>");
// document.write(cities[0] + "<br>");
// document.write(cities[1] + "<br>");
// document.write(cities[2] + "<br>");

//QUESTION NO:15
// let phonEs = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (let i = 0; i < phonEs.length; i++) {
//     document.write("<option value=>" + phonEs[i] + "</option>");
// }
// document.write("</select>");