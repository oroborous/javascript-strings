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
        name: "teenSum",
        instr: `Given 2 integers, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.

teenSum(3, 4) → 7
teenSum(10, 13) → 19
teenSum(13, 2) → 19`,
        func: {
            name: "teenSum",
            args: ["a", "b"]
        },
        tests: [
            {args: [3, 4], ans: 7},
            {args: [10, 13], ans: 19},
            {args: [13, 2], ans: 19},
            {args: [3, 19], ans: 19},
            {args: [10, 10], ans: 20},
            {args: [6, 14], ans: 19},
            {args: [15, 2], ans: 19},
            {args: [19, 19], ans: 19},
            {args: [19, 20], ans: 19},
            {args: [2, 18], ans: 19 },
            {args: [12, 4], ans: 16},
            {args: [2, 20], ans: 22},
            {args: [2, 17], ans: 19},
            {args: [2, 16], ans: 19},
            {args: [6, 7], ans: 13}
        ]
    },
    {
        name: "answerCell",
        instr: `Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.

answerCell(false, false, false) → true
answerCell(false, false, true) → false
answerCell(true, false, false) → false`,
        func: {
            name: "answerCell",
            args: ["isMorning", "isMom", "isAsleep"]
        },
        tests: [
            {args: [false, false, false], ans: true},
            {args: [false, false, true], ans: false},
            {args: [true, false, false], ans: false},
            {args: [true, true, false], ans: true},
            {args: [false, true, false], ans: true},
            {args: [true, true, true], ans: false}
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
    },
    {
        name: "fizzString",
        instr: `Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged.

fizzString("fig") → "Fizz"
fizzString("dib") → "Buzz"
fizzString("fib") → "FizzBuzz"
fizzString("xxxx") → "xxxx"`,
        func: {
            name: "fizzString",
            args: ["str"]
        },
        tests: [
            {args: ["fig"], ans: "Fizz"},
            {args: ["dib"], ans: "Buzz"},
            {args: ["fib"], ans: "FizzBuzz"},
            {args: ["abc"], ans: "abc"},
            {args: ["fooo"], ans: "Fizz"},
            {args: ["booo"], ans: "booo"},
            {args: ["ooob"], ans: "Buzz"},
            {args: ["fooob"], ans: "FizzBuzz"},
            {args: ["f"], ans: "Fizz"},
            {args: ["b"], ans: "Buzz"},
            {args: ["abcb"], ans: "Buzz"},
            {args: ["Hello"], ans: "Hello"},
            {args: ["Hellob"], ans: "Buzz"},
            {args: ["af"], ans: "af"},
            {args: ["bf"], ans: "bf"},
            {args: ["fb"], ans: "FizzBuzz"}
        ]
    },
    {
        name: "twoAsOne",
        instr: `Given three integers, a b c, return true if it is possible to add two of the ints to get the third.

twoAsOne(1, 2, 3) → true
twoAsOne(3, 1, 2) → true
twoAsOne(3, 2, 2) → false`,
        func: {
            name: "twoAsOne",
            args: ["a", "b", "c"]
        },
        tests: [
            {args: [1,2,3], ans: true},
            {args: [3,1,2], ans: true},
            {args: [3,2,2], ans: false},
            {args: [2,3,1], ans: true},
            {args: [5,3,-2], ans: true},
            {args: [5,3,-3], ans: false},
            {args: [2,5,3], ans: true},
            {args: [9,5,5], ans: false},
            {args: [9,4,5], ans: true},
            {args: [5,4,9], ans: true},
            {args: [3,3,0], ans: true},
            {args: [3,3,2], ans: false}
        ]
    },
    {
        name: "lastDigit",
        instr: `Given three integers, a b c, return true if two or more of them have the same rightmost digit. The ints are non-negative. Note: the % "mod" operator computes the remainder, e.g. 17 % 10 is 7.

lastDigit(23, 19, 13) → true
lastDigit(23, 19, 12) → false
lastDigit(23, 19, 3) → true`,
        func: {
            name: "lastDigit",
            args: ["a", "b", "c"]
        },
        tests: [
            {args: [23,19,13], ans: true},
            {args: [23,19,12], ans: false},
            {args: [23,19,3], ans: true},
            {args: [23,19,39], ans: true},
            {args: [1,2,3], ans: false},
            {args: [1,1,2], ans: true},
            {args: [14,25,43], ans: false},
            {args: [14,25,45], ans: true},
            {args: [248,106,1002], ans: false},
            {args: [248,106,1008], ans: true},
            {args: [10,11,20], ans: true},
            {args: [0,11,0], ans: true}
        ]
    },
    {
        name: "lessBy10",
        instr: `Given three integers, a b c, return true if one of them is 10 or more less than one of the others.

lessBy10(1, 7, 11) → true
lessBy10(1, 7, 10) → false
lessBy10(11, 1, 7) → true`,
        func: {
            name: "lessBy10",
            args: ["a", "b", "c"]
        },
        tests: [
            {args: [1,7,11], ans: true},
            {args: [1,7,10], ans: false},
            {args: [11,1,7], ans: true},
            {args: [10,7,1], ans: false},
            {args: [-10,2,2], ans: true},
            {args: [2,11,11], ans: false},
            {args: [3,3,30], ans: true},
            {args: [3,3,3], ans: false},
            {args: [10,1,11], ans: true},
            {args: [10,11,1], ans: true},
            {args: [10,11,2], ans: false},
            {args: [3,30,3], ans: true},
            {args: [2,2,-8], ans: true},
            {args: [2,8,12], ans: true}
        ]
    },
    {
        name: "alarmClock",
        instr: `Given two 6-sided dice rolls, each in the range 1..6, return the sum. However, if noDoubles is true, if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its value was 6.

alarmClock(1, false) → "7:00"
alarmClock(0, true) → "off"
alarmClock(0, false) → "10:00"`,
        func: {
            name: "alarmClock",
            args: ["day", "vacation"]
        },
        tests: [
            {args: [1, false], ans: "7:00"},
            {args: [5, false], ans: "7:00"},
            {args: [0, false], ans: "10:00"},
            {args: [6, false], ans: "10:00"},
            {args: [0, true], ans: "off"},
            {args: [6, true], ans: "off"},
            {args: [1, true], ans: "10:00"},
            {args: [3, true], ans: "10:00"},
            {args: [5, true], ans: "10:00"}
        ]
    },
    {
        name: "teaParty",
        instr: `We are having a party with amounts of tea and candy. Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5. However, if either tea or candy is at least double the amount of the other one, the party is great (2). However, in all cases, if either tea or candy is less than 5, the party is always bad (0).

teaParty(6, 8) → 1
teaParty(3, 8) → 0
teaParty(20, 6) → 2`,
        func: {
            name: "teaParty",
            args: ["tea", "candy"]
        },
        tests: [
            {args: [6,8], ans: 1},
            {args: [3,8], ans: 0},
            {args: [20,6], ans: 2},
            {args: [12,6], ans: 2},
            {args: [11,6], ans: 1},
            {args: [11,4], ans: 0},
            {args: [4,5], ans: 0},
            {args: [5,5], ans: 1},
            {args: [6,6], ans: 1},
            {args: [5,10], ans: 2},
            {args: [5,9], ans: 1},
            {args: [10,4], ans: 0},
            {args: [10,20], ans: 2}
        ]
    },
    {
        name: "withoutDoubles",
        instr: `Given two 6-sided dice rolls, each in the range 1..6, return the sum. However, if noDoubles is true, if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its value was 6.

withoutDoubles(2, 3, true) → 5
withoutDoubles(3, 3, true) → 7
withoutDoubles(3, 3, false) → 6
withoutDoubles(6, 6, true) → 7`,
        func: {
            name: "withoutDoubles",
            args: ["die1", "die2", "noDoubles"]
        },
        tests: [
            {args: [2,3,true], ans: 5},
            {args: [3,3,true], ans: 7},
            {args: [3,3,false], ans: 6},
            {args: [2,3,false], ans: 5},
            {args: [5,4,true], ans: 9},
            {args: [5,4,false], ans: 9},
            {args: [5,5,true], ans: 11},
            {args: [5,5,false], ans: 10},
            {args: [6,6,true], ans: 7},
            {args: [6,6,false], ans: 12},
            {args: [1,6,true], ans: 7},
            {args: [6,1,false], ans: 7}
        ]
    },
    {
        name: "maxMod5",
        instr: `Given two integer values, return whichever value is larger. However if the two values have the same remainder when divided by 5, then the return the smaller value. However, in all cases, if the two values are the same, return 0. Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.

maxMod5(2, 3) → 3
maxMod5(6, 2) → 6
maxMod5(3, 2) → 3`,
        func: {
            name: "maxMod5",
            args: ["a", "b"]
        },
        tests: [
            {args: [2,3], ans: 3},
            {args: [6,2], ans: 6},
            {args: [3,2], ans: 3},
            {args: [8,12], ans: 12},
            {args: [7,12], ans: 7},
            {args: [11,6], ans: 6},
            {args: [2,7], ans: 2},
            {args: [7,7], ans: 0},
            {args: [9,1], ans: 9},
            {args: [9,14], ans: 9},
            {args: [1,2], ans: 2},
            {args: [6,6], ans: 0}
        ]
    }
];