class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		this.fullname = firstname + " " + lastname
		this.email =firstname.toLowerCase() + "." + lastname.toLowerCase() + "@company.com"

		// Complete the code!
	}
}
let emp1 =  new Employee("John", "Smith")
console.log(emp1)

let emp2 =  new Employee("Mary",  "Sue")
console.log(emp2);

let emp3 =  new Employee("Antony", "Walker")
console.log(emp3)




// ## EXAMPLE 2
// class Player {
//     constructor(username, email, role) {
//         if (email.length < 10) {
//             console.log("WARNING, EMAIL TOO SHORT!"); 
//         }
//         this.username = username;
//         this.email = email;
//         this.role = role;
//         this.score = 0;
//     }

//     setNewScore(n) {
//         this.score = n;
//     }

//     printScore() {
//         // console.log("Player " + this.username + ":    " + this.score);
//         // template literal
//         console.log(`Player ${this.username}: ${this.score}`);
//     }
// }

// const playerOne = new Player("BrainbowWarrior85", "brain@test.com", "Player");
// playerOne.printScore(); // at this point, playerOne has a score of zero
// playerOne.setNewScore(9001);
// playerOne.setNewScore(2);
// playerOne.printScore();
// console.log(playerOne.username);