var timeDisplay = $("#currentDay");
var currentHour = moment().hour();
var tasks = $(".time-block");
var times = [
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
];
var identify = [];
const textValue = document.getElementsByClassName(".textarea")[0];

function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] HH:mm:ss a");
  timeDisplay.text(rightNow);
  setInterval(() => {
    var rightNow = moment().format("MMM DD, YYYY [at] HH:mm:ss a");
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
    var bttn = document.createElement("button");
    bttn.classList.add("saveBtn", "col-1");
    bttn.innerHTML = `<i class="bi bi-save"></i>`;
    bttn.setAttribute("id", times[i]);
    tasks.append(rows);
    $(rows).append(timeSlot, areaText, bttn);
    var blockTime = times[i];
    console.log(blockTime);
  }
}
taskList();

$(".saveBtn").each(function () {
  var blockHour = $(this).attr("id");

  if (blockHour < currentHour) {
    $(this).parent().addClass("past");
    $(this).parent().removeClass("future");
    $(this).parent().removeClass("present");
  } else if (blockHour > currentHour) {
    $(this).parent().addClass("future");
    $(this).parent().removeClass("past");
    $(this).parent().removeClass("present");
  } else if (blockHour == currentHour) {
    $(this).parent().addClass("present");
    $(this).parent().removeClass("past");
    $(this).parent().removeClass("future");
  }
  console.log(currentHour, blockHour);
});

$(".saveBtn").click(function () {
  console.log($(this).prev().val());
  localStorage.setItem($(this).attr("id"), $(this).prev().val());
});
