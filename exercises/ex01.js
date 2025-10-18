// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack')

function calcDistance(stack, a, b) {
  // your code here
  let temp = new Stack()
  let index = 0
  let distanceA
  let distanceB

  while(!stack.isEmpty()){
    const remove = stack.pop()
    temp.push(remove)
    index++

    if(remove === a ){
      distanceA= index

    }
    if(remove === b)
      distanceB = index

  }

  while(!temp.isEmpty()){
    stack.push(temp.pop())
  }
    return distanceA>distanceB? distanceA-distanceB:distanceB-distanceA
}

const students = new Stack()
students.push("John")
students.push("Joe")
students.push("Jane")
students.push("Jill")
students.push("Jim")

const distance = calcDistance(students, "Joe", "Jim")
 console.log(distance) // 3
const distance2 = calcDistance(students, "Joe", "Jill")
console.log(distance2) // 2