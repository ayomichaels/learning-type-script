// // LESSON 5: DATA TYPES

// // let myName: string = "Bob"
// // console.log(myName);

// // console.log(myName);

// // let numberOfWheels: number = 4
// // let isSubmit: boolean = false

// ////////////////////////////////

// //LESSON 7: DEFINING CUSTOM TYPES
// // type Address = {
// //     street: string
// //     city: string
// //     country: string 
// // }
// // type Person = {
// //     name: string
// //     age: number
// //     isStudent: boolean
// //     address?: Address //nested object. ? denotes optionality, meaning the address doesn't have to be filled
// // }



// // let person1 :Person = {
// //     name: "Bola",
// //     age: 44,
// //     isStudent: true,
// //     // address: { 
// //     //     street: '123 Ohipitan',
// //     //     city: 'Lagos',
// //     //     country: 'Nigeria'
// //     // }
// // }

// // let person2 :Person = {
// //     name: "Ahmad",
// //     age: 39,
// //     isStudent: false,
// //     address: {
// //         street: '5 Brown',
// //         city: 'Kaduna',
// //         country: 'Nigeria'
// //     }
// // }

// // /// TYPE ARRAYS

// // let ages: number[] = [100, 101]

// // let people: Person[] = [person1, person2]

// ///////////////   UNION  ////////////////////
// type UserRole = 'guest' | 'member' | 'admin'
// type User ={
//     username: string
//     role: UserRole
// }

// const users: User[]= [
//     {username: "john_doe", role: "member"},
//     {username: "jane_doe", role: "admin"},
//     {username: "guest_user", role: "guest"}
// ]

// function fetchUserDetails(username: string) : User {
//     const user = users.find(user => user.username === username)
//     if (!user){
//         throw new Error (`User with username ${username} not found`)
//     }
//     return user
// }
// type UserRole = 'guest' | 'member' | 'admin'
// let userRole: UserRole = 'admin'

// // ///// UTILITY TYPES// 

// type User = {
//     id: number
//     username: string
//     role: "member" | "contributor" | "admin"
// }

// type UpdatedUser = Partial<User> // Partial Type

// let nextUserId = 1

// const users: User[] = [
//     {id: nextUserId++, username: "john_doe", role: "member"},
//     {id: nextUserId++, username: "jane_smith", role: "contributor"},
//     {id: nextUserId++, username: "alice_jones", role: "admin"},
//     {id: nextUserId++, username: "charlie_brown", role: "member"}

// ]

// function updateUser(id: number, updates:UpdatedUser) :User | undefined{
//     const foundUser = users.find(user=> id === user.id)
//     if (!foundUser) {
//         console.error("User not found");
//         return 
        
//     }
//     // const updatedUser = Object.assign(foundUser, updates)
//     // return updatedUser
//     Object.assign(foundUser, updates)
// }

// // updateUser(1, {username: "new_john_dow"})
// // updateUser(4, {role: "contributor"})

// function addNewUser(newUser: Omit<User, "id">): User {
//     //used Omit to remove what is not needed nd can be handled by a function
//     const user: User = {
//         id: nextUserId++,
//         ...newUser //spread operator
//     }
//     users.push(user)
//     return user
// }

// addNewUser({username: "joe_schmoe", role: "member"})
// console.log(users);


/////////GENERICS///////////
const gameScores = [14,21,33,42,59]
const favoriteThings = ['raindrops on roses', 'whiskers on kittens', 'bright copper kettles', 'warm woolen mittens']
const voters = [{name: 'Alice', age: 42}, {name: 'Bob', age: 77}]

function getLastIten<Type>(array: Type[]): Type | undefined {
    return array[array.length-1]
}

console.log(getLastIten(gameScores))
console.log(getLastIten(favoriteThings))
console.log(getLastIten(voters))