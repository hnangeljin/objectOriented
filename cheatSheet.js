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


function photo(photoname, loca, pic){
	this.pic = pic;
	this.photoname=photoname;
	this.loca=loca;
}
var photo1 = new photo("cat", "ny", "sssssss");

function album(alname){
	photo.call(this);
	this.alname = alname;
	this.add = function(addPicture){
		addPicture.alname = alname;
	}
}
var album1 = new album("My pic");
album1.add(photo1);
album.prototype = Object.create(photo.prototype);


function person(pname, paddress){
	this.pname = pname;
	this.address = address;
}

function teacher(teacherTitle){
	this.teacherTitle = teacherTitle;
	person.apply(this);
}
function student(sid){
	this.sid = sid;
	person.apply(this);
}
function school("schoolName"){
	this.schoolName = schoolName;
}




