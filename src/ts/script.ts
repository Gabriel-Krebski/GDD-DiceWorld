/* elements */

const menuAboutGame = document.getElementById("aboutGame") as HTMLLIElement;
const menuPersonagem = document.getElementById("personagem") as HTMLLIElement;
const menuDesevolvimento = document.getElementById("desevolvimento") as HTMLLIElement;

const SubMenuAboutGame = document.getElementById("subMenuAboutGame") as HTMLUListElement;
const SubMenuPersonagem = document.getElementById("subMenuPersonagem") as HTMLUListElement;
const subMenuDesevolvimento = document.getElementById("subMenuDesevolvimento") as HTMLUListElement;

/* events */

menuAboutGame.addEventListener("mouseenter", () => {
    SubMenuAboutGame.style.display = "block";
});

menuAboutGame.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!SubMenuAboutGame.matches(':hover')) {
            SubMenuAboutGame.style.display = "none";
        }
    }, 300); 
});

SubMenuAboutGame.addEventListener("mouseleave", () => {
    SubMenuAboutGame.style.display = "none";
});

menuPersonagem.addEventListener("mouseenter", () => {
    SubMenuPersonagem.style.display = "block";
});

menuPersonagem.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!SubMenuPersonagem.matches(':hover')) {
            SubMenuPersonagem.style.display = "none";
        }
    }, 300);
});

SubMenuPersonagem.addEventListener("mouseleave", () => {
    SubMenuPersonagem.style.display = "none";
});

menuDesevolvimento.addEventListener("mouseenter", () => {
    subMenuDesevolvimento.style.display = "block";
});

menuDesevolvimento.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!subMenuDesevolvimento.matches(':hover')) {
            subMenuDesevolvimento.style.display = "none";
        }
    }, 300);
});

subMenuDesevolvimento.addEventListener("mouseleave", () => {
    subMenuDesevolvimento.style.display = "none";
});