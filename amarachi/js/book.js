// function Author(firstname, lastname, email, phone){
    // this.firstname = firstname,
    // this.lastname = lastname,
    // this.email = email,
    // this.phone = phone,?}

// function Book (title, yearpublished,)
// {
//     this.title = title,
//     this.yearpublished = yearpublished,
//     this.author = author,
//     this.getAuthor = function(){
//         return  this.author
//     }
// }

// const author1 = new Author("John", "Doe", "john@gmail.com", "+234708535373")
// const author2 = new Author("Williams", "Shakespare", "william@gmail.com", "+2349088776655")

// const book1 = new Book("Purple Hibiscus", 2011, author1)
// const book2 = new Book("The merchant of venice", 1990, author2)

// console.log(book1)
// console.log(book2)


function car(wheel, colour, model, name){
    this.wheel = wheel,
    this.colour = colour,
    this.model = model,
    this.name = name
}
const newcar = new car("iron", "purple", "330",  "lexus" )
console.log(newcar.name, newcar.colour, newcar.model, newcar.wheel);


function human(firstname, lastname, email, phonenumber){
    this.firstname = firstname,
    this.lastname = lastname,
    this.email = email,
    this.phonenumber = phonenumber
}
const newhuman = new human("great", "wisdom", "example@gmail.com", "09187654321")
console.log(newhuman.firstname, newhuman.lastname, newhuman.email, newhuman.phonenumber);