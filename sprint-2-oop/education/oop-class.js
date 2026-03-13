/* OOP - Class*/

class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    get studentName() {
        return this.name;
    }

    get studentAge() {
        return this.age;
    }

    get studentCourse() {
        return this.course;
    }

    set studentCourse(course) {
        if (course > 6) {
            console.log("Uncorrect course");
            return;
        }
        this.course = course;
    }

    //static value
    static studentType = "magister";
}

const student = new Student("Maksym", 21, 5);

console.log(student);
console.log(student.studentName);
console.log(student.studentAge);
console.log(student.studentCourse);
console.log(student.studentType); // undefined
console.log(Student.studentType);
student.studentCourse = 6
console.log(student);
console.log(student.studentCourse);