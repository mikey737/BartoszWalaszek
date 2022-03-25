console.log("Potężna wichura łamiąc duże drzewa, trzciną zaledwie tylko kołysze.");
let Tytus = document.querySelector(".js-Tytus")
let Sebek = document.querySelector(".js-Sebek")
let Janusz = document.querySelector(".js-Janusz")
let buttonZaloga = document.querySelector(".js-buttonZaloga")
buttonZaloga.addEventListener("click", () => {
    switch (buttonZaloga.innerText) {
        case "Pokaż Sebka":
            buttonZaloga.innerText = "Pokaż Janusza"
            Sebek.classList.add("Show")
            Sebek.classList.remove("bomba__Sebek")
            Tytus.classList.add("bomba__Tytus")
            Tytus.classList.remove("Show")
            break;
        case "Pokaż Janusza":
            buttonZaloga.innerText = "Pokaż Tytusa"
            Janusz.classList.add("Show")
            Janusz.classList.remove("bomba__Janusz")
            Sebek.classList.add("bomba__Sebek")
            Sebek.classList.remove("Show")

            break;
        case "Pokaż Tytusa":
            buttonZaloga.innerText = "Pokaż Sebka"
            Janusz.classList.add("bomba__Janusz")
            Janusz.classList.remove("Show")
            Tytus.classList.add("Show")
            Tytus.classList.remove("bomba__Tytus")
            break;
    }
})

