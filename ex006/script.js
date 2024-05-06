function clicarMenu(){
    if(menu.style.display == 'none'){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}
function mudouTamanho(){
    if (window.innerWidth >= 480){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}