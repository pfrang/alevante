const div = document.querySelector(".cont")
const b1 = document.getElementById("btn-1")
const nav = document.querySelector(".navigation")

let i = 0.0;

const fade = (element, incrementer) => {
  let op = Number(element.style.opacity);
    const loop = window.setInterval( () => {
      op += incrementer;
      element.style.opacity = op;
      console.log(element);
      console.log(element.style.opacity);
      console.log(i);
      if (i>=1) {
        clearInterval(loop)
      }
      i += incrementer;
    }, 10);
};

b1.addEventListener(('click'), () => {
  nav.style.visibility = "inherit"
  fade(nav, 0.01)
})
