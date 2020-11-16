var problems = [
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
    }
];