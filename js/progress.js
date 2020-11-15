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
            tr.append($("<td>").text(item.name));
            tr.append($("<td>").text(isCompleted ? "Complete" : "Incomplete"));
            tr.append($("<td>").css("background-color", isCompleted ? "darkgreen" : "crimson"));
            tbody.append(tr);
        });
    }
});