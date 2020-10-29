/* 
Basic Algorithm Scripting: Chunky MonkeyPassed
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

//Solution Two
function chunkArrayInGroups(arr, size) {                //1
  // Break it up.
  var arr2 = [];                                        //2
  for (var i = 0; i < arr.length; i += size) {          //3
    arr2.push(arr.slice(i, i + size));                  //4
  }
  return arr2;                                          //5
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3));


//Notes
/*
//1
function which takes in two arguments
    Arg1: an array
    Arg2: The size of the array

//2
Initialization of an empty array

//3&&4
for loop with three conditions 
1. The loop start
2. The length of the loop
3. The amount the loop should increment by after each session

The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
arr.slice([begin[, end]])

[https://devdocs.io/javascript/global_objects/array/slice]

0 3 []
3 6 [ [ 'a', 'b', 'c' ] ]
6 9 [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
9 12 [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ] ]
[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ], [ 'j' ] ]

The loop will push each chunk into arr2 via the slice method and increment both arguments of the slice method after each iteration. 

The arguments will increment as above

//5
Will return the final state of arr2
[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ], [ 'j' ] ]

*/