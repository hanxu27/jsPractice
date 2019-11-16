const ListNode = val => {
  this.val = val;
  this.next = null;
};

var addTwoNumbers = function(l1, l2) {
  let i = 0;
  let output = [];
  let adder = 0;
  while (l1[i] || l2[i] || adder) {
    if (l1[i] + l2[i] >= 10) {
      output[i] = (l1[i] + l2[i] + adder) % 10;
      adder = 1;
    } else {
      output[i] = (l1[i] || 0) + (l2[i] || 0) + adder;
      adder = 0;
    }
    i++;
  }

  return output;
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([1], [1, 1, 1]));
console.log(addTwoNumbers([9, 9, 9], [9, 9, 9]));
