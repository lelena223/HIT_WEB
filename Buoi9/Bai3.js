var courses = ['C++', 'Java', 'Javascript'];
function addCourse(n,m){
    n.push(m);
}
addCourse(courses, 'Go');
console.log(courses);

function getFirstElement(n){
    return n[0];
}
var FirstElement = getFirstElement(courses);
console.log(FirstElement);

// console.log(courses.join('*'));
// console.log(courses.join(','));

function joinArr(n,m){
    let x ="";
    for(let i=0; i<n.length; i++){

        x +=n[i];
        if(i != n.length -1 ){
           x+=m;  
        }
        
    }
    return x;
}


let  result1 = joinArr(courses,",");
console.log(result1);
let  result2 = joinArr(courses,"*");
console.log(result2);