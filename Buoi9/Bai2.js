const obj = {
    name: "Na",
    age: 19,
    email: "abc123@gmail.com",
}
function run(obj){
    for (const key in obj) {
        console.log(key + ' : ' + obj[key]);
    };
};
run(obj);
