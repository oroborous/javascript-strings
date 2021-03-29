let functionProblems = [
    {
        name: "shout",
        instr: `Given a string name, return the same name but in all uppercase.

shout("Stacy") → "STACY"
shout("Hikaru") → "HIKARU"
shout("Jose") → "JOSE"`,
        func: {
            name: "shout",
            args: ["name"]
        },
        tests: [
            {args: ["Manish"], ans: "MANISH"},
            {args: ["Dakota"], ans: "DAKOTA"},
            {args: ["Alain"], ans: "ALAIN"},
            {args: ["Beth Anne"], ans: "BETH ANNE"}
        ]
    },
    {
        name: "whisper",
        instr: `Given a string name, return the same name but in all lowercase.

whisper("Stacy") → "stacy"
whisper("Hikaru") → "hikaru"
whisper("Jose") → "jose"`,
        func: {
            name: "whisper",
            args: ["name"]
        },
        tests: [
            {args: ["Manish"], ans: "manish"},
            {args: ["Dakota"], ans: "dakota"},
            {args: ["Alain"], ans: "alain"},
            {args: ["Beth Anne"], ans: "beth anne"}
        ]
    },
    {
        name: "starring",
        instr: `Given two strings - an actor name and a movie name - return a string that says "Movie, starring Actor!".

starring("Sandra Bullock", "Gravity") → "Gravity, starring Sandra Bullock!"
starring("Suraj Sharma", "Life of Pi") → "Life of Pi, starring Suraj Sharma!"
starring("Song Kang-ho", "Parasite") → "Parasite, starring Song Kang-ho!"`,
        func: {
            name: "starring",
            args: ["actor", "movie"]
        },
        tests: [
            {args: ["Yalitza Aparicio", "Roma"], ans: "Roma, starring Yalitza Aparicio!"},
            {args: ["Saoirse Ronan", "Lady Bird"], ans: "Lady Bird, starring Saoirse Ronan!"},
            {args: ["Taraji P. Henson", "Hidden Figures"], ans: "Hidden Figures, starring Taraji P. Henson!"},
            {args: ["Tom Hardy", "Mad Max: Fury Road"], ans: "Mad Max: Fury Road, starring Tom Hardy!"}
        ]
    },
    {
        name: "power",
        instr: `Given two numbers - an base and an exponent - return the value of the base raised to the exponent.

power(2, 3) → 8
power(10, 2) → 100
power(1, 20) → 1`,
        func: {
            name: "power",
            args: ["base", "exponent"]
        },
        tests: [
            {args: [10, 3], ans: 1000},
            {args: [10.1, 3], ans: 1030.301},
            {args: [2, 32], ans: 4294967296},
            {args: [5, 5], ans: 3125},
            {args: [-1, 9], ans: -1}
        ]
    },
    {
        name: "maximum",
        instr: `Given four numbers, return the largest value.

maximum(2, 3, 4, 5) → 5
maximum(-10, -20, -5, -99) → -5
maximum(19.5, 8.7, 19.5, 4.3) → 19.5`,
        func: {
            name: "maximum",
            args: ["num1", "num2", "num3", "num4"]
        },
        tests: [
            {args: [10, 84, 23, 6], ans: 84},
            {args: [-5, -4, 0, -2], ans: 0},
            {args: [0.99, 0.999, 0.9, 0.9999], ans: 0.9999},
            {args: [1, 1, 1, 1], ans: 1},
            {args: [5e3, 5e2, 5e3, 5e1], ans: 5000}
        ]
    },
    {
        name: "maxMinSum",
        instr: `Given four numbers, return the sum of the largest and smallest values.

maxMinSum(2, 3, 4, 5) → 7
maxMinSum(-10, -20, -5, -99) → -104
maxMinSum(19.5, 8.7, 19.5, 4.3) → 23.8`,
        func: {
            name: "maxMinSum",
            args: ["num1", "num2", "num3", "num4"]
        },
        tests: [
            {args: [10, 84, 23, 6], ans: 90},
            {args: [-5, -4, 0, -2], ans: -5},
            {args: [99, 100, -99, -100], ans: 0},
            {args: [1, 1, 1, 1], ans: 2},
            {args: [5e3, 5e2, 5e3, 5e1], ans: 5050}
        ]
    },
    {
        name: "firstChar",
        instr: `Given a string, return the first character. (The string will have at least one character.)

firstChar("apple") → "a"
firstChar("Computer") → "C"
firstChar("98.1") → "9"
firstChar("<p>") → "<"`,
        func: {
            name: "firstChar",
            args: ["str"]
        },
        tests: [
            {args: ["pizza"], ans: "p"},
            {args: ["Johannesburg"], ans: "J"},
            {args: ["¿Qué?"], ans: "¿"},
            {args: [" * * * "], ans: " "},
            {args: ["hello world"], ans: "h"}
        ]
    },
    {
        name: "initials",
        instr: `Given a two strings - a first name and last name - return the person's initials separated with periods. (Both strings will have at least one character.)

initials("Louise", "Glück") → "L.G."
initials("Peter", "Handke") → "P.H."
initials("Olga", "Tokarczuk") → "O.T."`,
        func: {
            name: "initials",
            args: ["first", "last"]
        },
        tests: [
            {args: ["Kazuo", "Ishiguro"], ans: "K.I."},
            {args: ["Bob", "Dylan"], ans: "B.D."},
            {args: ["Svetlana", "Alexievich"], ans: "S.A."},
            {args: ["Mo", "Yan"], ans: "M.Y."},
            {args: ["Tomas", "Tranströmer"], ans: "T.T."}
        ]
    },
    {
        name: "numChars",
        instr: `Given a string, return the number of characters it contains.

numChars("puppy") → 5
numChars("ABCABC") → 6
numChars("Ctrl + Alt + Del") → 16
numChars("") → 0`,
        func: {
            name: "numChars",
            args: ["str"]
        },
        tests: [
            {args: ["A-B-C-D-E"], ans: 9},
            {args: ["cheese pizza"], ans: 12},
            {args: ["¿Qué?"], ans: 5},
            {args: ["  "], ans: 2},
            {args: ["JavaScript"], ans: 10}
        ]
    },
    {
        name: "lastChar",
        instr: `Given a string, return the last character. (The string will have at least one character.)

lastChar("apple") → "e"
lastChar("Computer") → "r"
lastChar("98.1") → "1"
lastChar("<p>") → ">"`,
        func: {
            name: "lastChar",
            args: ["str"]
        },
        tests: [
            {args: ["pizza"], ans: "a"},
            {args: ["Johannesburg"], ans: "g"},
            {args: ["¿Qué?"], ans: "?"},
            {args: [" * * * "], ans: " "},
            {args: ["hello world"], ans: "d"}
        ]
    },
    {
        name: "dollarsCents",
        instr: `Given a number, return it as a string formatted with 2 decimal places.

dollarsCents(13) → "13.00"
dollarsCents(-125.045) → "-125.05")
dollarsCents(0) → "0.00"
dollarsCents(123456.7) → "123456.70"`,
        func: {
            name: "dollarsCents",
            args: ["amount"]
        },
        tests: [
            {args: [-45], ans: "-45.00"},
            {args: [3.3], ans: "3.30"},
            {args: [0.999999], ans: "1.00"},
            {args: [8], ans: "8.00"},
            {args: [-7.205], ans: "-7.21"}
        ]
    },
    {
        name: "stringToWholeNum",
        instr: `Given a string, return its value as a number data type with no decimal places.

stringToWholeNum("8") → 8
stringToWholeNum("12.9") → 12
stringToWholeNum("0.0") → 0
stringToWholeNum("0.456") → 0`,
        func: {
            name: "stringToWholeNum",
            args: ["str"]
        },
        tests: [
            {args: ["-45"], ans: -45},
            {args: ["3.3"], ans: 3},
            {args: ["0.999999"], ans: 0},
            {args: ["8"], ans: 8},
            {args: ["-7.2"], ans: -7}
        ]
    },
    {
        name: "stringToDecimalNum",
        instr: `Given a string, return its value as a number data type with decimal places.

stringToDecimalNum("8") → 8
stringToDecimalNum("12.9") → 12.9
stringToDecimalNum("0.0") → 0
stringToDecimalNum("0.456") → 0.456`,
        func: {
            name: "stringToDecimalNum",
            args: ["str"]
        },
        tests: [
            {args: ["-45"], ans: -45},
            {args: ["3.3"], ans: 3.3},
            {args: ["0.999999"], ans: 0.999999},
            {args: ["8"], ans: 8},
            {args: ["-7.02"], ans: -7.02}
        ]
    },
    {
        name: "grandTotal",
        instr: `Given two strings - subtotal and tax - return their sum as a number data type with decimal places.

grandTotal("8.0", "0.4") → 8.4
grandTotal("12.90", "0.645") → 13.545
grandTotal("0.0", "0.0") → 0
grandTotal("100.456", "5.0228") → 105.4788`,
        func: {
            name: "grandTotal",
            args: ["subtotal", "tax"]
        },
        tests: [
            {args: ["45", "2.699"], ans: 47.699},
            {args: ["1", "0.05"], ans: 1.05},
            {args: ["0.999999", "0.059999"], ans: 1.059998},
            {args: ["8.00", "0.48"], ans: 8.48},
            {args: ["2500", "125"], ans: 2625}
        ]
    },
    {
        name: "grandTotal2",
        instr: `Given two strings - subtotal and tax - return their sum as a string data type with two decimal places.

grandTotal2("8.0", "0.4") → "8.40"
grandTotal2("12.90", "0.645") → "13.55"
grandTotal2("0.0", "0.0") → "0.00"
grandTotal2("100.456", "5.0228") → "105.48"`,
        func: {
            name: "grandTotal2",
            args: ["subtotal", "tax"]
        },
        tests: [
            {args: ["45", "2.699"], ans: "47.70"},
            {args: ["1", "0.05"], ans: "1.05"},
            {args: ["0.999999", "0.059999"], ans: "1.06"},
            {args: ["8.00", "0.48"], ans: "8.48"},
            {args: ["2500", "125"], ans: "2625.00"}
        ]
    }
];