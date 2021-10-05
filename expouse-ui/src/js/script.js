window.addEventListener("load", (event) => {
  document.getElementById("eventInfoBasicView").style.display = "block";
  document.getElementById("eventFeedSectionDiv").style.display = "none";
  document.getElementById("attendeeSectionDiv").style.display = "none";
  document.getElementById("chatSectionDiv").style.display = "none";
  document.getElementById("notificationSectionDiv").style.display = "none";
  document.getElementById("myMeetingsSectionDiv").style.display = "none";
  document.getElementById("addWidgetSection").style.display = "none";
  document.getElementById("generalColorSettingsSection").style.display = "none";
  document.getElementById("eachColorSetingsSection").style.display = "none";
  document.getElementById("commonBlackTransparentDiv").style.display = "none";
});

function changeView(id) {
  document.getElementById("eventInfoBasicView").style.display = "none";
  document.getElementById(id).style.display = "block";
}

function showDefaultView() {
  document.getElementById("eventInfoBasicView").style.display = "block";
  document.getElementById("eventFeedSectionDiv").style.display = "none";
  document.getElementById("attendeeSectionDiv").style.display = "none";
  document.getElementById("chatSectionDiv").style.display = "none";
  document.getElementById("notificationSectionDiv").style.display = "none";
  document.getElementById("myMeetingsSectionDiv").style.display = "none";
}

function addWidget() {}

function openGeneralColorSettings() {
  document.getElementById("addWidgetSection").style.display = "none";
  document.getElementById("generalColorSettingsSection").style.display =
    "block";
  document.getElementById("eachColorSetingsSection").style.display = "none";
  document.getElementById("commonBlackTransparentDiv").style.display = "block";
}

function closeSection() {
  document.getElementById("addWidgetSection").style.display = "none";
  document.getElementById("generalColorSettingsSection").style.display = "none";
  document.getElementById("eachColorSetingsSection").style.display = "none";
  document.getElementById("commonBlackTransparentDiv").style.display = "none";
}

function openIndividualColorSettings() {
  document.getElementById("addWidgetSection").style.display = "none";
  document.getElementById("generalColorSettingsSection").style.display = "none";
  document.getElementById("eachColorSetingsSection").style.display = "block";
  document.getElementById("commonBlackTransparentDiv").style.display = "block";
}
