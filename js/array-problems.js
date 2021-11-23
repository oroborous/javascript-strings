let arrayProblems = [
    {
        name: "firstLast6",
        instr: `Given an array of integers, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false`,
        func: {
            name: "firstLast6",
            args: ["nums"]
        },
        tests: [
            {args: [[1,2,6]], ans: true},
            {args: [[6,1,2,3]], ans: true},
            {args: [[13,6,1,2,3]], ans: false},
            {args: [[13,6,1,2,6]], ans: true},
            {args: [[3,2,1]], ans: false},
            {args: [[3,6,1]], ans: false},
            {args: [[3,6]], ans: true},
            {args: [[6]], ans: true},
            {args: [[3]], ans: false},
            {args: [[5,6]], ans: true},
            {args: [[5,5]], ans: false},
            {args: [[1,2,3,4,6]], ans: true},
            {args: [[1,2,3,4]], ans: false}
        ]
    },
    {
        name: "sameFirstLast",
        instr: `Given an array of integers, return true if the array is length 1 or more, and the first element and the last element are equal.

sameFirstLast([1, 2, 3]) → false
sameFirstLast([1, 2, 3, 1]) → true
sameFirstLast([1, 2, 1]) → true`,
        func: {
            name: "sameFirstLast",
            args: ["nums"]
        },
        tests: [
            {args: [[1,2,3]], ans: false},
            {args: [[1,2,3,1]], ans: true},
            {args: [[1,2,1]], ans: true},
            {args: [[7]], ans: true},
            {args: [[]], ans: false},
            {args: [[1,2,3,4,5,1]], ans: true},
            {args: [[1,2,3,4,5,13]], ans: false},
            {args: [[13,2,3,4,5,13]], ans: true},
            {args: [[7,7]], ans: true}
        ]
    },
    {
        name: "makePi",
        instr: `Return an integer array length 3 containing the first 3 digits of pi, {3, 1, 4}.

makePi() → [3, 1, 4]`,
        func: {
            name: "makePi",
            args: []
        },
        tests: [
            {args: [], ans: [3,1,4]}
        ]
    },
    {
        name: "sum3",
        instr: `Given an array of integers length 3, return the sum of all the elements.

sum3([1, 2, 3]) → 6
sum3([5, 11, 2]) → 18
sum3([7, 0, 0]) → 7`,
        func: {
            name: "sum3",
            args: ["nums"]
        },
        tests: [
            {args: [[1,2,3]], ans: 6},
            {args: [[5,11,2]], ans: 18},
            {args: [[7,0,0]], ans: 7},
            {args: [[1,2,1]], ans: 4},
            {args: [[1,1,1]], ans: 3},
            {args: [[2,7,2]], ans: 11}
        ]
    },
    {
        name: "rotateLeft3",
        instr: `Given an array of integers length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

rotateLeft3([1, 2, 3]) → [2, 3, 1]
rotateLeft3([5, 11, 9]) → [11, 9, 5]
rotateLeft3([7, 0, 0]) → [0, 0, 7]`,
        func: {
            name: "rotateLeft3",
            args: ["nums"]
        },
        tests: [
            {args: [[1,2,3]], ans: [2,3,1]},
            {args: [[5,11,9]], ans: [11,9,5]},
            {args: [[7,0,0]], ans: [0,0,7]},
            {args: [[1,2,1]], ans: [2,1,1]},
            {args: [[0,0,1]], ans: [0,1,0]}
        ]
    },
    {
        name: "maxEnd3",
        instr: `Given an array of integers length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

maxEnd3([1, 2, 3]) → [3, 3, 3]
maxEnd3([11, 5, 9]) → [11, 11, 11]
maxEnd3([2, 11, 3]) → [3, 3, 3]`,
        func: {
            name: "maxEnd3",
            args: ["nums"]
        },
        tests: [
            {args: [[1,2,3]], ans: [3,3,3]},
            {args: [[11,5,9]], ans: [11,11,11]},
            {args: [[2,11,3]], ans: [3,3,3]},
            {args: [[11,3,3]], ans: [11,11,11]},
            {args: [[2,2,2]], ans: [2,2,2]},
            {args: [[2,11,2]], ans: [2,2,2]},
            {args: [[0,0,1]], ans: [1,1,1]}
        ]
    },
    {
        name: "countEvens",
        instr: `Return the number of even integers in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

countEvens([2, 1, 2, 3, 4]) → 3
countEvens([2, 2, 0]) → 3
countEvens([1, 3, 5]) → 0`,
        func: {
            name: "countEvens",
            args: ["nums"]
        },
        tests: [
            {args: [[2,1,2,3,4]], ans: 3},
            {args: [[2,2,0]], ans: 3},
            {args: [[1,3,5]], ans: 0},
            {args: [[]], ans: 0},
            {args: [[11,9,0,1]], ans: 1},
            {args: [[2,11,9,0]], ans: 2},
            {args: [[2]], ans: 1},
            {args: [[2,5,12]], ans: 2}
        ]
    },
    {
        name: "bigDiff",
        instr: `Given an array length 1 or more of integers, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.

bigDiff([10, 3, 5, 6]) → 7
bigDiff([7, 2, 10, 9]) → 8
bigDiff([2, 10, 7, 2]) → 8`,
        func: {
            name: "bigDiff",
            args: ["nums"]
        },
        tests: [
            {args: [[10,3,5,6]], ans: 7},
            {args: [[7,2,10,9]], ans: 8},
            {args: [[2,10,7,2]], ans: 8},
            {args: [[2,10]], ans: 8},
            {args: [[10,2]], ans: 8},
            {args: [[10,0]], ans: 10},
            {args: [[2,3]], ans: 1},
            {args: [[2,2]], ans: 0},
            {args: [[5,1,6,1,9,9]], ans: 8},
            {args: [[7,6,8,5]], ans: 3},
            {args: [[7,7,6,8,5,5,6]], ans: 3}
        ]
    }
    ];