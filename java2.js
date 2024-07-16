// var a=parseInt(window.prompt("enter the number"))
// for(var i=0;i<a;i++){
// console.log(i)}
   

// count=0;
// b=parseInt(window.prompt("enter the number"))
// for(var i=0;i<b;i++){
//     if(b%i==0){
//         count++;
//         console.log("not number")
//     }
// }


// var count = 0;
// var a = parseInt(window.prompt("enter a number"));
// for (let i = 2; i < a; i++) {
//   if (a % i == 0) {
//     count++;
//   }
// }
// if (count == 0) {
//   document.write("PRIME");
// } else {
//   document.write("NOT PRIME");
// }

// var a=parseInt(window.prompt("enter the number"))
// if(a%2==0){
//     document.write("even")
// }
// else{
//     document.write("odd")
// }

// var a=parseInt(window.prompt("enter the number"))
// if(a<=0){
//     document.write("positive")
// }
// else{
//     document.write("negitive")
// }

// var x = new Date();
// document.write(x.getDate() +"-"+( x.getMonth()+1 )+"-"+ x.getFullYear());
// console.log(x);
// console.log(x.getFullYear());

// console.log(Math.ceil((Math.random()*5)+5))
// console.log(Math.round(4.6))
// console.log(Math.floor(4.4))
// console.log(Math.trunc(4.34344))

// console.log(Math.sqrt(11));
// console.log(Math.pow(3,5));

// function karna(a=4,b,c)
// {
//     console.log(a+b);
// }
// karna(2,3)

// var x={
//     "age":32,
//     "roll number":538,
//     "branch":"cse",
//     Details :function(){
//         console.log("fhrj")
//     }
// }
// x.Details();


// function hai(){
//     var x=10;
//     console.log(x);
// }
// hai();

// console.log(x);
// var x=10;

// x=10+1;
// console.log(x);
// var x;


// var x={
//     name:"surya",
//     age:18,
//     branch:"cse",
//     get :function(){
//         console.log(this.name);
//         console.log(x.age);
//     }
// }
// console.log(x.branch);
// x.get();
// console.log(Object.keys(x));
// console.log(Object.entries(x));
// for(var suresh in x ){
//     console.log(x[suresh]);
// }


// try{
//     var x=window.prompt("enter the name");
//     if(x==="surya"){
//         console.log(x);
//     }
//     else{
//         throw {
//             "sambar":"ladhu"
//         }
//     }
// }
// catch(er)
// {
//     console.log(er);
// }


// var s=parseInt(window.prompt("enter the marks:"));
// if(s>90 && s<=100){
//     console.log("grade A")
// }
// if(s>80 && s<=90){
//     console.log("grade B")
// }
// if(s>70 && s<=80){
//     console.log("grade C")
// }
// if(s>60 && s<=70){
//     console.log("grade D")
// }
// else{
//     console.log("fail")
// }


// var a=parseInt(window.prompt("enter the a value:"));
// var b=parseInt(window.prompt("enter the b value:"));
// var c=parseInt(window.prompt("enter the c value:"));
// var s=(a+b+c)/2;
// console.log("value of the s:" + s);
// var p=Math.sqrt(s*(s-a)*(s-b)*(s-c));
// console.log("area of the triangle:" + p);


// var a=parseInt(window.prompt("enter the a value:"));
// var b=parseInt(window.prompt("enter the b value:"));
// var c=parseInt(window.prompt("enter the c value:"));
// var root1 = (-b+Math.sqrt(Math.pow(b,2)-(4*a*c)))/2*a;
// var root2 = (-b-Math.sqrt(Math.pow(b,2)-(4*a*c)))/2*a;
// console.log("root1:" + root1 + "root2:" +root2);


// var suri=[1,2,3,4,5];
// suri.forEach(function(vall){
//     console.log(vall);
// })

// suri.map
 


// var data={
//     names:" ",
//     age:0,
//     number:0,
//     gender:" ",
//     email:" ",
// }

// function names(event){
//     data.names=event.target.value
// }
// function age(event){
//     data.age=event.target.value
// }
// function number(event){
//     data.number=event.target.value
// }
// function gender(event){
//     data.gender=event.target.value
// }
// function email(event){
//     data.email=event.target.value
// }
// function button(event){
//     console.log(data)
// }
// console.log(data.names);


// var data={
//     firstname:"",
//     secondname:"",
//     dateofbirth:"",
//     age:0,
//     father:"",
//     mother:"",
//     address:"",
// }
// var table={
//     sscyear:0,
//     interyear:0,
//     btechyear:0,
//     sscper:0,
//     interper:0,
//     btechper:0,
//     sscpass:0,
//     interpass:0,
//     btechpass:0,
// }
// function firstname(event){
//     data.firstname=event.target.value;
// }
// function secondname(event){
//     data.secondname=event.target.value;
// }
// function dateofbirth(event){
//     data.dateofbirth=event.target.value;
// }
// function age(event){
//     data.age=event.target.value;
// }
// function father(event){
//     data.age=event.target.value;
// }
// function mother(event){
//     data.age=event.target.value;
// }
// function address(event){
//     data.address=event.target.value;
// }
// function certification(event){
//     data.certification=event.target.value;
// }






// function year1(event){
//     table.sscyear=event.target.value;
// }
// function year2(event){
//     table.interyear=event.target.value;
// }
// function year3(event){
//     table.btechyear=event.target.value;
// }
// function per1(event){
//     table.sscper=event.target.value;
// }
// function per2(event){
//     table.interper=event.target.value;
// }
// function per3(event){
//     table.btechper=event.target.value;
// }
// function pass1(event){
//     table.sscpass=event.target.value;
// }
// function pass2(event){
//     table.interpass=event.target.value;
// }
// function pass3(event){
//     table.btechpass=event.target.value;
// }
// function button(){
//     console.log(data);
//     console.log(table)
// }