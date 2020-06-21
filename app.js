// ----------------Chapter 21-25-----------------
// ----------Task 1---------------
// var fname=prompt("Enter first name")
// var lname=prompt("Enter last name")
// var fullname=fname+lname
// document.write(fullname)
// ----------Task 2---------------
// var mname=prompt("Enter your favourite mobile model")
// document.write("MY favourite phone is: "+mname+" length of string is: "+mname.length.toString())
// ----------Task 3---------------
// var c="Pakistani"
// document.write("String: "+c+"<br> Index of n is: "+c.indexOf("n"))
// ----------Task 4---------------
// var c="Hello World"
// document.write("String: "+c+"<br> Index of l is: "+c.lastIndexOf("l"))
// ----------Task 5---------------
// var c="Pakistani"
// document.write("String: "+c+"<br> Character at Index 3 is: "+c.charAt(3))
// ----------Task 6---------------
// var fname=prompt("Enter first name")
// var lname=prompt("Enter last name")
// var fullname=fname.concat(lname)
// document.write(fullname)
// ----------Task 7---------------
// var c="Hyderabad"
// var c1=c.replace("Hyder","Islam")
// document.write("City: "+c+"<br>After replacement "+c1)
// ----------Task 8---------------
// var c="Ali and Sami are best friends. They play cricket and football together."
// var c1=c.replace(/and/g, "&");
// document.write(c1)
// ----------Task 9---------------
// var num="472"
// document.write("value: "+num+"<br>Type: "+typeof(num)+"<br>")
// var num=472
// document.write("value: "+num+"<br>Type: "+typeof(num))
// ----------Task 10---------------
// var c="peanut"
// document.write("User input: "+c+"<br>Upper case: "+c.toUpperCase())
// ----------Task 11---------------
// var str="hello world"
// document.write(str.charAt(0).toUpperCase() + str.substring(1));
// ----------Task 12---------------
// var num = 35.36
// var strnum=num.toString()
// document.write("Number: "+num+"<br> Result: "+strnum.replace(".",""))
// ----------Task 13---------------
// var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
// var checkForSpecialChar = function(string){
//  for(i = 0; i < specialChars.length;i++){
//    if(string.indexOf(specialChars[i]) > -1){
//        return true
//     }
//  }
//  return false;
// }

// var str = prompt("Enter text");
// if(checkForSpecialChar(str)){
//   alert("Not Valid");
// } else {
//     alert("Valid");
// }
// ----------Task 14---------------
// var a = ["cake", "apple pie","cookie", "chips", "patties"];
// var inp = prompt("Enter Product");
// inp.toLowerCase();
// var b = a.indexOf(inp);
// alert(b)
// if(b==0||b==1||b==2||b==3||b==4){
//     alert("found")
// }else{
//     alert("not found")
// }
// ----------Task 15---------------
// ----------Task 16---------------
// var university = "University of Karachi";
// var b=university.split('')
// // document.write(b)
// for (let index = 0; index < b.length; index++) {
//     document.write( b[index]+"<br>");
    
// }
// ----------Task 17---------------
// var a="Pakistan"
// var lastChar = a[a.length -1];
// document.write("User Input: "+a+"<br> last character of input is: "+lastChar)
// ----------Task 17---------------
// var r = "the quick brown fox jumps over the lazydog"; 
// document.write((r.match(/the/g)).length); 
// ----------------------Chapter 26-30--------------------
// ----------Task 1-----------------
// var num = 3.45124
// document.write("<b>Number: "+num+"<br>round off value: "+Math.round(num)+"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num))
// ----------Task 2-----------------
// var num = -2.673
// document.write("<b>Number: "+num+"<br>round off value: "+Math.round(num)+"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num))
// ----------Task 3-----------------
// var num = +prompt("Enter number for absolute value")
// document.write("The absolute value of "+num+" is "+Math.abs(num))
// ----------Task 4-----------------
// var x = Math.floor((Math.random() * 6) + 1);
// document.write("Random dice value: "+x)
// ----------Task 5-----------------
// var x = Math.floor((Math.random() * 2) + 1);
// if(x===2){
//     document.write(x+"<br>Random coin value is: Heads")
// }else{
//     document.write(x+"<br>Random coin value is: Tails")
// }
// ----------Task 6-----------------
// var x = Math.floor((Math.random() * 100) + 1);
// document.write("Random number between 1 and 100 is: "+x)
// ----------Task 7-----------------
// var x=prompt("Enter weight")
// parseFloat(x);
// document.write("Your weight is: "+x)
// ----------Task 8-----------------
// var x = +prompt("Enter your lucky number")
// var x1 = Math.floor((Math.random() * 10) + 1);
// if(x===x1){
//     document.write("BINGO! You Won")
// }else{
//     document.write("Better luck next time")
// }
// ----------------------Chapter 31-34--------------------
// ----------Task 1-----------------
// var x = new Date();
// document.write(x)
// ----------Task 2-----------------
// var d = new Date();
// var n = d.getMonth();
// var month =["January","Febuary","March","April","May","June","July","aug","sep","oct","nov","dec",]
// document.write("Current month is: "+month[n])
// ----------Task 3-----------------
// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sun";
// weekday[1] = "Mon";
// weekday[2] = "Tue";
// weekday[3] = "Wed";
// weekday[4] = "Thu";
// weekday[5] = "Fri";
// weekday[6] = "Sat";

// var n = weekday[d.getDay()];
// document.write("Today is "+n)
// ----------Task 4-----------------
// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];
// if(n == "Saturday"||n == "Sunday"){
//     document.write("Today is a fun day")
// }else{
//     document.write("Go to work")
//}
// ----------Task 5-----------------
// var d = new Date();
// var n = d.getDate();
// if(n <15){
//     document.write("First fifteen days of month")
// }else{
//     document.write("Last days of month")
// }
// ----------Task 6-----------------
// var d = new Date();
// var n = d.getTime();
// var m = n*60
// document.write("Current date:"+d+"<br>Elapsed milliseconds since January 1,1970: "+n+"<br>Elapsed minutes since January 1,1970: "+m)
// ----------Task 7-----------------
// var d = new Date();
// var n = d.getHours();
// if(n<=12){
//     document.write("It's AM")
// }else{
//     document.write("It's PM")
// }
// ----------Task 8-----------------
// var d = new Date("dec 31,2020");
// document.write(d)
// ----------Task 9-----------------
// var date1 = new Date("05/23/2020"); 
// var date2 = new Date(); 
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
// document.write("Total number of days between dates  <br>"+ date1 + "<br> and <br>" + date2 + " is: <br> " + Math.floor(Difference_In_Days));
// ----------Task 10-----------------
// var a = new Date("jan 1,2015")
// var b = a.getTime();
// var c = new Date("Dec 05, 2015")
// var d = a.getTime();
// var diff = d-b/1000

// document.write("On reference date"+c+","+diff+" second has passed since beginning of 2015")
// ----------Task 11-----------------

// ----------Task 12-----------------
// ----------Task 13-----------------
// var date1 = new Date("12/10/1998"); 
// var date2 = new Date(); 
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24 * 30 * 12); 
// document.write("Your Age is: "+Math.floor(Difference_In_Days)+"<br>your birth year is "+date1.getFullYear())
// ----------Task 14-----------------
// var name = prompt("Enter Consumer name")
// var unit = +prompt("Enter Units")
// var unit_price = 16
// var late_charges = 350
// var netamount_wd = unit * unit_price;
// var netamount_dd = unit * unit_price + late_charges;
// var d = new Date();
// var n = d.getMonth();
// var month =["January","Febuary","March","April","May","June","July","aug","sep","oct","nov","dec",]
// document.write("<h1>K-ELECTRIC BILL</h1>")
// document.write("Customer Name: "+name+"<br>Month: "+month[n]+"<br>Numbers of units: "
// +unit+"<br>Charges per unit: "+unit_price+"<br><br>Net amount payable(within Due Date)"+netamount_wd+"<br>Late payment charges: "+late_charges
// +"<br>Gross amount payable (After Due Date): "+netamount_dd)
// ------------------------CHAPTER 35-38---------------------
// ----------Task 1-----------------
// function dat(){
//     var a = new Date()
//     document.write(a)
// }
// dat();
// ----------Task 2-----------------
// function con(a,b){
//     document.write(a+" "+b)
// } 
// con(prompt("Enter first name"),prompt("Enter sec name"))
// ----------Task 3-----------------
// function sum(a,b){
//     document.write(a+b)
// }
// sum(+prompt("Enter first num"),+prompt("Enter sec num"))
// ----------Task 4-----------------
// function calc(num1,op,num2){
//     if(op==="+"){
//     document.write(num1+num2)
// }
//     else if(op==="-"){
//         document.write(num1-num2)
//     }
//     else if(op==="*"){
//         document.write(num1*num2)
//     }
//     else if(op==="/"){
//         document.write(num1/num2)
//     }else{
//         document.write("You entered wrong value or operator")
//     }
// }
// calc(+prompt("Enter first num"),prompt("Enter Operator"),+prompt("Enter Second num"))
// ----------Task 5-----------------
// function sq(a){
//     var a = Math.pow(a, 2)
//     document.write(a)
// }
// sq(+prompt("Enter num for squaring"))
// ----------Task 6-----------------
// function factorial(n){
//     if(n>0 && n <= 1){
//         return 1;
//     }else{
//         return n * factorial(n-1)
//     } 
// }
// document.write(factorial(+prompt("ENter num for factorial")))
// ----------Task 7-----------------
// function count(a,b){
//     for(i=a;i<=b;i++){
//         document.write(i+"<br>")
//     }
// }
// document.write(count(+prompt("Enter first num"),+prompt("Enter sec num")))
// ----------Task 8-----------------
// function pythagorean(sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//   }
  
//    document.write(pythagorean(4, 3));
// ----------Task 9-----------------
// function area(a,b){
//     var r = a*b
//     document.write(r)
// }
// area(4, 3)
// // area(+prompt("Enter width"),+prompt("Enter height"))
// ----------Task 10-----------------
// function check_Palindrome(str_entry){
//     // Change the string into lower case and remove  all non-alphanumeric characters
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//     // Check whether the string is empty or not
//         if(cstr==="") {
//             document.write("Nothing found!");
//             return false;
//         }
//     // Check if the length of the string is even or odd 
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//     // If the length of the string is 1 then it becomes a palindrome
//             if (cstr.length === 1) {
//                 document.write("Entry is a palindrome.");
//                 return true;
//             } else {
//     // If the length of the string is odd ignore middle character
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//     // Loop through to check the first character to the last character and then move next
//         for (var x = 0; x < ccount; x++) {
//     // Compare characters and drop them if they do not match 
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 document.write("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         document.write("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome(prompt("Enter word for check is it palindrome or not"));
// ----------Task 11-----------------
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));
// ----------Task 10-----------------
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));
// ----------Task 12-----------------
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('w3resource.com', 'o'));
// ----------Task 13-----------------
// function calcGeometry(radius) {
//     var circumference = Math.PI * 2*radius;
//     document.write("The circumference is " + circumference);
//     var area = Math.PI * radius*radius;
//     document.write(" The area is " + area);
//   }
// calcGeometry(5);