import Animate from "./animate.mjs";

const slider = document.querySelector("#slider2");
const slider2 = document.querySelector("#slider1");
const ul = slider.querySelector("ul");
const lis = ul.querySelectorAll("li");
const prev = slider.querySelector(".btnPrev");
const next = slider.querySelector(".btnNext");
const speed = 500;
const len = lis.length;
let enableClick = true;

init(slider);
init(slider2);

//append(자식요소 => 부모요소)
//prepend(부모요소 => 자식요소 )


next.addEventListener("click", e => {
    e.preventDefault();
    console.log("NEXT!!!")

    if(enableClick){
        enableClick = false;
        nextSlide(slider);
        nextSlide(slider2);
    }
})

prev.addEventListener("click", e => {
    e.preventDefault();
    console.log("RIGHT!!!")
    
    if(enableClick){
        enableClick = false;
        prevSlide(slider2);
        prevSlide(slider);
    }
})

//화면 로딩시 -100%로 보내고, prePend도 뒤쪽으로 보내주는 기능
function init(frame) {
    const ul = frame.querySelector("ul");
    const lis = ul.querySelectorAll("li");
    const len = lis.length;


    ul.style.left = "-100%";
    ul.style.width = `${100*len}%`;  //현재패널의 ul의 styled.width값을 계산
    lis.forEach(li=>li.style.width=`${100/len}%`);
    ul.prepend(ul.lastElementChild); //새로고침하면 처음 1번화면

}
 
function nextSlide(frame) {

    const ul = frame.querySelector("ul");

    new Animate(ul, {
        prop: "left",
        value: "-200%",
        duration: speed,
        callback: () => {
            ul.style.left = "-100%";
            ul.append(ul.firstElementChild);
            enableClick = true;
        }
    })
}

function prevSlide(frame){
    
    const ul = frame.querySelector("ul");

    new Animate(ul, {
        prop: "left",
        value: "0%",
        duration: speed,
        callback: () => {
            ul.style.left = "-100%";
            ul.prepend(ul.lastElementChild);
            enableClick = true;
        }
    })
}