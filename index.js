const div = document.querySelector(".cont")
const b1 = document.querySelector(".btn-1")
const nav = document.querySelector(".navigation")


const fade = (element, op, incrementer) => {
  op += incrementer;
    const loop = window.setInterval( () => {
      element.style.opacity = op.toFixed(2);
      if (op <= 0 || op >= 1) {
        if (op <= 0) {
          nav.style.visibility = "hidden";
          element.style.opacity = 0;
        }
        clearInterval(loop)
      }
      op += incrementer;
    }, 10);
};

b1.addEventListener(('click'), () => {
  let op = Number(nav.style.opacity)
  let incrementer;
  if (nav.style.visibility === "inherit") {
    incrementer = -0.1;
  } else {
    nav.style.visibility = "inherit"
    nav.style.opacity = 0;
    incrementer = 0.01;
  }
  fade(nav, op, incrementer)
})
