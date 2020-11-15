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
    }
];