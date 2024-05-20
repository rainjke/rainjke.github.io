function expandContent(contentId, button) {
  var content = document.getElementById(contentId);
  var allContents = document.querySelectorAll('.content');
  
  
  allContents.forEach(function(item) {
    if (item !== content) {
      item.style.display = 'none';
    }
  });

  
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
    
    
    var rect = button.getBoundingClientRect();
    content.style.position = "absolute";
    content.style.top = (rect.bottom + window.scrollY) + "px";
    content.style.left = rect.left + "px";
    content.style.width = rect.width + "px";
  }
}
