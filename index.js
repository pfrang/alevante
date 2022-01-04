const div = document.querySelector(".cont")
const b1 = document.getElementById("btn-1")

b1.addEventListener(('click'), () => {
  b1.innerHTML = "bæsj";
  div.style.opacity = "0";
  console.log(b1)
})
