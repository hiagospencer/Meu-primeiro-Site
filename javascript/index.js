
// Aqui começa a function da galeria pra quando clicar deixar a imagen grande

function mostrarImagem(img) {
    const imagenGrande = document.getElementById('imagemGrande');
    imagenGrande.src=img.src;
    imagenGrande.parentElement.style.display="block";
    
}

// Aqui é o menu mobile

var menuBar = document.querySelector('.menu-mobile i');

menuBar.addEventListener('click',(e)=>{
    e.preventDefault();
    let menuMobile = document.querySelector('.menu-mobile ul');
    if(menuMobile.classList.contains('show-menu')){
        menuMobile.classList.remove('show-menu')
    }else{
    menuMobile.classList.add('show-menu');
    }
})