// setTimeout(() => {
//     console.log("okay start from here..")
// }, 3000);

// setTimeout(() => {
//     console.log("alsdkfjas kljfaskldf")
// }, 6000);

// setTimeout(() => {
//     console.log("test sd kjfsdklj erkltwetjrtgit")
// }, 2000);

// console.log("task1")

// setTimeout(() => {

//     setTimeout(() => {
//             console.log("okay...")
//     }, 3000);

// }, 2000);

// console.log("okay i am done")

// const callbck = () =>{
//     console.log("this is a callback fun")
// }

// const hof = (callbck) =>{
//     callbck();
// }
// hof(callbck);
// ---------------------------------------------

// const getData = (data, callBack) => {
//   setTimeout(() => {
//     console.log(data);
//     if (callBack) {
//       callBack();
//     }
//   }, 2000);
// };

// function callAPI() {
//   console.log("calling API DATA...");
// }
// getData("123_user_id", () => {
//    getData("productId", ()=>{
//         callAPI()
//    })
// });

// let p = new Promise((res, rej)=>{
//     rej("rejected.... success..")
// })

// p.then((dat)=>{
//     console.log(dat)
// }).catch((e)=>{
//     console.log(e)
// })

// let arr = [1,2,3,4,5,6]

// let p = [...arr]

// console.log(p)

// arr[0]= "amit"

// console.log(p)
// console.log(arr)

// let arr = [1,2,3,4,5]
// let [num, ...num2] = arr
// console.log(num)
// console.log(num2)

// rest with destructuring obj

// let obj = {name:"omkar", age:23, city:"indore", state:"M.P."}
// let {name, ...restObj} = obj

// console.log(name)
// console.log(restObj)

// console.log(`sdf
//     sdlkf
//      sdlkfasdf
//      asflkjasdf
//      asdflkasdf
//      asdflkasdf
//      asf'klsj`)

// console.log(null == undefined)   //true
// console.log(null === undefined)  //false
// console.log(null === null)    // true
// console.log(null == null)    // true
// console.log(NaN == NaN)    //false

// const fn = (parm1) =>{
//     console.log("param value = ", parm1)
//     return;
//    "my name is amit"
// }
// fn(12)

// realFun(); //No i am correct one..
// function realFun() {
//   console.log("i am real");
// }
// function realFun() {
//   console.log("No i am correct one..");
// }

// let obj = {
//     name:"rajesh",
//     sayHi: function(){
//         console.log("Hi ",this.name)
//         return;
//     }
// }

// obj.sayHi();  // rajesh

// let otherFun = obj.sayHi;
// name = "omkar"
// console.log(otherFun())

// globalThis.firstName  = "omkar"
// let obj2 = {
//     firstName: "harish",
//     sayBy: () =>{
//         console.log("Hi, ",this.firstName)
//     }
// }
// obj2.sayBy();
// console.log(obj2.firstName)

// let ladder = {
//   count: 1,
//   up: function () {
//     this.count++;
//     return this;
//   },
//   showStep: function () {
//     // this.count;
//     return this.count;
//   },
//   down: function () {
//     this.count--;
//     return this;
//   },
// };
// console.log(ladder.up().up().showStep());

// let arry = [1,2,[3, 4, 5, [49, 52, 22, [34, 23, 3434, 555, 66, [111, 222, 333]]]]];
// const flattenArray = (arr) => {
//   let result = [];
//   for (let value of arr) {
//     if (value instanceof Array) {
//       result.push(...flattenArray(value))
//     } else {
//       result.push(value)
//     }
//   }
//   return result;
// };
// console.log(flattenArray(arry));

// Flatten an object
// let obj = {name:"rajesh", age:11, city:{local:"indore", parmanent:"bhopal"}, a:{b:{c:{d:"data"}}}}

// const flattenObj = (obj) =>{
//     let result = {};
//     for(let key in obj){

//         if(typeof obj[key] === "object"){
//             flattenObj(obj[key])
//         }
//         result[key] = obj[key]
//     }
//     return result
// }
// console.log(flattenObj(obj))

// function counter(num){
//     let res = 1;
//     if(num ==0) return res
//     return function inner(other){
//         res++;
//         if(other == 0) return res;
//         return inner
//     }
// }
// console.log(counter(0))   // 1
// console.log(counter()(0))   // 2
// console.log(counter()()(0))   // 3
// console.log(counter()()()(0))   // 4

// function sum(a) {
//   if (!a) return 0;

//   return function inner(b) {
//     if (!b) {
//       return a;
//     }
//     return sum(a + b);
//   }
// }

// console.log(sum()); //0
// console.log(sum(1)()); //1
// console.log(sum(2)(3)(5)()); //10
// console.log(sum(5)(13)(7)(10)()); //35

// ==================@@@@@@@@@@@@@@@@  ES6 FEATURES @@@@@@@@@@@@@@@@@@========================
// ==================@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@========================

// ----------------- let, const and var variable..--------------------
// let a = 20;
// if(true){
//     let a = 10;
//     console.log(a)
//     if(true){
//         let a = 30;
//         console.log(a)
//     }
// }
// console.log(a)

//----------------hoesting...=----------------------
// console.log(a)
// var a
// console.log(b)
// let b;
// const c = 1000
// console.log(c)

// --------let and const in for loop with setTimeout --------------
// for(var i = 0; i<5; i++){
//     setTimeout(() => {
//         console.log(i)   //  5 time 5
//     }, 1000);
// }
// for(let i=0; i<5; i++){
//     setTimeout(() => {
//         console.log(i)  //  0,1,2,3,4
//     }, 1000);
// }

// ======== default parameter ( parameter with default value)========
// function sum(a,b=0){
//     return a+b;
// }
// console.log(sum(5))
// console.log(sum(3,4))

// ---------------------------------------------
//   function main(a,b=main()){
//     return a+b;
//   }
//   main()

// To fix it:
// function main(a,b){
//     if(a === undefined) return 0;
//     if(b === undefined) b = main();
//     return a+b;
// }
// console.log(main(2))

// =========================Template literal comes in ECMA Script-6-2015 =========================
// let name = "harish"
// console.log(`Hello ${name}`)

// let name= "harish das";
// let strr = "you have to run the code otherwise code will run you.."
// console.log(`Concated String ${strr} said By: ${name} `)
// let a = 10, b=20;
// console.log(`sum of a and b is ${a+b}`)

// ===============================find and findindex=====================================

// let arr = [12,13,24,34,56,67,78,89,99,77]
// let greater78 = arr.find((value)=>value>78)   //return first value which is greater than 78.
// let greater78 = arr.findIndex((value)=>value>78) // return index of first value which is greater than 78
// console.log(greater78)

// let arryOfObj = [{id:1,name:'harish',age:22}, {id:2,name:'omkar', age:33}]
// let result = arryOfObj.find((data)=>{
//     return (data.name).toLowerCase() == 'hadrish'
// })
// console.log(result)

// ------------------------------ Arrow function in details
// way of writing a function:

// function myFun(){
//     console.log("first myFun is calling....")
// }
// let twoFun = function(){
//     console.log("two fun is calling....")
// }
// let arrowFun = () =>{
//     console.log("this is arrow function...")
// }
// (function(){
//     console.log("Immediate invoke fun..")
// })()
// myFun();
// twoFun()
// arrowFun()

// let arr = [10,20,30]
// let result = arr.map((v)=>v*2);  //sortest way of writing arrow fun..
// console.log("Double the arrays values",result)

// ====================== Classes in JS==================================================

// class Fruits{
//     constructor(){
//         console.log("constructor is calling..")
//     }
//     // variable without let,var, const keywords..
//     fruitName = "Apple"

//     // functions
//     getFruits(){
//         return this.fruitName
//     }
// }
// let obj = new Fruits
// console.log( obj.getFruits())
// =======================================================================

// Lexical scope for this
// let name = "Harish das Mangal bhawan"
// let data = {
//     name:"Ganesh",
//     getName:function(){
//         console.log(this.name)

//         let p = ()=>{
//             console.log(this.name)
//         }
//        return p
//     },
//     byArrow:()=>{
//         console.log(this.name)
//     },
//     getinnerName:function(){
//         let takeit =() =>{
//             console.log(this.name)
//         }
//         takeit()
//     }
// }
// let pfun = data.getName()
// console.log(pfun())
// data.byArrow();
// data.getinnerName()

// =============== rest operator ==================

// function takeArgument(...alldata){    // rest operator  (rest karo apne ghar par (here ghar is function defination..))
//     console.log(alldata)
//     //  loop to the array and get each data of array..
// }
// takeArgument("apple","mango", "orange", "chiku", "banana")

// =============== Promise  ==================

// let promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//            resolve("data is resolved ....")
//    }, 2000);
//   setTimeout(() => {
//     reject("data is rejecting....");
//   }, 2000);
// })
//   .then((d) => console.log(d))
//   .catch((e) => console.log(e));

// =============== New Global Function  ==================

//  isNaN()    // parameter should not be a number will return true
//  isFinite()   //parameter should be number will return true

// let p = 34     //finite number
// let str = "Amit Gupta"  // is not a number
// console.log(isFinite(p))    //true
// console.log(isNaN(str))    //true
// console.log(isNaN(null))  //false
// console.log(isFinite(null))  //true

// console.log(typeof null)

// =============== Destructuring in JS  ==================

// let arr = ['mango', 'orange', 'banana']
// let [m, ,o ] = arr;
// console.log(m)
// console.log(o)

// Destructuring of object
// let obj = {name:"harish", age:22, city:"kgn", phone:234234234}
// let {name, age, ...rest} = obj
// console.log(name)
// console.log(age)
// console.log(rest)

// =============== Spread operator in JS  ==================
// let a = [3,4,5,6]
// const fun = (...restOptr) =>{
//     console.log(restOptr)
// }
// fun(...a);   // spread operator

// =============== Exponentiation Operator (**) in JS  ==================
// console.log(2**4)
// console.log(5**-3)
// console.log(10**NaN)
// console.log(2**3**2)
// console.log(2**(2**3))

// =============== Modules in JS  ==================
//  allow us to use one file code in another file..
// export variable, function, class
// import name from "./file_name_here";
// export default name = "Harish das";


// =============== Generators in JS  ==================

// function* setSteps(a=10, b=20){
//     console.log(a+b)
//     yield "run first time..."

//     console.log("second time will call.ig")
//     yield "it will run second time.."
//     return 0
// }
// let stp = setSteps()
// function getSteps(){
//     console.log( stp.next())
// }


// ES6 FEATURES:
//     We all know about that
// ES7(2016) features introduced:
//     Exponetiational Operator
// ES8 (2017) feature introduced:
//     Object.entries()
//     Object.values()
//     padStart()
//     padEnd()


// =================== padStart and padEnd in ES8
// let p = "ram";
// // let c = p.padStart(1,0)
// let c = p.padEnd(6, "9")
// console.log(c)
// console.log(c.length)
// console.log('Name'.padEnd(10) + 'Score'.padStart(5));


// ================= ESMA Script history from 2015 to 2024. -=======================

// ES6 (2015) Features in JS:

// 	1) let and const keywords
// 	2) Template literal
// 	3) Descturturing 
// 	4) Default argument, rest and spread operator
// 	5) Classes and Modules
// 	6) Iterators and Generators
// 	7) Promises



// ES7 (2016) Features in JS:
	
// 	1) Array.prototype.incudes()
// 	2) Exponentiation operator (**)



// ES8 (2017) Feature in JS:
// 	1) async/await
// 	2) Object.values(), Object.entries()
// 	3) padStart(), padEnd()  both are string methods, apply only on string..  str.padStart(targetlength, padString)



// ES9 (2018) Features in JS:
// 	1) Rest/Spread on Object
// 	2) Promise.prototype.finally()



// ES10 (2019) Features in JS:
// 	1) trimStart(), trimEnd()
// 	2) Object.fromEntries()



// ES11 (2020) Features in JS:
// 	1) ?? (nullish coalescing operator)
// 	2) ?. (optional chanining)
// 	3) Promise.allSettled()
// 	4) globalThis



// ES12 (2021);
// 	1) Promise.any()
// 	2) Numeric Seprator (1_22_300)
// 	3) Logical assignment operator:  ||= , &&= , ??=



// ES13 (2022)
// 	1) Object.hasOwn()
// 	2) Public and Private Class Fields



// ES14 (2023) Features in JS:
// 	1) toSorted(), toReversed(), toSpliced(), .with()
// 	2) findLast(),/ findLastIndex()


// ES15 (2024) Features in JS:
// 	1) Set.prototype.intersection(), union()
// 	2) Iterator helper: .map(), .filter(), .take()
// 	3) Array.prototype.groupBy()