let searc = document.querySelector(".searc");
let search = document.querySelector(".search");
let cross = document.querySelector(".cross");
let input = document.querySelector(".input-box");

searc.addEventListener("click", () => {
  search.classList.add("active");

  if (search.classList.contains("active")) {
    input.classList.add("input-active");
  } else {
    input.classList.remove("input-active");
  }
});

cross.addEventListener("click", () => {
  search.classList.remove("active");
  input.classList.remove("input-active");
});




