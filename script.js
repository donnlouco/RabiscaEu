window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
})

const slidesSobre = document.querySelectorAll('.slide-item');
let indexSobre = 0;

function rodarSliderSobre() {
    // Remove a classe active da atual
    slidesSobre[indexSobre].classList.remove('ativo');

    // Vai para a próxima
    indexSobre++;
    
    // Se acabou, volta para a primeira
    // verifica se o index vai ficar maior q o numero de fotos
    // se ficar maior ou igual, ele zera e volta do comeco
    if (indexSobre >= slidesSobre.length) {
        indexSobre = 0;
    }

    // Adiciona a classe active na nova
    slidesSobre[indexSobre].classList.add('ativo');
}

// Roda a cada 4 segundos
setInterval(rodarSliderSobre, 4000);