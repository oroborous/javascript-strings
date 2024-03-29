let currentProblem = 0;
let currentProblemSet;
let problemSet = [];

$(document).ready(function () {
    let editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
        lineNumbers: true,
        mode: "javascript"
    });

    $("#testButton").on("click", testSolution);
    $("#nextButton").on("click", function () {
        loadProblem(Math.min(currentProblem + 1, problemSet.length));
    });
    $("#backButton").on("click", function () {
        loadProblem(Math.max(currentProblem - 1, 0));
    });

    let selectBox = $("#problemSet");

    const params = new URLSearchParams(window.location.search);

    loadProblemSet(params.get("problems") || window.localStorage.getItem(PROBLEM_SET) || selectBox.val());

    selectBox.val(currentProblemSet);
    selectBox.on("change", function() {
        loadProblemSet(this.value);
        loadLastProblem();
        loadProblem(currentProblem);
    });

    loadLastProblem();

    loadProblem(currentProblem);

    function loadProblemSet(problemSetName) {
        currentProblemSet = problemSetName;
        window.localStorage.setItem(PROBLEM_SET, problemSetName);

        switch (problemSetName) {
            case "String":
                problemSet = stringProblems;
                break;
            case "Function":
                problemSet = functionProblems;
                break;
            case "Conditional":
                problemSet = conditionalProblems;
                break;
            case "Array":
                problemSet = arrayProblems;
                break;
        }

        $("title").text(problemSetName + " Practice");
        $("h1").text(problemSetName + " Practice");
    }

    function loadLastProblem() {
        let lastProblem = window.localStorage.getItem(PROBLEM + currentProblemSet);
        currentProblem = lastProblem ? parseInt(lastProblem) : 0;

        if (!window.localStorage.getItem(COMPLETED + currentProblemSet)) {
            window.localStorage.setItem(COMPLETED + currentProblemSet, JSON.stringify([]));
        }
    }

    function updateLastProblem() {
        window.localStorage.setItem(PROBLEM + currentProblemSet, currentProblem);
    }

    function enableButtons() {
        let back = $("#backButton").removeAttr("disabled");
        let next = $("#nextButton").removeAttr("disabled");

        if (currentProblem === 0) {
            back.attr("disabled", "disabled");
        }
        if (currentProblem === problemSet.length - 1) {
            next.attr("disabled", "disabled");
        }
    }

    function parseInstructions(instr) {
        // encode HTML
        instr = instr.replace(/(?:<)/g, "&lt;");
        instr = instr.replace(/(?:>)/g, "&gt;");
        // replace newlines with <br>
        return instr.replace(/(?:\r\n|\r|\n)/g, "<br>");
    }

    function loadProblem(index) {
        currentProblem = index;
        updateLastProblem();
        enableButtons();

        let problem = problemSet[currentProblem];

        $("#problemName").text(problem.name);
        $("#instructions").html(parseInstructions(problem.instr));
        $("#tests").empty();

        let answer = loadAnswer(problem.name);
        answer = answer || `function ${problem.func.name} (${problem.func.args.join(", ")}) {\n  \n}`;
        editor.doc.setValue(answer);
    }

    function testSolution() {
        let code = editor.doc.getValue();
        console.log(code);

        let problem = problemSet[currentProblem];
        let tbody = $("tbody").empty();
        let completed = true;

        problem.tests.forEach(function (item, index) {
            let result, correct;
            try {
                let func = createFunction(problem.func.args);
                // save now, in case it crashes when trying
                // to run the function
                saveAnswer(problem.name);
                result = func(...copyArgs(item.args));
                correct = _.isEqual(result, item.ans);
            } catch (err) {
                result = err;
                correct = false;
            } finally {
                tbody.append(createTableRow(problem.func.name, item, result, correct));
                completed = correct && completed;
            }
        });


        if (completed)
            problemComplete(problem.name);
    }

    function copyArgs(args) {
        return JSON.parse(JSON.stringify(args));
    }

    function saveAnswer(name) {
        let answers = window.localStorage.getItem(ANSWERS + currentProblemSet);
        answers = answers ? JSON.parse(answers) : {};
        answers[name] = editor.doc.getValue();
        window.localStorage.setItem(ANSWERS + currentProblemSet, JSON.stringify(answers));
    }

    function loadAnswer(name) {
        let answers = window.localStorage.getItem(ANSWERS + currentProblemSet);
        if (answers) {
            answers = JSON.parse(answers);
            if (answers[name]) {
                return answers[name];
            }
        }

        return "";
    }

    function problemComplete(name) {
        let completedProblems = window.localStorage.getItem(COMPLETED + currentProblemSet);
        completedProblems = completedProblems ? JSON.parse(completedProblems) : [];
        if (completedProblems.indexOf(name) === -1)
            completedProblems.push(name);
        window.localStorage.setItem(COMPLETED + currentProblemSet, JSON.stringify(completedProblems));
    }

    function createFunction(functionArgs) {
        let body = editor.doc.getValue();
        body = body.substring(body.indexOf("{") + 1, body.lastIndexOf("}")).trim();
        let func = new Function(...functionArgs, body);
        console.log(func);
        return func;
    }

    function createTableRow(funcName, test, result, correct) {
        let tr = $("<tr>");
        tr.append($("<td>").text(`${funcName}(${quotedArgs(test.args)});`));
        tr.append($("<td>").text(quotedString(test.ans)));
        tr.append($("<td>").text(quotedString(result)));
        tr.append($("<td>").text(correct ? "OK" : "X"));
        tr.append($("<td>&nbsp;</td>").css("background-color", correct ? "darkgreen" : "crimson"));
        return tr;
    }

    function quotedString(ans) {
        if (typeof ans === "string")
            return `"${ans}"`;
        else if (ans instanceof Array)
            return `[ ${ans.join(", ")} ]`;
        return ans;
    }

    function quotedArgs(args) {
        let newArgs = [];
        args.forEach(function (item, index) {
            if (typeof item === "string")
                newArgs.push(`"${item}"`);
            else if (item instanceof Array)
                newArgs.push(`[ ${item.join(", ")} ]`);
            else
                newArgs.push(item);
        });
        return newArgs.join(", ");
    }
});
