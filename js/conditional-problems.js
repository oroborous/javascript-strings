let conditionalProblems = [
    {
        name: "caughtSpeeding",
        instr: `You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.

caughtSpeeding(60) → 0
caughtSpeeding(80) → 1
caughtSpeeding(81) → 2`,
        func: {
            name: "caughtSpeeding",
            args: ["speed"]
        },
        tests: [
            {args: [60], ans: 0},
            {args: [61], ans: 1},
            {args: [80], ans: 1},
            {args: [81], ans: 2},
            {args: [90], ans: 2}
        ]
    },
    {
        name: "sortaSum",
        instr: `Given 2 integers, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.

sortaSum(3, 4) → 7
sortaSum(9, 4) → 20
sortaSum(10, 11) → 21`,
        func: {
            name: "sortaSum",
            args: ["a", "b"]
        },
        tests: [
            {args: [3, 4], ans: 7},
            {args: [9, 4], ans: 20},
            {args: [10, 11], ans: 21},
            {args: [12, -3], ans: 9},
            {args: [-3, 12], ans: 9},
            {args: [4, 5], ans: 9},
            {args: [4, 6], ans: 20},
            {args: [14, 6], ans: 20},
            {args: [14, 7], ans: 21}
        ]
    },
    {
        name: "love6",
        instr: `The number 6 is a truly great number. Given two integers, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.

love6(6, 4) → true
love6(4, 5) → false
love6(1, 5) → true`,
        func: {
            name: "love6",
            args: ["a", "b"]
        },
        tests: [
            {args: [6, 4], ans: true},
            {args: [4, 5], ans: false},
            {args: [1, 5], ans: true},
            {args: [1, 6], ans: true},
            {args: [1, 8], ans: false},
            {args: [1, 7], ans: true},
            {args: [7, 5], ans: false},
            {args: [8, 2], ans: true},
            {args: [6, 6], ans: true},
            {args: [-6, 2], ans: false},
            {args: [-4, -10], ans: true},
            {args: [-7, 1], ans: false},
            {args: [7, -1], ans: true},
            {args: [-6, 12], ans: true},
            {args: [-2, -4], ans: false},
            {args: [7, 1], ans: true},
            {args: [0, 9], ans: false},
            {args: [8, 3], ans: false},
            {args: [3, 3], ans: true},
            {args: [3, 4], ans: false}
        ]
    },
    {
        name: "specialEleven",
        instr: `We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the given non-negative number is special. Use the % "mod" operator.

specialEleven(22) → true
specialEleven(23) → true
specialEleven(24) → false`,
        func: {
            name: "specialEleven",
            args: ["num"]
        },
        tests: [
            {args: [22], ans: true},
            {args: [23], ans: true},
            {args: [24], ans: false},
            {args: [21], ans: false},
            {args: [11], ans: true},
            {args: [12], ans: true},
            {args: [10], ans: false},
            {args: [9], ans: false},
            {args: [8], ans: false},
            {args: [0], ans: true},
            {args: [1], ans: true},
            {args: [2], ans: false},
            {args: [121], ans: true},
            {args: [122], ans: true},
            {args: [123], ans: false},
            {args: [46], ans: false},
            {args: [49], ans: false},
            {args: [52], ans: false},
            {args: [54], ans: false},
            {args: [55], ans: true}
        ]
    },
    {
        name: "more20",
        instr: `Return true if the given non-negative number is 1 or 2 more than a multiple of 20. Use the % "mod" operator.

more20(20) → true
more20(21) → true
more20(22) → false`,
        func: {
            name: "more20",
            args: ["num"]
        },
        tests: [
            {args: [20], ans: false},
            {args: [21], ans: true},
            {args: [22], ans: true},
            {args: [23], ans: false},
            {args: [25], ans: false},
            {args: [30], ans: false},
            {args: [31], ans: false},
            {args: [59], ans: false},
            {args: [60], ans: false},
            {args: [61], ans: true},
            {args: [62], ans: true},
            {args: [1020], ans: false},
            {args: [1021], ans: true},
            {args: [1000], ans: false},
            {args: [1001], ans: true},
            {args: [50], ans: false},
            {args: [55], ans: false},
            {args: [40], ans: false},
            {args: [41], ans: true},
            {args: [39], ans: false},
            {args: [42], ans: true}
        ]
    }
];