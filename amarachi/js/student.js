function student(firstname, lastname, email, password, regno, phonenumber){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.regno = regno;
    this.phonenumber = phonenumber
    this.courses=[];
    this.getfullName = function () {
        return this.firstname + " "+ this.lastname
    }
    this .addcourse=function(course){
        this.courses.push(course)
    }
}

export default student