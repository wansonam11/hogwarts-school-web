const articles = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const btnClose = aside.querySelector(".btnClose");

articles.forEach((article, index) => {
    article.addEventListener("mouseenter", e => {
       //e.currentTarget.querySelector("video").play();
    })

    article.addEventListener("mouseleave", e => {
       //e.currentTarget.querySelector("video").pause();
    })

    
    article.addEventListener("click", e => {
        const title = e.currentTarget.querySelector("h2").innerText;
        const con = e.currentTarget.querySelector("p").innerText;
        const imgSrc = e.currentTarget.querySelector("img").getAttribute("src");
        const videoSrc = e.currentTarget.querySelector("video").getAttribute("src");

        aside.querySelector("h2").innerText = title;
        aside.querySelector("p").innerText = con;
        aside.querySelector("img").setAttribute("src", imgSrc);
        aside.querySelector("video").setAttribute("src", videoSrc);
        aside.addEventListener("mouseenter", e => {
            e.currentTarget.querySelector("video").play();
         })
        aside.classList.add("on");


    })

    btnClose.addEventListener("click", () => {
        aside.classList.remove("on");
    })
})