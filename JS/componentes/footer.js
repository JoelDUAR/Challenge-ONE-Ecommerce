document.writeln('<footer id="footer">');
document.writeln('<div id="contenedor__footer">');
document.writeln('<div class="contenedor__footer__logo">');
document.writeln('<picture>');
document.writeln('<a href="../index.html"><img src="../../assets/Image/Logos/logo_-_copia-removebg-preview.png" alt="Logo en Pie de página" id="logo__footer"></a>');
document.writeln('</picture>');
document.writeln('</div>');
document.writeln('<div class="contenedor__footer__links">');
document.writeln('<a href="../../HTML/sobre-tejidos-del-alma.html" class="icono icono__footer texto" id="retorno__piezas">Sobre Tejidos del Alma</a>');
let btn__retorno__piezas = document.querySelector("#retorno__piezas");
btn__retorno__piezas.addEventListener("click", function(){
    window.location.href="../../HTML/piezas.html"
})
document.writeln('<a href="HTML/piezas.html" class="icono icono__footer texto">Piezas</a>');
document.writeln('<a href="../../HTML/cursos.html" class="icono icono__footer texto">Cursos</a>');
document.writeln('<a href="../../HTML/entrevistas.html" class="icono icono__footer texto">Entrevistas</a>');
document.writeln('</div>');
document.writeln('<div class="contenedor__footer__form">');
document.writeln('<div id="contenedor__textos">');
document.writeln('<h2 id="titulo__footer">¿Querés saber más?</h2>');
document.writeln('<p id="texto__footer" classs="texto">Si estás interesado/a, podes escribirnos y te contectaremos</p>');
document.writeln('</div>');
document.writeln('<form action="" id="formulario__footer">');
document.writeln('<label for="nombre"></label>');
document.writeln('<input type="text" id="nombre" placeholder="Nombre" class="campo input__footer">');
document.writeln('<label for="email"></label>');
document.writeln('<input type="text" id="email" placeholder="email" class="campo input__footer">');
document.writeln('<label for="textarea__footer"></label>');
document.writeln('<textarea name="texto" id="textarea__footer" cols="30" rows="10" class="campo" placeholder="Escriba aquí su mensaje"></textarea>');
document.writeln('<button id="boton__formulario">Enviar</button>');
document.writeln('</form>');
document.writeln('</div>');
document.writeln('</div>');
document.writeln('<div id="contenedor__footer__copyright">');
document.writeln('<p id="copyright">Desarrollado por Joel Dupraz. 2022</p>');
document.writeln('</div>');
document.writeln('</footer>');