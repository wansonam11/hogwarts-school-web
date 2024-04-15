const btnUp = document.querySelector(".btnUp");
const btnDown = document.querySelector(".btnDown");
const panel = document.querySelector(".panel");
const panel_li = panel.querySelectorAll("li");
const len = panel_li.length-1;  //li가 0부터 시작하기 떄문
let enableClick = true;

btnUp.addEventListener("click", e => {
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        moveUp();
    }
})

btnDown.addEventListener("click", e => {
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        moveDown();
    }
})

function moveUp() {
    let current_item = panel.querySelector(".on");
    let current_index = parseInt(current_item.getAttribute("data-index"));
    //console.log(current_index);
    let next_index = null;

    (current_index !== len) ? next_index = current_index+1 : next_index=0;
    //현재값이 마지막순번 len이 아니면, 증가할거리가 있으니 현재+1 , 거짓이면 0 처음으로 돌림
    current_item.classList.remove("on");
    current_item.classList.add("up");

    panel_li[next_index].classList.add("down");
    setTimeout(() => {
        panel_li[next_index].classList.remove('down');
        panel_li[next_index].classList.add('on');
        panel.querySelector('.up').classList.remove('up');

        enableClick = true;
    }, 500)
}

function moveDown() {
    let current_item = panel.querySelector(".on");
    let current_index = parseInt(current_item.getAttribute("data-index"));
    //console.log(current_index);
    let prev_index = null;

    (current_index !== 0) ? prev_index = current_index-1 : prev_index=len;
    //현재값이 0이 아니면 뺼게 있으니까 
    current_item.classList.remove("on");
    current_item.classList.add("down");

    panel_li[prev_index].classList.add("up"); //up붙여놔야 on을 붙엿을떄 아래로 내려감?
    setTimeout(() => {
        panel_li[prev_index].classList.remove('up');
        panel_li[prev_index].classList.add('on');
        panel.querySelector('.down').classList.remove('down');

        enableClick = true;
    }, 500)
}