var timeDisplay = $("#currentDay");
var tasks = $(".time-block");
var times = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM"];
var identify = [];

function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplay.text(rightNow);
  setInterval(() => {
    var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    timeDisplay.text(rightNow);
  }, 1000);
}
displayTime();

function taskList() {
  for (let i = 0; i < times.length; i++) {
    var rows = document.createElement("div");
    rows.classList.add("row");
    var timeSlot = document.createElement("div");
    timeSlot.classList.add("hour", "col-1");
    timeSlot.textContent = times[i];
    var areaText = document.createElement("textarea");
    areaText.classList.add("col-10");
    var bttn = document.createElement("div");
    bttn.classList.add("saveBtn", "col-1");
    bttn.innerHTML = `<i class="bi bi-save"></i>`;
    tasks.append(rows);
    $(rows).append(timeSlot, areaText, bttn);
  }
}
taskList();

var button = document.getElementsByClassName(".saveBtn");
$(".saveBtn").on("click", function () {
  console.log("tesitcles");
});

// document.querySelector(".saveBtn").addEventListener("click", saveTask() => {
//   document.querySelector("button").click();
// })
