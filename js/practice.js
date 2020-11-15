let currentProblem = 0;

$(document).ready(function () {
    var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
        lineNumbers: true,
        mode: "javascript"
    });

    $("#testButton").click(testSolution);
    $("#nextButton").click(function () {
        loadProblem(Math.min(currentProblem + 1, problems.length));
    });
    $("#backButton").click(function () {
        loadProblem(Math.max(currentProblem - 1, 0));
    })

    readStorage();
    loadProblem(currentProblem);

    function readStorage() {
        let lastProblem = window.localStorage.getItem("lastProblem");
        currentProblem = lastProblem ? parseInt(lastProblem) : 0;

        if (!window.localStorage.getItem("completed")) {
            window.localStorage.setItem("completed", JSON.stringify([]));
        }
    }

    function updateLastProblem() {
        window.localStorage.setItem("lastProblem", currentProblem);
    }

    function enableButtons() {
        let back = $("#backButton").removeAttr("disabled");
        let next = $("#nextButton").removeAttr("disabled");

        if (currentProblem === 0) {
            back.attr("disabled", "disabled");
        }
        if (currentProblem === problems.length - 1) {
            next.attr("disabled", "disabled");
        }
    }

    function loadProblem(index) {
        currentProblem = index;
        updateLastProblem();
        enableButtons();

        let problem = problems[currentProblem];

        $("#problemName").text(problem.name);
        $("#instructions").html(problem.instr.replace(/(?:\r\n|\r|\n)/g, "<br>"));
        $("#tests").empty();

        let answer = loadAnswer(problem.name);
        answer = answer || `function ${problem.func.name} (${problem.func.args.join(", ")}) {\n\t\n}`;
        editor.doc.setValue(answer);
    }

    function testSolution() {
        let code = editor.doc.getValue();
        console.log(code);

        let problem = problems[currentProblem];
        let tbody = $("tbody").empty();
        let completed = true;

        problem.tests.forEach(function (item, index) {
            let result, correct;
            try {
                let func = createFunction(problem.func.args);
                result = func(...item.args);
                correct = result === item.ans;
            } catch (err) {
                result = err;
                correct = false;
            } finally {
                tbody.append(createTableRow(problem.func.name, item, result, correct));
                completed = correct && completed;
            }
        });

        saveAnswer(problem.name);

        if (completed)
            problemComplete(problem.name);
    }

    function saveAnswer(name) {
        let answers = window.localStorage.getItem("answers");
        answers = answers ? JSON.parse(answers) : {};
        answers[name] = editor.doc.getValue();
        window.localStorage.setItem("answers", JSON.stringify(answers));
    }

    function loadAnswer(name) {
        let answers = window.localStorage.getItem("answers");
        if (answers) {
            answers = JSON.parse(answers);
            if (answers[name]) {
                return answers[name];
            }
        }

        return "";
    }

    function problemComplete(name) {
        let problems = window.localStorage.getItem("completed");
        problems = problems ? JSON.parse(problems) : [];
        if (problems.indexOf(name) === -1)
            problems.push(name);
        window.localStorage.setItem("completed", JSON.stringify(problems));
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
        tr.append($("<td>").text(`${funcName}(${printableArgs(test.args)});`));
        tr.append($("<td>").text(test.ans));
        tr.append($("<td>").text(result));
        tr.append($("<td>").text(correct ? "OK" : "X"));
        tr.append($("<td>&nbsp;</td>").css("background-color", correct ? "darkgreen" : "crimson"));
        return tr;
    }

    function printableArgs(args) {
        let newArgs = [];
        args.forEach(function (item, index) {
            if (typeof item === "string")
                newArgs.push(`"${item}"`);
        });
        return newArgs.join(", ");
    }
});