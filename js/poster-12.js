const prev = document.querySelector(".prev");
prev.addEventListener("click", function () {
  let page = "../index.html";
  location.href = page;
});

const next = document.querySelector(".next");
next.addEventListener("click", function () {
  let page = "https://seimin-bjj.github.io/PortFolio-R/";
  location.href = page;
});

//--------------------------------------
const move = prev.children;

let move1 = [
  { transform: "translateY(10px)" },
  { transform: "translateY(-10px)" },
  { transform: "translateY(10px)" },
];

let moving1 = {
  duration: 950,
  iterations: Infinity,
};

prev.animate(move1, moving1);

//-----------------------------------

const run = document.querySelector(".next");
const mover = run.children;

let move2 = [
  // {transform: 'translateX(-100vw)'},
  // {transform: 'translateX(80vw)'},
  // {transform: 'translateX(-100vw)'}
  { transform: "translateY(10px)" },
  { transform: "translateY(-10px)" },
  { transform: "translateY(10px)" },
];

let moving2 = {
  duration: 950,
  iterations: Infinity,
};

run.animate(move2, moving2);
