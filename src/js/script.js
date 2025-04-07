const submenus = {
  "inicio": ["Introdução", "História", "Objetivos", "Universo"],
  "sobre-o-jogo": ["Gameplay", "Controles", "Câmera"],
  "personagens": ["Campeões", "Inimigos"],
  "desenvolvimento": ["Atribuições", "Cronograma"]
};

const conteudos = {
  "Introdução": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "História": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Objetivos": "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  "Universo": "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  "Gameplay": "Lorem ipsum gameplay experience here.",
  "Controles": "Control scheme explained with placeholder text.",
  "Câmera": "Camera mechanics and overview here.",
  "Campeões": "Descrição dos campeões: lorem ipsum.",
  "Inimigos": "Detalhes dos inimigos e monstros.",
  "Atribuições": "Quem faz o quê no desenvolvimento.",
  "Cronograma": "Planejamento de produção com fases e prazos."
};

const submenuContainer = document.getElementById("submenus");
const contentSection = document.getElementById("submenu-content");

function showSubmenus(menuKey) {
  submenuContainer.innerHTML = "";
  contentSection.innerHTML = "";
  const items = submenus[menuKey];
  items.forEach(item => {
    const btn = document.createElement("div");
    btn.className = "submenu-button";
    btn.textContent = item;
    btn.onclick = () => showContent(item);
    submenuContainer.appendChild(btn);
  });
}

function showContent(item) {
  contentSection.classList.add("active");
  contentSection.innerHTML = `
    <h2>${item}</h2>
    <p>${conteudos[item]}</p>
  `;
}

// Inicialmente mostra os submenus de "Início"
showSubmenus("inicio");

// Trocar os submenus ao clicar nos menus principais
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href").replace("#", "");
    showSubmenus(id);
    contentSection.classList.remove("active");
  });
});
