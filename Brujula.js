cosa("Anime","Nucleo/imagenes/Anime.png");
cosa("women","Nucleo/imagenes/women.jpg");
cosa("Aprender","Nucleo/imagenes/Aprender.jpg");
cosa("Cartoon","Nucleo/imagenes/Cartoon.png");
cosa("Informacion","Nucleo/imagenes/Informacion.jpg");
cosa("Just","Nucleo/imagenes/Just.jpg");
cosa("Musica","Nucleo/imagenes/Musica.jpg");
cosa("Peliculas","Nucleo/imagenes/Peliculas.png");
cosa("Proyectos","Nucleo/imagenes/Proyectos.jpg");
cosa("Series","Nucleo/imagenes/Series.png");
cosa("Vjuegos","Nucleo/imagenes/Vjuegos.jpg");

function abrir(link) {
	location.href = link;
}

function cosa(a,b) {
 sujeto = document.getElementById(a).style;
 sujeto.backgroundImage = "url("+b+")";
 sujeto.backgroundRepeat = "no-repeat";
 sujeto.backgroundPosition = "center";
}
