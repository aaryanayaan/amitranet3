document.querySelectorAll(".accordion").forEach(a => {
  a.addEventListener("click", () => {
    a.classList.toggle("active");
    let b = a.nextElementSibling;
    b.style.maxHeight = b.style.maxHeight ? null : b.scrollHeight + "px";
  });
});1