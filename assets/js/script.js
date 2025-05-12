document.addEventListener("DOMContentLoaded", function (){
  const titles = document.querySelectorAll(".toggle-title");

  titles.forEach((title) => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;
      content.classList.toggle("show");
      title.classList.toggle("open");
    });
  });
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      const title = section.querySelector(".toggle-title");
      if (title) {
        title.click();
      }
    }, 600);
  }
}
