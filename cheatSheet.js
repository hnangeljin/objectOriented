//object literal
var user = {
	id: 1234,
	name: "Joe"
}
//objects with constructor function
function address(city, street){
	this.city = city;
	this.street = street;
	this.fullAddress = this.city + " " + this.street;
	this.changeStreet = function(newStreet){
		this.street = newStreet;
	}
	
}
//create instance of the object 
var myAddress = new address("New York", "Broadway");
//accessing object attributes and methods
console.log(myAddress.city);
console.log(myAddress.street);
console.log(myAddress.fullAddress);
myAddress.changeStreet("Kiely");
console.log(myAddress.street);
//prototype
console.log(myAddress.country);
address.prototype.country = "USA";
console.log(myAddress.country);
//list the properties of the object
function list(element){
	for(key in element){
		console.log(key);
	}
}
list(myAddress);
//Multiplier
function Multiplier(number){
	this.multiply = number*1;
	this.getCurrentValue = this.multiply*number;
}
var result = new Multiplier(20);
console.log(result.multiply);
console.log(result.getCurrentValue);

//create a photo object
function photo(photoname, loca, pictureId){
	this.pictureId = pictureId;
	this.photoname=photoname;
	this.loca=loca;
}
var photo1 = new photo("cat", "ny", 111);
var photo2 = new photo("dog", "ny", 112);
var photo3 = new photo("bird", "ny", 113);
//create album object
function album(alname){
	this.alname = alname;
	this.photolist = [];//array to store photo
	this.AllPhoto = "";//list all the photo id
	this.addPhoto = function(addPicture){
		this.AllPhoto = this.AllPhoto + " " + addPicture.pictureId;
		this.photolist.push(addPicture);
	}
}
//example to test
var album1 = new album("My pic");
album1.addPhoto(photo1);
album1.addPhoto(photo2);
album1.addPhoto(photo3);
//print the list
console.log(album1.AllPhoto);
//print a specific photo info
console.log(album1.photolist[1].photoname);
console.log(album1.photolist[1].loca);
//person object
function person(pname, paddress){
	this.pname = pname;
	this.paddress = paddress;
}
//teacher
function teacher(teacherId, pname, paddress){
	person.apply(this);
	this.teacherId = teacherId;
	this.paddress = paddress;
	this.pname = pname;
	
}
//student
function student(sid, pname, paddress){
	person.apply(this);
	this.sid = sid;
	this.pname = pname;
	this.paddress = paddress;
}
//school
function school(schoolName){
	this.schoolName = schoolName;
	this.schoolTeachers = [];
	this.schoolStudents = [];
	this.addTeacher = function(newTeacher){
		this.schoolTeachers.push(newTeacher);
	}
	this.addStudent = function(newStudent){
		this.schoolStudents.push(newStudent);
	}
}
//test
var qc = new school("queens");
var student1 = new student(123, "Joe", "13 street");
var student2 = new student(124, "John", "19 street");
var student3 = new student(125, "Jason", "23 street");
var student4 = new student(126, "James", "43 street");
qc.addStudent(student1);
qc.addStudent(student2);
qc.addStudent(student3);
qc.addStudent(student4);
var teacher1 = new teacher("abc", "Zack", "133 street");
var teacher2 = new teacher("and", "George", "123 street");
qc.addTeacher(teacher1);
qc.addTeacher(teacher2);






