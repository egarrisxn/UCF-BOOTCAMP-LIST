$(document).ready(function () {

  // Display current time
  $("#currentDay").text(dayjs().format("dddd | MM.DD.YYYY | h:mm:ss A"));

  setInterval(function () {
    $("#currentDay").text(dayjs().format("dddd | MM.DD.YYYY | h:mm:ss A"));
    // Update colors every second
    setColors();
  }, 1000);

  // Theme Switcher
  $("#themeSwitcher").click(function () {
    $("body").toggleClass("dark-theme");
    $("header").toggleClass("dark-theme");
    $("textarea").toggleClass("dark-theme");
  });

  // Load saved content from local storage
  loadContent();

  // Button to save text
  var saveButtons = document.querySelectorAll(".saveBtn");
  saveButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      saveContent();
    });
  });

  // Call setColors() initially
  setColors();
});

// Change box colors according to time
function setColors() {
  const timeBlocks = document.querySelectorAll(".time-block");
  const currentHour = dayjs().hour();
  timeBlocks.forEach((block) => {
    var timeID = block.getAttribute("id").split("-")[1];
    var blockHour = parseInt(timeID);
    if (blockHour < currentHour) {
      block.classList.add("past");
      block.classList.remove("present", "future");
    } else if (blockHour > currentHour) {
      block.classList.add("future");
      block.classList.remove("past", "present");
    } else {
      block.classList.add("present");
      block.classList.remove("past", "future");
    }
  });
}

// Save content to local storage
function saveContent() {
  var descriptions = document.querySelectorAll(".description");
  var descText = [];
  descriptions.forEach((element) => {
    descText.push(element.value);
  });
  localStorage.setItem("descriptionData", JSON.stringify(descText));
}

// Load content from local storage and populate textareas
function loadContent() {
  var savedData = localStorage.getItem("descriptionData");
  if (savedData) {
    var descriptions = document.querySelectorAll(".description");
    var descArray = JSON.parse(savedData);
    descriptions.forEach((element, index) => {
      element.value = descArray[index];
    });
  }
}
