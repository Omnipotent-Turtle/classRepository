class Student {
    constructor(firstName, phoneNumber, lastName, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

let student1 = new Student ('Tom', 'Sawyer', '582-233-2648', 'A');
let student2 = new Student ('Jason', 'Voorhes','500-500-500', 'A' );

student1.introduce();
student2.introduce();