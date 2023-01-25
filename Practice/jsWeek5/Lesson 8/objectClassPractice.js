/* Object-oriented programming, or O.O.P is a way of looking at coding parts as objects.
Seeing them as objects allows one to modularize code and understand that, just like in the real world,
objects can interact with other objects. Like a hammer to a nail, or batteries to a remote. */

/* Classes are just blueprints FROM which object instances are created. "A house's blueprint is not the house."
These classes must be instantiated using the [new] keyword such as the variables below.

class Methods can be run on instances by referencing the instantiation and using dot notation after the instance then
writing out the method name(called a method because it is a function within the object known as "Class")*/

class Student {
    constructor(firstName, lastName, phoneNumber, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce (){
        console.log(`${this.firstName}, ${this.lastName}, ${this.phoneNumber}, ${this.grade}`);
    }
}

/* Within the constructor above, I accidentally caused an [undefined] return because I only used (this.variableName)
but I did not define said variable within the constructor by adding an [ = ] sign after and writing out the variable's definition. */


let student1 = new Student ('John', 'Wayne', '4555555', 'C');
let student2 = new Student ('Casey', 'Singleton', '5624557515', 'B');
let student3 = new Student ('Lamar', 'Evans', '937145678', 'A')

student1.introduce();
student2.introduce();
student3.introduce();