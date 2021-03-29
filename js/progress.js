$(document).ready(function () {

    populateTable();

    function populateTable() {
        let currentProblemSet = window.localStorage.getItem(PROBLEM_SET) || "Function";
        let problemSet = [];

        $("title").text(currentProblemSet);
        $("h1").text(currentProblemSet + " Practice: Progress");

        switch (currentProblemSet) {
            case "String":
                problemSet = stringProblems;
                break;
            case "Function":
                problemSet = functionProblems;
                break;
        }

        let completed = JSON.parse(window.localStorage.getItem(COMPLETED + currentProblemSet));
        if (!completed)
            completed = [];

        let tbody = $("tbody").empty();

        problemSet.forEach(function (item, index) {
            let isCompleted = completed.indexOf(item.name) !== -1;
            let tr = $("<tr>");
            tr.append($("<td>").append($("<span>")
                .text(item.name)
                .addClass("problem-link")
                .on("click", function () {
                    viewProblem(index);
                })));
            tr.append($("<td>").text(isCompleted ? "Complete" : "Incomplete"));
            tr.append($("<td>").css("background-color", isCompleted ? "darkgreen" : "crimson"));
            tbody.append(tr);
        });
    }

    function viewProblem(index) {
        window.localStorage.setItem(PROBLEM, index);
        document.location = "index.html";
    }
});