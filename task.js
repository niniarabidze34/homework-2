// შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
// ფუნქციას გადაეცით ობიექტი არგუმეტნად 

// let sampleObject = {
//     isItarable : false,
//     sampleArray : [12,63,21,34,98,57]
// }
// თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
// თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

// function sample(x){
//     for(let i = 0; i < sampleObject.sampleArray.length; i++){
//         if(sampleObject.isItarable == true){
//             console.log(sampleObject.sampleArray[i])
//         } else{
//             console.log("provided array isn't itarable")
//         }
//     }
// }

// sample(sampleObject);


//------------------------------------------------------------------------------------------------
//Task 2
/*
შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
წინააღმდეგ შემთხვევაში false

*/

// function checkPythagoras(x,y,z){
//     if(x**2 + y**2 == z**2){
//         return true
//     }else if(x**2 + z**2 == y**2){
//         return true
//     }else if(z**2 + y**2 == x**2){
//         return true
//     } else{
//         return false
//     }
// }

// let answer = checkPythagoras(4,5,3)
// console.log(answer)

// ან ასე

// function checksing(a,b,c){
//     return a**2 + b**2 == c**2
// }
// function checkPythagoras(x,y,z){
//     return checksing(x,y,z) || checksing(y,z,x) || checksing(x,z,y)
// }

// console.log(checkPythagoras(5,4,3))

//----------------------------------------------------------
//Task 3
/*
დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
დააბრუნოს "Min value is 2 and Max value is 75"
*/
// let numArr = [2,14,25,75,11,6]

// function minMax(x){
//     let min = numArr[0]
//     let max = numArr[0]
//     for(let num of numArr){
//         if (num < min){
//             min = num
//         }
//         if(num > max){
//             max = num
//         }
//     }
//     return `Min value is ${min} and Max value is ${max}`
// }

// let result = minMax(numArr)
// console.log(result)

//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/

// function checkDeg (deg) {
//     if(deg == 90){
//         return 'Right angle'
//     } else if(deg == 180){
//         return 'Straight angle'
//     } else if(deg < 90 && deg > 0){
//         return 'Acute angle'
//     } else if(deg > 90 && deg < 180){
//         return 'Obtuse angle'
//     } else {
//         return 'there isn`t such angle'
//     }
// }

// let answer1 =  checkDeg(70)
// console.log(answer1)

//----------------------------------------------------------------------------
//Task 5
/*
დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
მიღებული მასივი დააბრუნებინეთ ფუნქციას .

0-50 = F
51-60 = E
61-70 = D
71-80 = C
81-100 = A

საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
[{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/
let studentsArr = [ { name : 'student1', grade : 91},
    {name: 'student2', grade : 71},
    {name: 'student3', grade : 45}
]


function checkStudentGrade(studentsArr){
    for(let i=0; i < studentsArr.length; i++){
        let student = studentsArr[i];
        let mark = student.grade;
        if(mark > 0 && mark < 50){
            student.finalResult = 'F'
        } else if(mark >= 51 && mark < 60){
            student.finalResult = 'E'
        } else if( mark >= 61 && mark < 70){
            student.finalResult = 'D'
        } else if(mark >= 71 && mark < 80){
            student.finalResult = 'C'
        }else if(mark >= 81 && mark < 90){
            student.finalResult = 'B'
        }else if(mark >= 91 && mark < 100){
            student.finalResult = 'A'
        }
    }
    return studentsArr

} 

let Result = checkStudentGrade(studentsArr)
console.log(Result)
