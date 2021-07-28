var timeDisplay = $("#currentDay");
var tasks = $(".time-block");
var times = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
];
var identify = [];
const textValue = document.getElementsByClassName(".textarea");

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
  console.log(textValue);
});
const value = textValue.value;
console.log(value);

//NEED A FUNCTION TO CHECK AGAINST TIME TO KNOW WHT TO COLOR
