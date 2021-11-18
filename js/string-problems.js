let stringProblems = [
    {
        name: "helloName",
        instr: `Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

helloName("Bob") → "Hello Bob!"
helloName("Alice") → "Hello Alice!"
helloName("X") → "Hello X!"`,
        func: {
            name: "helloName",
            args: ["name"]
        },
        tests: [
            {args: ["Bob"], ans: "Hello Bob!"},
            {args: ["Alice"], ans: "Hello Alice!"},
            {args: ["X"], ans: "Hello X!"},
            {args: ["xyz"], ans: "Hello xyz!"}
        ]
    },
    {
        name: "makeAbba",
        instr: `Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

makeAbba("Hi", "Bye") → "HiByeByeHi"
makeAbba("Yo", "Alice") → "YoAliceAliceYo"
makeAbba("What", "Up") → "WhatUpUpWhat"`,
        func: {
            name: "makeAbba",
            args: ["a", "b"]
        },
        tests: [
            {args: ["Hi", "Bye"], ans: "HiByeByeHi"},
            {args: ["Yo", "Alice"], ans: "YoAliceAliceYo"},
            {args: ["aaa", "bbb"], ans: "aaabbbbbbaaa"},
            {args: ["x", ""], ans: "xx"},
            {args: ["Ya", "Ya"], ans: "YaYaYaYa"}
        ]
    },
    {
        name: "makeTags",
        instr: `The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

makeTags("i", "Yay") → "<i>Yay</i>"
makeTags("i", "Hello") → "<i>Hello</i>"
makeTags("cite", "Yay") → "<cite>Yay</cite>"`,
        func: {
            name: "makeTags",
            args: ["tag", "word"]
        },
        tests: [
            {args: ["i", "Yay"], ans: "<i>Yay</i>"},
            {args: ["i", "Hello"], ans: "<i>Hello</i>"},
            {args: ["cite", "Yay"], ans: "<cite>Yay</cite>"},
            {args: ["body", "Heart"], ans: "<body>Heart</body>"},
            {args: ["i", ""], ans: "<i></i>"}
        ]
    },
    {
        name: "makeOuterWord",
        instr: `Given a "outer" string of length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the outer string, e.g. "<<word>>".

makeOuterWord("<<>>", "Yay") → "<<Yay>>"
makeOuterWord("<<>>", "WooHoo") → "<<WooHoo>>"
makeOuterWord("[[]]", "word") → "[[word]]"`,
        func: {
            name: "makeOuterWord",
            args: ["outer", "word"]
        },
        tests: [
            {args: ["<<>>", "Yay"], ans: "<<Yay>>"},
            {args: ["<<>>", "WooHoo"], ans: "<<WooHoo>>"},
            {args: ["[[]]", "word"], ans: "[[word]]"},
            {args: ["HHoo", "Hello"], ans: "HHHellooo"},
            {args: ["abyz", "YAY"], ans: "abYAYyz"}
        ]
    },
    {
        name: "extraEnd",
        instr: `Given a string, return a new string that is made from 3 copies of the last 2 characters of the original string. The given string's length will be at least 2.

extraEnd("Hello") → "lololo"
extraEnd("ab") → "ababab"
extraEnd("Hi") → "HiHiHi"`,
        func: {
            name: "extraEnd",
            args: ["str"]
        },
        tests: [
            {args: ["Hello"], ans: "lololo"},
            {args: ["ab"], ans: "ababab"},
            {args: ["Hi"], ans: "HiHiHi"},
            {args: ["Candy"], ans: "dydydy"},
            {args: ["Code"], ans: "dedede"}
        ]
    },
    {
        name: "firstTwo",
        instr: `Given a string, return a string made of its first two chars, so the string "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "".

firstTwo("Hello") → "He"
firstTwo("abcdefg") → "ab"
firstTwo("ab") → "ab"`,
        func: {
            name: "firstTwo",
            args: ["str"]
        },
        tests: [
            {args: ["Hello"], ans: "He"},
            {args: ["abcedfg"], ans: "ab"},
            {args: ["ab"], ans: "ab"},
            {args: ["a"], ans: "a"},
            {args: [""], ans: ""},
            {args: ["Kitten"], ans: "Ki"},
            {args: ["hi"], ans: "hi"},
            {args: ["hiya"], ans: "hi"}
        ]
    },
    {
        name: "firstHalf",
        instr: `Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

firstHalf("WooHoo") → "Woo"
firstHalf("HelloThere") → "Hello"
firstHalf("abcdef") → "abc"`,
        func: {
            name: "firstHalf",
            args: ["str"]
        },
        tests: [
            {args: ["WooHoo"], ans: "Woo"},
            {args: ["HelloThere"], ans: "Hello"},
            {args: ["abcdef"], ans: "abc"},
            {args: ["ab"], ans: "a"},
            {args: [""], ans: ""},
            {args: ["0123456789"], ans: "01234"},
            {args: ["kitten"], ans: "kit"}
        ]
    },
    {
        name: "withoutEnd",
        instr: `Given a string, return a version without the first and last char, so "Hello" yields "ell". The given string's length will be at least 2.

withoutEnd("Hello") → "ell"
withoutEnd("java") → "av"
withoutEnd("coding") → "odin"`,
        func: {
            name: "withoutEnd",
            args: ["str"]
        },
        tests: [
            {args: ["Hello"], ans: "ell"},
            {args: ["java"], ans: "av"},
            {args: ["coding"], ans: "odin"},
            {args: ["code"], ans: "od"},
            {args: ["ab"], ans: ""},
            {args: ["Chocolate!"], ans: "hocolate"},
            {args: ["woohoo"], ans: "ooho"},
            {args: ["kitten"], ans: "itte"}
        ]
    },
    {
        name: "comboString",
        instr: `Given two strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

comboString("Hello", "hi") → "hiHellohi"
comboString("hi", "Hello") → "hiHellohi"
comboString("aaa", "b") → "baaab"`,
        func: {
            name: "comboString",
            args: ["a", "b"]
        },
        tests: [
            {args: ["Hello", "hi"], ans: "hiHellohi"},
            {args: ["hi", "Hello"], ans: "hiHellohi"},
            {args: ["aaa", "b"], ans: "baaab"},
            {args: ["b", "aaa"], ans: "baaab"},
            {args: ["aaa", ""], ans: "aaa"},
            {args: ["", "bb"], ans: "bb"},
            {args: ["aaa", "1234"], ans: "aaa1234aaa"},
            {args: ["aaa", "bb"], ans: "bbaaabb"},
            {args: ["a", "bb"], ans: "abba"},
            {args: ["bb", "a"], ans: "abba"},
            {args: ["xyz", "ab"], ans: "abxyzab"}
        ]
    },
    {
        name: "nonStart",
        instr: `Given 2 strings, return their concatenation, except omit the first character of each. The strings will be at least length 1.

nonStart("Hello", "There") → "ellohere"
nonStart("java", "code") → "avaode"
nonStart("shotl", "java") → "hotlava"`,
        func: {
            name: "nonStart",
            args: ["a", "b"]
        },
        tests: [
            {args: ["Hello", "There"], ans: "ellohere"},
            {args: ["java", "code"], ans: "avaode"},
            {args: ["shotl", "java"], ans: "hotlava"},
            {args: ["ab", "xy"], ans: "by"},
            {args: ["ab", "x"], ans: "b"},
            {args: ["x", "ac"], ans: "c"},
            {args: ["a", "x"], ans: ""},
            {args: ["kit", "kat"], ans: "itat"},
            {args: ["mart", "dart"], ans: "artart"}
        ]
    },
    {
        name: "left2",
        instr: `Given a string, return a version where the first 2 characters are moved to the end. The string length will be at least 2.

left2("Hello") → "lloHe"
left2("java") → "vaja"
left2("Hi") → "Hi"`,
        func: {
            name: "left2",
            args: ["str"]
        },
        tests: [
            {args: ["Hello"], ans: "lloHe"},
            {args: ["java"], ans: "vaja"},
            {args: ["Hi"], ans: "Hi"},
            {args: ["code"], ans: "deco"},
            {args: ["cat"], ans: "tca"},
            {args: ["12345"], ans: "34512"},
            {args: ["Chocolate"], ans: "ocolateCh"},
            {args: ["bricks"], ans: "icksbr"}
        ]
    },
    {
        name: "right2",
        instr: `Given a string, return a version where the last 2 characters are moved to the start. The string length will be at least 2.

right2("Hello") → "loHel"
right2("java") → "vaja"
right2("Hi") → "Hi"`,
        func: {
            name: "right2",
            args: ["str"]
        },
        tests: [
            {args: ["Hello"], ans: "loHel"},
            {args: ["java"], ans: "vaja"},
            {args: ["Hi"], ans: "Hi"},
            {args: ["code"], ans: "deco"},
            {args: ["cat"], ans: "atc"},
            {args: ["12345"], ans: "45123"}
        ]
    },
    {
        name: "withoutEnd2",
        instr: `Given a string, return a version without both the first and last character of the string. The string may be any length, including 0.

withouEnd2("Hello") → "ell"
withouEnd2("abc") → "b"
withouEnd2("ab") → ""`,
        func: {
            name: "withoutEnd2",
            args: ["str"]
        },
        tests: [
            {args: ["Hello"], ans: "ell"},
            {args: ["abc"], ans: "b"},
            {args: ["ab"], ans: ""},
            {args: ["a"], ans: ""},
            {args: [""], ans: ""},
            {args: ["coldy"], ans: "old"},
            {args: ["java code"], ans: "ava cod"}
        ]
    },
    {
        name: "endsLy",
        instr: `Given a string, return true if it ends in "ly".

endsLy("oddly") → true
endsLy("y") → false
endsLy("oddy") → false`,
        func: {
            name: "endsLy",
            args: ["str"]
        },
        tests: [
            {args: ["oddly"], ans: true},
            {args: ["y"], ans: false},
            {args: ["oddy"], ans: false},
            {args: ["oddl"], ans: false},
            {args: ["olydd"], ans: false},
            {args: ["ly"], ans: true},
            {args: [""], ans: false},
            {args: ["falsey"], ans: false},
            {args: ["evenly"], ans: true}
        ]
    },
    // begin single loop stringProblems
    {
        name: "doubleChar",
        instr: `Given a string, return a string where for every character in the original, there are two characters.

doubleChar("The") → "TThhee"
doubleChar("AAbb") → "AAAAbbbb"
doubleChar("Hi-There") → "HHii--TThheerree"`,
        func: {
            name: "doubleChar",
            args: ["str"]
        },
        tests: [
            {args: ["The"], ans: "TThhee"},
            {args: ["AAbb"], ans: "AAAAbbbb"},
            {args: ["Hi-There"], ans: "HHii--TThheerree"},
            {args: ["Word!"], ans: "WWoorrdd!!"},
            {args: ["!!"], ans: "!!!!"},
            {args: [""], ans: ""},
            {args: ["a"], ans: "aa"},
            {args: ["."], ans: ".."},
            {args: ["aa"], ans: "aaaa"}
        ]
    },
    {
        name: "countHi",
        instr: `Return the number of times that the string "hi" appears anywhere in the given string.

countHi("abc hi ho") → 1
countHi("ABChi hi") → 2
countHi("hihi") → 2`,
        func: {
            name: "countHi",
            args: ["str"]
        },
        tests: [
            {args: ["abc hi ho"], ans: 1},
            {args: ["ABChi hi"], ans: 2},
            {args: ["hihi"], ans: 2},
            {args: ["hiHIhi"], ans: 2},
            {args: [""], ans: 0},
            {args: ["h"], ans: 0},
            {args: ["hi"], ans: 1},
            {args: ["Hi is no HI on ahI"], ans: 0},
            {args: ["hiho not HOHIhi"], ans: 2}
        ]
    },
    {
        name: "catDog",
        instr: `Return true if the strings "cat" and "dog" appear the same number of times in the given string.

catDog("catdog") → true
catDog("catcat") → false
catDog("1cat1cadodog") → true`,
        func: {
            name: "catDog",
            args: ["str"]
        },
        tests: [
            {args: ["catdog"], ans: true},
            {args: ["catcat"], ans: false},
            {args: ["1cat1cadodog"], ans: true},
            {args: ["catxxdogxxxdog"], ans: false},
            {args: ["catxdogxdogxcat"], ans: true},
            {args: ["dogdogcat"], ans: false},
            {args: ["dogogcat"], ans: true},
            {args: ["dog"], ans: false},
            {args: ["cat"], ans: false},
            {args: ["ca"], ans: true},
            {args: ["c"], ans: true},
            {args: [""], ans: true}
        ]
    },
    {
        name: "endOther",
        instr: `Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive").

endOther("Hiabc", "abc") → true
endOther("AbC", "HiaBc") → true
endOther("abc", "abXabc") → true`,
        func: {
            name: "endOther",
            args: ["a", "b"]
        },
        tests: [
            {args: ["Hiabc", "abc"], ans: true},
            {args: ["AbC", "HiaBc"], ans: true},
            {args: ["abc", "abXabc"], ans: true},
            {args: ["Hiabc", "abcd"], ans: false},
            {args: ["Hiabc", "bc"], ans: true},
            {args: ["abc", "abc"], ans: true},
            {args: ["xyz", "12xyz"], ans: true},
            {args: ["yz", "12xz"], ans: false},
            {args: ["Z", "12xz"], ans: true},
            {args: ["12", "12"], ans: true},
            {args: ["abcXYZ", "abcDEF"], ans: false}
        ]
    },
    {
        name: "mixString",
        instr: `Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

mixString("abc", "xyz") → "axbycz"
mixString("Hi", "There") → "HTihere"
mixString("xxxx", "There") → "xTxhxexre"`,
        func: {
            name: "mixString",
            args: ["a", "b"]
        },
        tests: [
            {args: ["abc", "xyz"], ans: "axbycz"},
            {args: ["Hi", "There"], ans: "HTihere"},
            {args: ["xxxx", "There"], ans: "xTxhxexre"},
            {args: ["xxx", "X"], ans: "xXxx"},
            {args: ["2/", "27 around"], ans: "22/7 around"},
            {args: ["", "Hello"], ans: "Hello"},
            {args: ["Abc", ""], ans: "Abc"},
            {args: ["", ""], ans: ""},
            {args: ["a", "b"], ans: "ab"},
            {args: ["ax", "b"], ans: "abx"},
            {args: ["So", "Long"], ans: "SLoong"}
        ]
    },
    {
        name: "getSandwich",
        instr: `A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

getSandwich("breadjambread") → "jam"
getSandwich("xxbreadjambreadyy") → "jam"
getSandwich("xxbreadyy") → ""`,
        func: {
            name: "getSandwich",
            args: ["str"]
        },
        tests: [
            {args: ["breadjambread"], ans: "jam"},
            {args: ["xxbreadjambreadyy"], ans: "jam"},
            {args: ["xxbreadyy"], ans: ""},
            {args: ["xxbreadbreadjambreadyy"], ans: "breadjam"},
            {args: ["breadAbread"], ans: "A"},
            {args: ["breadbread"], ans: ""},
            {args: ["abcbreaz"], ans: ""},
            {args: ["xyz"], ans: ""},
            {args: [""], ans: ""},
            {args: ["breadbreaxbread"], ans: "breax"},
            {args: ["breaxbreadybread"], ans: "y"},
            {args: ["breadbreadbreadbread"], ans: "breadbread"}
        ]
    }
];