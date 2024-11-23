function Department(name,email){
this.name = name;
this.email = email;
this.lecturers = [];
this.addlecture = function(lecturer){
    this.lecturers.push(lecturer);
}
}
export default Department;
