const form = document.getElementById("form")
const button = document.getElementById("submit1")
button.disabled = true;
button.classList.add('is-inactive');

form.addEventListener("input", update)
form.addEventListener("change", update)

function update() {
  const isRequired = form.checkValidity()

  if (isRequired) {
    button.disabled = false;
    button.classList.remove('is-inactive');
    button.classList.add('is-active');
    return
  }else {
    button.disabled = true;
    button.classList.remove('is-active');
    button.classList.add('is-inactive');
}
}

const modal = document.querySelector("#myModal");
const btn = document.querySelectorAll(".btn");
const closeModal = document.getElementsByClassName("modalClose")[0];

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    modal.style.display = "block";
  });
}
btn.onclick = function () {
  modal.style.display = "block";
};
closeModal.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// bodyタグを取得
const documentBody = document.querySelector('body');
// aタグをbodyタグ直下に追加
var newElement = document.createElement("a");
newElement.setAttribute("class","backToTop");
documentBody.prepend(newElement);
newElement.href = "#";

// ウィンドウサイズを取得
const windowBottom = window.innerHeight;
console.log(windowBottom);
const topBtn = document.querySelector('.backToTop');
// スクロールで表示
window.addEventListener('scroll', ()=> {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= windowBottom) {
    topBtn.style.opacity = 0.6;
    topBtn.style.pointerEvents = "auto";
    }
    else {
    topBtn.style.opacity = 0;
    topBtn.style.pointerEvents = "none";
    }
});

const fadeIn = function(){

    const target = document.getElementsByClassName('fade-in');
    const position = Math.floor(window.innerHeight * .75);

    for (let i = 0; i < target.length; i++) {

        let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
        let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom);

        if (offsetTop < position) {
            target[i].classList.add('scroll-in');
        }

        if(offsetBottom < 0){
            target[i].classList.remove('scroll-in');
        }
    }
}
window.addEventListener('scroll', fadeIn, false);
