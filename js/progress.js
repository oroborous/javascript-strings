$(document).ready(function () {

    populateTable();

    function populateTable() {
        let completed = JSON.parse(window.localStorage.getItem("completed"));
        if (!completed)
            completed = [];

        let tbody = $("tbody").empty();

        problems.forEach(function (item, index) {
            let isCompleted = completed.indexOf(item.name) !== -1;
            let tr = $("<tr>");
            tr.append($("<td>").append($("<a>").text(item.name).click(function () {
                viewProblem(index);
            })));
            tr.append($("<td>").text(isCompleted ? "Complete" : "Incomplete"));
            tr.append($("<td>").css("background-color", isCompleted ? "darkgreen" : "crimson"));
            tbody.append(tr);
        });
    }

    function viewProblem(index) {
        window.localStorage.setItem("lastProblem", index);
        document.location = "index.html";
    }
});