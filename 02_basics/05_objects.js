// JSON is nothing but a JS object notation, it can work in many API's industry
const course = {
    courseName:"Java Script ",
    price:"9999",
    courseStudent:"Harsh"
}

// course.courseStudent

// const {courseStudent} = course // Harsh
//Now de-structureing the object(which is courseStudent),

const {courseStudent: Student} = course

console.log(Student);  // Harsh

const navbar = ({company}) => {

    // Since, {comapny} is in curly braces means it is de-structured !

}
navbar(company = "HARSH")

// {
//     // it is an empty object, but also known as JSON . 
// }


// {
//     "name":"HArsh",
//     "age": 21,
//     "courseName": "Java SCript"
// }
