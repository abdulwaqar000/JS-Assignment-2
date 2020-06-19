// Task-1
// var fisrst_name = prompt("Enter First Name : ");
// var last_name = prompt("Enter Last Name : ");
// var full_name = fisrst_name + last_name;
// alert("Hello " + full_name)


// Task-2
// var model = prompt("Enter Your Favourite Mobile Model : ");
// var length = model.length;
// document.write("My Favourite Mobile Model is " + model + " and the string lenghth is " + length)


// Task-3
// var name = "Pakistani";
// document.write("String : Pakistani")
// for (var i = 0; i <= name.length; i++) {
//     if (name[i] === "n") {
//         document.write("<br>Index of n : " + i)
//         break;
//     }
// }


// Task-4
// var name = "Hello World";
// for (var i = 0; i <= name.length; i++) {
//     if (name[i] === "l") {
//         var index = i;
//     }
// }
// document.write("String : Hello World")
// document.write("<br>Last index of l : " + index)


// Task-5
// var name = "Pakistani";
// document.write("String : Pakistani")
// document.write("<br>3rd index of String : " + name[3])



// Task-6
// var fisrst_name = prompt("Enter First Name : ");
// var last_name = prompt("Enter Last Name : ");
// var full_name = fisrst_name.concat(last_name);
// alert("Hello " + full_name)



// Task-7
// var name = "Hyderabad";
// var name1 = name.replace("Hyder", "Islam");
// document.write("String : " + name)
// document.write("<br>String after replacement : " + name1)


// Task-8
// var str = "Ali and Farooq are best friends and they play football together";
// var str1 = str.replace(/and/g, "&");
// document.write("Original String : ".bold() + str)
// document.write("<br><br><br>Replaced String : ".bold() + str1)


// Task-9
// var str = "472";
// var str_num = parseInt(str, 10);
// document.write("Value : " + str)
// document.write("<br>Type : " + typeof(str))
// document.write("<br>Value : " + str)
// document.write("<br>Type : " + typeof(str_num))


// Task-10
// var name = prompt("Enter Your Word : ");
// var name1 = name.toUpperCase();
// document.write("User Input : " + name)
// document.write("<br>In UpperCase : " + name1)


// Task-11
// var name = prompt("Enter Your Word : ");
// var first = name.slice(0, 1);
// first = first.toUpperCase();
// var remaining = name.slice(1, name.length);
// remaining = remaining.toLowerCase();
// var name1 = first + remaining;
// document.write("User Input : " + name)
// document.write("<br>In Title Case : " + name1)


// Task-12
// var number = 42.588;
// var str = number.toString();
// var num = str.indexOf(".");
// var str1 = str.substring(0, num) + str.substring(num + 1, str.length)
// document.write("Number : " + number)
// document.write("<br>Result : " + str1)


// Task-13
// var name = prompt("Enter Your Name :");
// var count = 0;
// for (var i = 0; i <= name.length; i++) {
//     if (name[i] === "@" || name[i] === "," || name[i] === "!" || name[i] === ".") {
//         alert("Please Enter Valid Name");
//         count=count+1;
//         break;
//     }
// }
// if (count === 0) {
//     alert("Thank You " + name)
// }


// Task-14
// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var name = prompt("Enter Name of Item to Find : ");
// name = name.toLowerCase();
// var count = 0;
// for (var i = 0; i <= bakery.length; i++) {
//     if (name === bakery[i]) {
//         document.write(name.bold() + " is available at " + i + " index in our Bakery")
//         count = count + 1;
//         break;
//     }
// }
// if (count === 0) {
//     document.write("We are Sorry! " + name.bold() + " is not available in our Bakery")
// }



// Task-15
// var pass = prompt("Enter Your Password :");
// document.write("Entered Password : " + pass)
// if (pass.length < 6) {

//     document.write("<br>The Password Length Can not be less than 6 characters.")
// } else if (pass[0] >= 0 && pass[0] <= 9) {
//     document.write("<br>The Password Can not Start with a Number.")
// }
// var count = 0;
// for (var i = 0; i < pass.length; i++) {
//     if (pass[i] >= "a" && pass[i] <= "z" || pass[i] >= "A" && pass[i] <= "Z" || pass[i] >= 0 && pass[i] <= 9) {

//     } else {
//         count = count + 1;
//     }
// }
// if (count != 0) {
//     document.write("<br>Password can not Contain Special Characters")
// }


// Task-16
// var str = "University of Karachi";
// var str1 = str.split("");
// for (var i = 0; i < str1.length; i++) {
//     document.write(str1[i] + "<br>")
// }


// Task-17
// var str = prompt("Enter Any String : ");
// document.write("User Input : " + str)
// var num = str.length;
// document.write("<br>Last Character : " + str[num - 1])


// Task-18
// var text = "The quick brown fox jumps over the lazy dog";
// var text1 = text.toLowerCase();
// var count = 0;
// for (var i = 0; i < text1.length; i++) {
//     if (text1.slice(i, i + 3) === "the") {
//         count = count + 1;
//     }
// }
// document.write("Text : " + text)
// document.write("<br>There are " + count + " Occurences of the text \'the\'")


// Task-19
// var number = prompt("Enter a Positive Number :");
// var number = parseFloat(number);
// var rnd = Math.round(number);
// var flr = Math.floor(number);
// var cil = Math.ceil(number);
// document.write("Number : " + number)
// document.write("<br>Round : " + rnd)
// document.write("<br>Floor : " + flr)
// document.write("<br>Ceil : " + cil)



// Task-20
// var number = prompt("Enter a Negative Number :");
// number = parseFloat(number);
// var rnd = Math.round(number);
// var flr = Math.floor(number);
// var cil = Math.ceil(number);
// document.write("Number : " + number)
// document.write("<br>Round : " + rnd)
// document.write("<br>Floor : " + flr)
// document.write("<br>Ceil : " + cil)



// Task-21
// var number = prompt("Enter a Number :");
// number = parseFloat(number);
// var abslt = Math.abs(number);
// document.write("Absolute Value of " + number + " is " + abslt)



// Task-22
// var number = Math.floor(Math.random() * 7)
// document.write("Random Dice Value : " + number)


// Task-23
// var number = Math.ceil(Math.random() * 2);
// if (number === 1) {
//     document.write(number)
//     document.write("<br>Random Coin Value : Heads")
// }
// if (number === 2) {
//     document.write(number)
//     document.write("<br>Random Coin Value : Tails")
// }

// Task-24
// var number = Math.ceil(Math.random() * 100);
// document.write("Random Number Between 1 & 100 : " + number)


// Task-25
// var weight = prompt("Enter Your Weight in Kilograms :");
// weight = parseFloat(weight);
// document.write("The Weight of User is " + weight + " Kilograms")


// Task-26
// var number = Math.ceil(Math.random() * 10);
// var guess = prompt("Enter a Number :");
// guess = parseInt(guess);
// document.write("Actual Number : " + number)
// document.write("<br>Your Guess " + guess)
// if (guess === number) {
//     document.write("<br>Congratulations! Your Guess is Right".bold())
// }


// Task-27
// var date = new Date();
// document.write(date)


// Task-28
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// var month = date.getMonth();
// document.write("Current Month : " + months[month])

// Task-29
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var day = date.getDay();
// document.write("Today is " + days[day])


// Task-30
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var day = date.getDay();
// if (days[day] === "Sun" || days[day] === "Sat")
//     document.write("Today is Fun Day")


// Task-31
// var date = new Date();
// var data = date.getDate();
// if (data <= 15) {
//     document.write("First fifteen Days of Month")
// } else {
//     document.write("Last fifteen Days of Month")
// }



// Task-32
// var date = new Date();
// var mili = date.getTime();
// var min = (mili / 1000) / 60;
// document.write("Current Date : " + date)
// document.write("<br>Elapsed Miliseconds since Jan 1, 1970 : " + mili)
// document.write("<br>Elapsed Minutes since Jan 1, 1970 : " + min.toFixed(2))


// Task-33
// var date = new Date();
// var hours = date.getHours();
// if (hours < 12) {
//     document.write("It's AM")
// } else {
//     document.write("It's PM")
// }


// Task-34
// var date = new Date("Thu 31 Dec 2020");
// document.write(date)


// Task-35
// var old_date = new Date("Jun 18, 2015");
// var new_date = new Date();
// var mili_old = old_date.getTime();
// var mili_new = new_date.getTime();
// var get_mili = mili_new - mili_old;
// var days = (get_mili / 1000) / 60 / 60 / 24;
// days = Math.floor(days);
// document.write(days + " Days have Passed Since 1st Ramadan, 2015")



// Task-36
// var cur_date = new Date();
// var ref_date = new Date("Jan 01, 2020");
// var cur_mili = cur_date.getTime();
// var ref_mili = ref_date.getTime();
// var get_mili = cur_mili - ref_mili;
// var get_seconds = get_mili / 1000;
// get_seconds = Math.floor(get_seconds);
// document.write("On reference date " + cur_date + "  " + get_seconds + " seconds have been passed since Jan 01, 2020")


// Task-37
// var date = new Date();
// var hours = date.getHours();
// var new_date = new Date();
// new_date.setHours(hours - 1);
// document.write("Current Date : " + date + "<br>1 hour ago it was : " + new_date)


// Task-38
// var date = new Date();
// var year = date.getFullYear();
// var new_date = new Date();
// new_date.setFullYear(year - 100);
// document.write("Current Date : " + date + "<br>100 Years Back it was : " + new_date)


// Task-39
// var age = prompt("Enter Your Age in Years : ");
// age = parseInt(age);
// date = new Date();
// var year = date.getFullYear();
// var age_year = year - age;
// document.write("Your  Age is : " + age + "<br>Your Birth Year is : " + age_year)


// Task-40
// var name = prompt("Enter Your Name : ");
// var units = prompt("Enter Amount of Units Consumed : ");
// units = parseInt(units);
// var date = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var month = date.getMonth();
// var unit_Price = 16;
// var bill = units * unit_Price;
// var surcharge = bill / 20;
// document.write("K-Electric".big().big().big().bold())
// document.write("<br><br><br>Customer Name : " + name)
// document.write("<br>Current Month : " + months[month].bold())
// document.write("<br>Units Consumed : " + units)
// document.write("<br>Charges Per Unit : " + unit_Price)
// document.write("<br><br><br>Net Amount Payable (Within Due Date) : " + bill)
// document.write("<br>Late Payment Surcharge : " + surcharge)
// document.write("<br>Gross Amount Payable (After Due Date) : " + (bill + surcharge))


// Task-41
// function date() {
//     var date = new Date();
//     document.write(date)
// }
// date();


// Task-42
// function greet() {
//     var first = prompt("Enter Your First Name :");
//     var last = prompt("Enter Your Last Name :");
//     var full = first + last;
//     alert("Hello " + full)
// }
// greet();


// Task-43
// var first = prompt("Enter First Number :");
// first = parseInt(first);
// var second = prompt("Enter Second Number :");
// second = parseInt(second);

// function add(a, b) {
//     var sum = a + b;
//     return sum;
// }
// var addition = add(first, second);
// alert(addition)



// Task-44
// var first = prompt("Enter First Number :");
// first = parseInt(first);
// var second = prompt("Enter Second Number :");
// second = parseInt(second);
// var oper = prompt("Enter Operator :");

// function calc(a, b, c) {
//     var res;
//     if (oper === "+") {
//         res = a + b;
//         return res;
//     } else if (oper === "-") {
//         res = a - b;
//         return res;
//     } else if (oper === "*") {
//         res = a * b;
//         return res;
//     } else if (oper === "/") {
//         res = a / b;
//         return res;
//     } else if (oper === "%") {
//         res = a % b;
//         return res;
//     } else {
//         return false;
//     }
// }

// var result = calc(first, second, oper);
// if (result === false) {
//     document.write("Please Enter a Valid Operator")
// } else {
//     document.write(first + " " + oper + " " + second + " = " + result)
// }


// Task-45
// var number = prompt("Enter Any Number :");
// number = parseFloat(number);
// var result = square(number);
// document.write("Number : " + number + "<br>Square of Number : " + result)
// function square(a) {
//     var square = a * a;
//     return square;
// }


// Task-46
// var number = prompt("Enter Any Number : ");
// number = parseFloat(number);

// function factorial(a) {
//     var fact = 1;
//     for (var i = a; i > 0; i--) {
//         fact = fact * i;
//     }
//     return fact;
// }
// var result = factorial(number);
// document.write("Number : " + number + "<br>Factorial of Number : " + result)


// Task-47
// var start = prompt("Enter Starting Number : ");
// start = parseInt(start);
// var end = prompt("Enter Ending Number : ");
// end = parseInt(end);

// function counting(a, b) {
//     for (var i = a; i <= b; i++) {
//         document.write(i + " , ")
//     }
// }
// counting(start, end);


// Task-48
// var base = prompt("Enter Base : ");
// base = parseFloat(base);
// var prependicular = prompt("Enter Prependicular : ");
// prependicular = parseFloat(prependicular);

// function calculateHypotenus(a, b) {
//     function calculateSquare(num) {
//         var sqr = num * num;
//         return sqr;
//     }
//     var hypo = calculateSquare(a) + calculateSquare(b);
//     return hypo;
// }
// var result = calculateHypotenus(base, prependicular);
// document.write("Hypotenus<sup>2</sup> = Base<sup>2</sup> + Prependicular<sup>2</sup>")
// document.write("<br><br><br><br> Base : " + base + "<br>Prependicular : " + prependicular + "<br>Result : " + result)



// Task-49
// var width = prompt("Enter Width :");
// width = parseFloat(width);
// var height = prompt("Enter Height :");
// height = parseFloat(height);

// function area(a, b) {
//     var area = a * b;
//     return area;
// }
// var result1 = area(width, height);
// var result2 = area(20, 40)
// document.write("(i) Arguments as Variables".big().bold() + "<br><br>Area of Ractangle : " + result1)
// document.write("<br><br><br>(ii) Arguments as Values".big().bold() + "<br><br>Area of Ractangle : " + result2)



// Task-50
// var str = prompt("Enter String To Check :");
// str = str.toLowerCase();

// function palindrome(a) {
//     var split = a.split("");
//     var reverse = split.reverse();
//     var join = reverse.join("");
//     if (join === a) {
//         return true;
//     } else {
//         return false;
//     }
// }
// var result = palindrome(str);
// if (result === true) {
//     document.write(str + " is a Palindrome")
// } else {
//     document.write(str + " is not a Palindrome")
// }


// Task-51
// var str = "the red foX goT browN";
// function string_capital(str1) {
//     var split = str1.split(" ");
//     var new_string = "";
//     for (var i = 0; i < split.length; i++) {
//         var word = split[i];
//         var new_word = word.slice(0, 1).toUpperCase() + word.slice(1, word.length).toLowerCase();
//         new_string = new_string + " " + new_word;

//     }
//     return new_string;
// }
// var get_string = string_capital(str);
// document.write("Given String : " + str + "<br><br>Expected Output : " + get_string)


// Task-52
// var str = "Web Development Tutorial";
// var split = str.split(" ");
// var max = split[0];

// function checklength(str1) {
//     var split = str1.split(" ");
//     var max = split[0];
//     for (var i = 0; i < split.length - 1; i++) {
//         if (split[i].length < split[i + 1].length) {
//             max = split[i + 1];
//         }
//     }
//     return max;
// }
// var result = checklength(str);
// document.write("Example String : " + str + "<br><br>Longest Word : " + result)


// Task-53
// var str = prompt("Enter The String :");
// var ltr = prompt("Enter The Letter :");

// function counter(a, b) {
//     var count = 0;
//     for (var i = 0; i < a.length; i++) {
//         if (a.slice(i, i + 1) === b) {
//             count = count + 1;
//         }
//     }
//     return count;
// }
// var result = counter(str, ltr);
// document.write("Given String : " + str + "<br>Number of Occurence(s) of letter \"" + ltr.bold() + "\" in the String : " + result)



// Task-54
// var radius = prompt("Enter The Radius :");
// radius = parseFloat(radius);
// var pie = 3.14;

// function calccircumference(r) {
//     var circumference = 2 * pie * r;
//     return circumference;
// }

// function calcarea(r) {
//     var area = pie * (r * r);
//     return area;
// }
// var get_circumference = calccircumference(radius).toFixed(2);
// var get_area = calcarea(radius);
// document.write("Circumference of Circle : " + get_circumference + "<br>Area Of Circle : " + get_area)