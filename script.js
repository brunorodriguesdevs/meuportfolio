// ===================== MENU RESPONSIVO =====================
let menuVisible = false;

// Função que oculta ou mostra o menu
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList = "";
        menuVisible = false;
    } else {
        nav.classList = "responsive";
        menuVisible = true;
    }
}

// Função que seleciona uma opção do menu e fecha o menu mobile
function seleccionar() {
    const nav = document.getElementById("nav");
    nav.classList = "";
    menuVisible = false;
}

// ===================== ANIMAÇÃO DE SKILLS =====================
function efectoHabilidades() {
    const skills = document.getElementById("skills");
    if (!skills) return;

    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        const habilidades = document.getElementsByClassName("progress");
        if (habilidades.length >= 6) {
            habilidades[0].classList.add("javascript");
            habilidades[1].classList.add("htmlcss");
            habilidades[2].classList.add("sql");
            habilidades[3].classList.add("comunicacao");
            habilidades[4].classList.add("criatividade");
            habilidades[5].classList.add("dedicacao");
        }
    }
}

// ===================== EVENTOS =====================
// Detecta o scroll para aplicar animação das skills
window.addEventListener("scroll", efectoHabilidades);

// Opcional: animação das skills ao carregar a página caso já esteja visível
window.addEventListener("load", efectoHabilidades);
