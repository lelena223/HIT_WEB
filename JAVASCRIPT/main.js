// console.log("Xin chao cac ban.");
// console.error("Xin chao cac ban.");

// // var a = 'Na';
// //comment
// /* */
// var a = 3 + 'Na';
// // var = ‘Na’;
// // var = true;
// console.log(a);

// const user = {
//     name: "Hello",
// };
// user.name = "Hi";

// let name = prompt("Nhap de");
// console.log(name);

// let age = confirm("Xac nhan");
// console.log(age);
// let a=2,b=3;
// if(a==2||b==3){
//     console.log("true");
// } else {
//     console.log("false");
// }

// let user;
// console.log(user ?? "Anonymous")// tra ve Anonymous is undefined

// if(user != undefined){
//     return user;
// } else {
//     return "Anonymous";
// }

// let a = null;
// console.log(Boolean(a));

// array = [1,2,3];
// for (let i = 0; i < array.length /* do dai cua array */; i++) {
//     const element = array[i];
//     console.log(element)
// }

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
// forin lap cho 1 object 
// so luong vong lap tuong duong voi so luong bien object

// let obj = {
//     a: "A",
//     b: "B",
//     c: "C",
// };
// console.log(obj.a);// lay ra thuoc tinh a
// console.log(obj["b"]);// lay ra thuoc tinh b
// obj["d"] = "D";// the thuoc tinh
// console.log(obj);// lay ra all
// coi cac thuoc tinh la i
// for (const key in obj) {
//     console.log(key + ' : ' + obj[key]);
// }

// let str = "hello xin chao";
// for (const s of str) {
//     console.log(s);
//}// in ra tung ki tu 
// array cung co the coi la 1 object nhuwng thuuoc tinh cua no dac biet

// let arr = [1,2,3];
// for (const key in arr) {
//     console.log(key);
//     console.log(arr[key]);
// }

// function tinhtong(a,b){
//     return a + b;
// }
// let c = tinhtong(1,2); // goi ham
// console.log(c);

// function say(name){
//     console.log(name + "fkhsd");
// }
// say(123);

// let tinhtong = function (a,b){
//     return a+b;
// }
// let c = tinhtong(2,3);
// console.log(c);

// arrow function
let tinhtong = (a,b) => {
    //code
    return a+b;
}
console.log(tinhtong(5,6));