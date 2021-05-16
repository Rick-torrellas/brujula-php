<!-- 
	Esta aplicacion te va a mostrar todos los elementos correspondiente a la categoria disponible (epicidad).
-->
<?php
include('conector.php');
$id_intencion = $_REQUEST['intencion'];
?>
<!DOCTYPE html>
<html>
<head>
	<title>
		Intencion
	</title>
</head>
<body>
<?php
$categorias_a = "SELECT * FROM intencion_contenido WHERE id_intencion
=$id_intencion";
$categorias_b = $conector->query($categorias_a);
while ($categorias=$categorias_b->fetch_assoc()) {
$idclase = $categorias['id_clase'];
$clase_a = "SELECT * FROM clase WHERE id_clase =$idclase";
$clase_b = $conector->query($clase_a);
$clase = $clase_b->fetch_assoc();
$clase_name = $clase['nombre'];
$contenido_id = $categorias['id_contenido'];
$contenido_nombre = 'id_'.$clase_name;
$contenido_a = "SELECT * FROM $clase_name WHERE $contenido_nombre = $contenido_id";
$contenido_b = $conector->query($contenido_a);
$contenido = $contenido_b->fetch_assoc(); 
	?>
	<div>
		<p></p>
		<img src="<?php
if (file_exists($clase_name .'/0/'.$contenido['nombre'].'.jpg')){
echo $clase_name .'/0/'.$contenido['nombre'].'.jpg';
}
if (file_exists($clase_name .'/0/'.$contenido['nombre'].'.jpeg')){
echo $clase_name .'/0/'.$contenido['nombre'].'.jpeg';
}
if (file_exists($clase_name .'/0/'.$contenido['nombre'].'.png')){
echo $clase_name .'/0/'.$contenido['nombre'].'.png';
}
if (file_exists($clase_name .'/0/'.$contenido['nombre'].'.gif')){
echo $clase_name .'/0/'.$contenido['nombre'].'.gif';
}
		?>">
	</div>
<?php	
}
?>
</body>
</html>