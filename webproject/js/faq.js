function expandContent(contentId, button) {
  var content = document.getElementById(contentId);
  if (content.style.display === "block") {
      content.style.display = "none";
      button.style.backgroundImage = "url('../img/global/down.svg')";
  } else {
      content.style.display = "block";
      button.style.backgroundImage = "url('../img/global/up.svg')";
  }
}
