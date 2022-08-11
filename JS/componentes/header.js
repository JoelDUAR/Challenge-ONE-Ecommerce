document.writeln('<header>');
document.writeln('<nav class="menu">');
document.writeln('<div id="contenedor__logo">');
document.writeln('<picture>');
document.writeln('<img src="../../../assets/Image/Logos/logo_-_copia-removebg-preview.png" alt="Logo Tejidos del alma" id="imagen__logo">');
document.writeln('</picture>');
document.writeln('</div>');
document.writeln('<div id="contenedor__botones">');
document.writeln('<i class="fa-solid fa-magnifying-glass"></i>');
document.writeln('<div id="contenedor__btn__menu">');
document.writeln('<input type="checkbox" id="btn__menu">');
document.writeln('<label for="btn__menu" class="lbl__menu">');
document.writeln('<span id="linea1"></span>');
document.writeln('<span id="linea2"></span>');
document.writeln('<span id="linea3"></span>');
document.writeln('</label>');
document.writeln('</div>');
document.writeln('<a id="btn__login">Login</a>');
btnMenu = document.querySelector("#btn__login");
btnMenu.addEventListener("click", function(){
    window.location.href="../../HTML/login.html"
})
document.writeln('</div>');
document.writeln('</nav>');
document.writeln('</header>');
