
function Student(firstname,lastname,email,phone,dob)
{
    this.firstname= firstname,
    this.lastname = lastname,
    this.email = email,
    this.phonenumber = phone,
    this.dob = dob,
    this.fullname = function() {
         return  this.firstname + ` `+ this.lastname
    },
     this.getAge = function(){
        const d = new Date()
        const dob = new Date(this.dob)
        return  d.getFullYear() - dob.getFullYear()
    }
}
const Great = new Student("great","ezeorji","example@gmail.com","09235268130","2013,10,4") 
const wisdom = new Student("wisdom","ezeorji","example@gmail.com","09235268130","2013,10,4")
const amarachi = new Student("amarachi","ezeorji","example@gmail.com","09235268130","2013,10,4")
const freedom = new Student("freedom","ezeorji","example@gmail.com","09235268130","2013,10,4") 
const uncle = new Student("uncle","ezeorji","example@gmail.com","09235268130","2013,10,4")   
console.log(wisdom.getAge(), wisdom.fullname());
console.log(Great.getAge(), Great.fullname());
console.log(amarachi.getAge(), amarachi.fullname());
console.log(freedom.getAge(), freedom.fullname());
console.log(uncle.getAge(), uncle.fullname());

