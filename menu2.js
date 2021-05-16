function opppen(objeto) {
	var cosa = document.getElementById(objeto);
	cosa.classList.toggle("active");
}
function cerrar(objeto){
	var cosa2 = document.getElementById(objeto);
	cosa2.classList.toggle("active");
}
// Esta funcion establecera los links para enlaces en la barra de navegacion
link();
function link(){
// La parte del menu que contiene los elementos de la brujula que se considera contenido como anime, peliculas.
	var contenido = document.getElementById('contenido');
	var contenido_a = contenido.getElementsByTagName('A');
// La parte del menu que te lleva a la pagina de intencion 
	var intencion = document.getElementById('intencion');
	var intencion_a = intencion.getElementsByTagName('A');
// La parte del menu que lleva a la parte de categorias
	var categorias = document.getElementById('categoria');
	var categorias_a = categorias.getElementsByTagName('A');
// En esta parte se estableceran las rutas a los links
// ----------------------------------------------------------------------
// 						PRINCIPAL
  contenido_a[0].href = "../anime/anime.php";
  contenido_a[1].href = "../aprender/aprender.php";
  contenido_a[2].href = "../cartoon/cartoon.php";
  contenido_a[3].href = "../informacion/informacion.php";
  contenido_a[4].href = "../Just_buy_it/Just_buy_it.php";
  contenido_a[5].href = "../musica/musica.php";
  contenido_a[6].href = "../women/women.php";
  contenido_a[7].href = "../peliculas/peliculas.php";
  contenido_a[8].href = "../proyectos/proyectos.php";
  contenido_a[9].href = "../series/series.php";
  contenido_a[10].href = "../vjuegos/vjuegos.php";
  contenido_a[11].href = "../actor_a/actor_a.php";
  contenido_a[12].href = "../director_as/director_as.php";
// --------------------------------------------------------------------------------
//					    INTENCION
  intencion_a[0].href= "../intencion.php?intencion=1";
  intencion_a[1].href= "../intencion.php?intencion=2";
  intencion_a[2].href= "../intencion.php?intencion=3";
  intencion_a[3].href= "../intencion.php?intencion=4";
// ---------------------------------------------------------------------------------
//						CATEGORIAS
  categorias_a[0].href = "../categorias.php?categorias=1";
  categorias_a[1].href = "../categorias.php?categorias=2";
  categorias_a[2].href = "../categorias.php?categorias=3";
  categorias_a[3].href = "../categorias.php?categorias=4";
  categorias_a[4].href = "../categorias.php?categorias=5";
  categorias_a[5].href = "../categorias.php?categorias=6";
  categorias_a[6].href = "../categorias.php?categorias=7";
  categorias_a[7].href = "../categorias.php?categorias=8";
  categorias_a[8].href = "../categorias.php?categorias=9";
  categorias_a[9].href = "../categorias.php?categorias=10";
  categorias_a[10].href = "../categorias.php?categorias=11";
  categorias_a[11].href = "../categorias.php?categorias=12";
  categorias_a[12].href = "../categorias.php?categorias=13";
  categorias_a[13].href = "../categorias.php?categorias=14";
  categorias_a[14].href = "../categorias.php?categorias=15";
  categorias_a[15].href = "../categorias.php?categorias=16";
  categorias_a[16].href = "../categorias.php?categorias=17";
  categorias_a[17].href = "../categorias.php?categorias=18";
  categorias_a[18].href = "../categorias.php?categorias=19";
  categorias_a[19].href = "../categorias.php?categorias=20";
  categorias_a[20].href = "../categorias.php?categorias=21";
  categorias_a[21].href = "../categorias.php?categorias=22";
  categorias_a[22].href = "../categorias.php?categorias=23";
  categorias_a[23].href = "../categorias.php?categorias=24";
  categorias_a[24].href = "../categorias.php?categorias=25";
  categorias_a[25].href = "../categorias.php?categorias=26";
  categorias_a[26].href = "../categorias.php?categorias=27";
  categorias_a[27].href = "../categorias.php?categorias=28";
  categorias_a[28].href = "../categorias.php?categorias=29";
  categorias_a[29].href = "../categorias.php?categorias=30";
  categorias_a[30].href = "../categorias.php?categorias=31";
  categorias_a[31].href = "../categorias.php?categorias=32";
  categorias_a[32].href = "../categorias.php?categorias=33";
  categorias_a[33].href = "../categorias.php?categorias=34";
  categorias_a[34].href = "../categorias.php?categorias=35";
  categorias_a[35].href = "../categorias.php?categorias=36";
  categorias_a[36].href = "../categorias.php?categorias=37";
  categorias_a[37].href = "../categorias.php?categorias=38";
  categorias_a[38].href = "../categorias.php?categorias=39";
  categorias_a[39].href = "../categorias.php?categorias=40";
  categorias_a[40].href = "../categorias.php?categorias=41";
  categorias_a[41].href = "../categorias.php?categorias=42";
  categorias_a[42].href = "../categorias.php?categorias=43";
  categorias_a[43].href = "../categorias.php?categorias=44";
  categorias_a[44].href = "../categorias.php?categorias=45";
  categorias_a[45].href = "../categorias.php?categorias=46";
  categorias_a[46].href = "../categorias.php?categorias=47";
}		