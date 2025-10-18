// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function isPalindrome(queue) {
  // your code here
  const temp = new Queue()
  const mid = new Queue()
  const size = queue.size()

  // top half in mid, bottom half in temp, middle
  for(let i=0; i<size; i++){
    if((size%2!==0&&i>size/2)||(size%2===0&&i>(size/2)-1)){
      temp.enqueue(queue.items[i])
    }else if((size%2!==0&&i<(size/2)-1)||(size%2===0&&i<size/2)){
      mid.enqueue(queue.items[i])
    }
  }

  let tempSize = temp.size()
// reversing bottom half
  for(let i=0; i<tempSize-1; i++){
    temp.enqueue(temp.dequeue())
  }

  if(mid.size()!== tempSize){
    return false
  }

  for(let i=0; i<tempSize; i++){
    if(temp.items[i]!==mid.items[i]){
      return false
    }
  }
  return true
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true