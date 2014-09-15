// Make a `Person` constructor with attributes: 
// `name:string`, `height:string`, `age:number`, `sleeping:boolean`.

var Person = function(name, height, age, sleeping) {
  this.name = name;
  this.height = height;
  this.age = age;
  this.sleeping  = false;
};

// Add prototype methods to `person`: 
// `eat`, `sleep`, and `wakeUp`. 
// (The `sleep` and `wakeUp` methods should toggle `sleeping` to `true/false`, 
// and `eat` should return an eating noise.

Person.prototype.eat = function(){  // parent.prototype
  return "chomp";
};

Person.prototype.sleep = function() {
  if (this.sleeping === true) {
    this.sleeping = false;
  } else {
    console.log(this.name + "is already awake");
  }
};


//child.prototype = new Parent()
//child.prototype.constructor = child

// Make a `Student` prototype that inherits from `person` 
// and has the additional attribute of `studying:boolean`.

var Student = function(studying) {
  this.studying = false;
};

Student.prototype = new Person();
Student.prototype.constructor = Student;

// Add methods to `Student` called `study`, 
// and `stopStudy` to toggle `studying`

Student.prototype.study = function() {
  if (this.studying === false) {
    this.studying = true;
    console.log("status: " + this.studying);
  } else {
    console.log(this.name + " is studying already.");
  }
};

// Add methods to `Student` called `study`, and `stopStudy` to toggle `studying`
Student.prototype.stopStudy = function() {
  this.studying = false;
  console.log("status: " + this.studying);
};

// Override the `sleep` method on `student` to only run `sleep` if `studying` is `false`.
Student.prototype.sleep = function() {
  if(this.studying === false) {
    this.sleeping = true;
    console.log(this.student + " has just fallen asleep.");
  } else {
    this.sleeping = false;
    console.log(this.student + " is studying, can't sleep yet!");
  }
};



 