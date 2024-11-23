function lecturer(firstname, lastname, email, password, phonenumber, staffId){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.staffId = staffId;
    this.courses=[];

    this.fullname = function(){return this.firstname +" "+ this.lastname; };

    this .addcourse=function(course){
        this.courses.push(course)
    }
}


export default lecturer