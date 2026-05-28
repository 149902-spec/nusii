function toggleMenu() {
  document.getElementById("menu").classList.toggle("open");
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card, h1").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
