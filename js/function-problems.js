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
    }
];