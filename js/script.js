console.log("Potężna wichura łamiąc duże drzewa, trzciną zaledwie tylko kołysze.");
let tytus = document.querySelector(".js-tytus")
let sebek = document.querySelector(".js-sebek")
let janusz = document.querySelector(".js-janusz")
let buttonZaloga = document.querySelector(".js-buttonZaloga")
buttonZaloga.addEventListener("click", () => {
    switch (buttonZaloga.innerText) {
        case "Pokaż Sebka":
            buttonZaloga.innerText = "Pokaż Janusza"
            sebek.classList.add("bomba__image--show")
            sebek.classList.remove("bomba__sebek")
            tytus.classList.add("bomba__tytus")
            tytus.classList.remove("bomba__image--show")
            break;
        case "Pokaż Janusza":
            buttonZaloga.innerText = "Pokaż Tytusa"
            janusz.classList.add("bomba__image--show")
            janusz.classList.remove("bomba__janusz")
            sebek.classList.add("bomba__sebek")
            sebek.classList.remove("bomba__image--show")

            break;
        case "Pokaż Tytusa":
            buttonZaloga.innerText = "Pokaż Sebka"
            janusz.classList.add("bomba__janusz")
            janusz.classList.remove("bomba__image--show")
            tytus.classList.add("bomba__image--show")
            tytus.classList.remove("bomba__tytus")
            break;
    }
})

