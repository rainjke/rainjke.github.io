document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.expand-button');

  buttons.forEach(button => {
      button.addEventListener('click', function () {
          const contentId = this.getAttribute('aria-controls');
          const content = document.getElementById(contentId);
          
          buttons.forEach(btn => {
              const otherContentId = btn.getAttribute('aria-controls');
              const otherContent = document.getElementById(otherContentId);
              if (btn !== this) {
                  otherContent.style.display = "none";
                  btn.classList.remove('active');
              }
          });

          if (content.style.display === "block") {
              content.style.display = "none";
              this.classList.remove('active');
          } else {
              content.style.display = "block";
              this.classList.add('active');
          }
      });
  });
});
