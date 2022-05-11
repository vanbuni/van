class User{

    id = 0
    constructor(fName,lName,age, email,password){
        this.fName = fName,
        this.lName = lName,
        this.age = age,
        this.email = email,
        this.password = password

    }
}

var user1 = new User('Van','Bradley',32,'vanatgolds@aol.com','Football1!')
console.log(user1);


