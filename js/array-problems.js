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
    }
    ];