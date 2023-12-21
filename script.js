const chk = document.querySelector("#chk");

chk.addEventListener("change", (event) => {
    console.log(event.origin)
  if (event.origin) return;
  document.body.classList.toggle("dark");
  const paragraphs = document.querySelectorAll(
    "p, #paragrafo, #paragrafo1, #paragrafo2"
  );
  paragraphs.forEach((paragraph) => {
    paragraph.style.color = document.body.classList.contains("dark")
      ? "#fff"
      : "#000";
  });
});

window.onscroll = function () {
  const footer = document.getElementById("myFooter");
  if (window.scrollY > 200 || document.documentElement.scrollTop > 200) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
};
