// ============================ Chapter 21 to 25 =================================
// ===========================   STRING METHODS   ===============================


/*********************************************************************************************************
/*********************************************************************************************************

// Q1: Write a program that takes two user inputs for first and last name using prompt
//  and merge them in a new variable titled fullName. Greet the user using his full name.


// var f_name = prompt("Enter your First name");
// var l_name = prompt("Enter your last name");
// var full_name = document.write("Assalamo Alaikom: " + " " + f_name + l_name + " How are You!");



//*********************************************************************************************************/
//*********************************************************************************************************/

// Q2: Write a program to take a user input about his favorite mobile phone model.
//  Find and display the length of user input in your browser


// var f_mobile = prompt("Enter Your Favourate Phone name:");
// var f_name = f_mobile.length
// document.write("<br><br> My Favourate phone is: " + f_mobile + "<br> Length of string is: " + f_name);


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q3: Write a program to find the index of letter “n” in the word “Pakistani” and
// display the result in your browser .


// var pak = "Pakistani";
// var l = pak.indexOf("n");
// document.write("<br><br> String: " + pak);
// document.write("<br> Index of 'n': " + l);


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q4: Write a program to find the last index of letter “l” in the
//   word “Hello World” and display the result in your browser


// var hello = "Hello World";
// var l_l = hello.lastIndexOf("l");
// document.write("<br><br> String: " + hello);
// document.write("<br>Last Index of 'l': " + l_l);


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q5:Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// var p = "Pakistani";
// var i = p.indexOf("i");
// document.write("<br><br> String: " + p);
// document.write("<br>Character at Index " + i + " is  :'i'");


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q6: 6. Repeat Q1 using string concat() method.


// var f_name = prompt("Enter your First name");
// var l_name = prompt("Enter your last name");
// var full_name = f_name.concat(l_name);
// var full_name = document.write("Assalamo Alaikom: " + full_name + " How are You!");


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q7: Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// var isl = "Islama";
// var bd = "bad";
// var city = isl + bd;
// document.write("City: " + city);
// var city = isl.replace("Islama", "Hydera") + bd;
// document.write("<br> After Replacement: " + city);


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q8: Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;


// var message = "“Ali and Sami are best friends. They play cricket and football together.”";
// document.write("<br><br> " + message);
// var rp = message.replace(/and/g, "&");
// document.write("<br><br> " + rp);



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q9: Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.

// var str = "“472”";
// document.write("<br><br> Value: " + str + "<br> Type: " + typeof(str));
// var str = parseInt(472);
// document.write("<br><br> Value: " + str + "<br> Type: " + typeof(str));



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q10: Write a program that takes user input. Convert and show the input in capital letters.


// var low = prompt("Enter any name: ");
// document.write("<br><br> User input: " + low);
// var upp = low.toUpperCase();
// document.write("<br><br> Upper Case: " + upp);



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q11: Write a program that takes user input. Convert and show the input in title case.

// var user = prompt("Enter any word or something: ");
// document.write("<br><br> User input: " + user)
// var sentence = user.toLowerCase().split(" ");
// for (var i = 0; i < sentence.length; i++) {
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
// }
// document.write("<br><br> Title Case: " + sentence.join(" "));


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q12:Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var d = num.toString();
// document.write("<br><br> " + typeof d + ": " + d);


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q13: Write a program to take user input and store username in a variable.
// If the username contains any special symbol among [@ . , !],
//  prompt the user to enter a valid username. For character codes of [@

// var user = prompt("Enter user name:");
// var pattn = /^[a-zA-Z]+$/;
// if (user.match(pattn)) {
//     alert("User Successfully Login");
// } else {
//     alert("Invalid user name");
// }


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q14: 14. You have an array  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable“ search by user input” in an array.After searching, prompt the user whether the given item is found in the list or not.
//Note: Perform case insensitive search.Whether the user enters cookie, Cookie, COOKIE or coOkIE, program
//should inform about its availability.


// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Search items you want!");
// var casein = search.toLowerCase();


// if (items.indexOf(casein) !== -1) {

//     alert(casein + "  is available in our Bakery.");
// } else {
//     alert("Sorry We don't have " + search + " in our Bakery.");
// }


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q15:Write a program to take password as an input from.
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("Enter password");
// var pttrn = /^([a-zA-Z]+[0-9]+)$/;
// var min = 6;
// var max = 11;
// if (password.match(pttrn)) {
//     if (password.length >= min && password.length <= max) {
//         alert("password set successfully")
//     } else {
//         alert("Passwor must be 6 characters long and less than 12 characters");
//     }

// } else {
//     alert("Invalid Password");
// }




/*********************************************************************************************************/
/*********************************************************************************************************/


// Q16: Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var ar = university.split(" ").join(" ");
// for (i = 0; i < university.length; i++) {
//     document.write(ar[i] + "<br>");
// }




/*********************************************************************************************************/
/*********************************************************************************************************/

// Q17:Write a program to display the last character of a user input.

// var uuser = "Pakistan";
// document.write("User Input :" + uuser);
// var l_user = uuser.substring(7);
// document.write("<br> Last character of input: " + l_user);



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q18: You have a string “The quick brown fox jumps over the lazy dog”.
// Write a program to count number of occurrences of word “the” in given string. 

// var str = "The quick brown fox jumps over the lazy dog";
// document.write(str + "<br><br>");
// var l_case = str.toLowerCase();
// var occur_word = (l_case.match(/the/g)).length;
// document.write("There are " + occur_word + " occurences of word 'the' ");


/********************************************************************************************************************* */
/********************************************************************************************************************* */



// ===================================== Chap 26 to 30 =============================================
//                                       MATH METHODS



/********************************************************************************************************************* */
/********************************************************************************************************************* */

// Q1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var us = 3.45214;
// document.write("Number: " + us + "<br> Round off value: " + Math.round(us) + "<br> Floor value: " +
//     Math.floor(us) + "<br> Ceil: " + Math.ceil(us));



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q2: Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var us = -2.673;
// document.write("Number: " + us + "<br> Round off value: " + Math.round(us) + "<br> Floor value: " +
//     Math.floor(us) + "<br> Ceil: " + Math.ceil(us));



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q3: Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 


// var ab = -4;
// document.write("<br> The absolute value of " + ab + "  " + Math.abs(ab));


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q4: Write a program that simulates a dice using random() method of JS Math class.
// Display the value of dice in your browser.:

// var dice = Math.floor(Math.random() * 6) + 2;
// document.write("<br> Random Dice value: " + dice);



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q5:Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser


// var coin = Math.floor(Math.random() * 2) + 1;
// if (coin == 1) {
//     document.write(coin + "<br> Random coin value : Heads");
// } else if (coin == 2) {
//     document.write(coin + "<br> Random coin value : Tails: ");
// }


/*********************************************************************************************************/
/*********************************************************************************************************/

// Q6: Write a program that shows a random number between 1 and 100 in your browser

// var randomm = Math.floor(Math.random() * 100) + 1;
// document.write("<br> random Number between 1 to 100: " + randomm);



/*********************************************************************************************************/
/*********************************************************************************************************/

// Q7: Write a program that asks the user about his weight. Parse the user input and
// display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// var user_weight = parseInt(prompt("Enter your Weight in kg:"));
// var d_weight = user_weight.toFixed(1);
// document.write("<br> The weight of user is: " + d_weight + " Kilograms");




/*********************************************************************************************************/
/*********************************************************************************************************/

// Q8: Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// var user_guess = parseInt(prompt("Guess the Secret Number!"));
// var secret_num = 7;
// if (user_guess == secret_num) {
//     alert("Congractulations! You guess the lucky Number");
// } else {
//     alert("Try Again!");
// }



/********************************************************************************************************************* */
/********************************************************************************************************************* */



// ===================================== Chap 26 to 30 =============================================
//                                       MATH METHODS



/********************************************************************************************************************* */
/********************************************************************************************************************* */