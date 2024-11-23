import lecturer from "./lecturer.js";
import student from "./student.js";
import course from "./course.js";
import Department from "./department.js";

const student_01 = new student("Great", "Doe", "great10@mail.com", "12345", "AES/2024/csc/0078", "+2347062676439")
const student_02 = new student("wisdom", "Doe", "wisdom12@mail.com", "121345", "AES/2024/csc/0079", "+2347063827399")
const student_03 = new student("amarachi", "Doe", "amarachi13@mail.com", "123245", "AES/2024/csc/0080", "+23468434938410")
const course_01 = new course(
    'cryptography',
    '101',
    'first semester',
    '100',
    'computer science'
)

const course_02 = new course(
    'machine learning',
    '201',
    'second semester',
    '200',
    'computer science'
)

const course_03 = new course(
    'Artificial Intelligence',
    '301',
    'first semester',
    '301',
    'computer science'
)

const lecturer_01 = new lecturer(
    'John',
    'Doe',
    'johndoe@gmail.com',
    '121345',
    '+2321893402133820',
    'ss/0011',
)
const lecturer_02 = new lecturer(
    'Jane',
    'Doe',
    'janedoe@gmail.com',
    '121345',
    '+2637183237492303',
    'ss/0014',
)
const department_01 = new Department(
    'computer science',
    'computerscience@gmail.com'
)
department_01.addlecture(lecturer_01)
department_01.addlecture(lecturer_02)
student_01.addcourse(course_01)
student_01.addcourse(course_02)
student_01.addcourse(course_03)

console.log(student_01);
console.log(student_02);
console.log(student_03);
console.log(course_01);
console.log(course_02);
console.log(course_03);
lecturer_01.addcourse(course_01)
lecturer_01.addcourse(course_02)
lecturer_01.addcourse(course_03)
lecturer_02.addcourse(course_01)
lecturer_02.addcourse(course_02)
lecturer_02.addcourse(course_03)
console.log(lecturer_01);
console.log(lecturer_02);
console.log(department_01);