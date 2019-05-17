var comentarios = document.getElementById("boton_com");
comentarios.onclick = function(){
    document.getElementById("comentarios_sidebar").style.width = "500px";  
}

var cerrar = document.getElementById("boton_cerrar");
var enviar = document.getElementById("enviar");

var nombre = document.getElementById("nombre");
var correo = document.getElementById("email");
var mensaje = document.getElementById("subject");

comentarios.onclick = function(){
    document.getElementById("comentarios_sidebar").style.width = "500px";  
}

//Cerrar barra comentarios
cerrar.onclick = function() {
    document.getElementById("comentarios_sidebar").style.width = "0";
}

function isEmpty(string) {
    return (!string || 0 === string.length);
  }

  function obtenerFecha(){
    var fecha = new Date();
    var dias = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    
    if (minutos < 10){
      minutos = "0" + minutos;
    }
  
    var fecha_mostrar = new String(dias + "/" + mes + "/" + anio + " " + hora + ":" + minutos);
    
    return fecha_mostrar;
  }
  
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

enviar.onclick = function(){


    if(isEmpty(nombre.value) || isEmpty(correo.value) || isEmpty(mensaje.value)){
      alert("Rellena todos los campos.");
    }
    else{
    
      if(!validateEmail(correo.value))
        alert("Correo inválido.");
      else{
  
        var comentario = document.createElement("div");
        comentario.setAttribute("class", "comentario");
  
        var nombre_intr = document.createElement("H3");
        var n2 = document.createTextNode(nombre.value);
        nombre_intr.appendChild(n2);
  
        var correo_intr = document.createElement("A");
        var c = document.createElement("P");
        var c_text = document.createTextNode(correo.value);
        c.appendChild(c_text);
        correo_intr.setAttribute("href", "#");
        correo_intr.appendChild(c);
        
        var mensaje_intr = document.createElement("P");
        var m = document.createTextNode(mensaje.value);
        mensaje_intr.appendChild(m);
  
        var fecha = document.createElement("P");
        fecha.setAttribute("class","fecha");
        var f = document.createTextNode(obtenerFecha());
        fecha.appendChild(f);
  
        //Añadir al comentario los 4 campos
        comentario.appendChild(nombre_intr);
        comentario.appendChild(correo_intr);
        comentario.appendChild(mensaje_intr);
        comentario.appendChild(fecha);
  
        //Añadir el comentario a la lista de comentarios
        document.getElementById("list_comentarios").appendChild(comentario);
  
        //Limpiar los input
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject"). value = "";
      }
    }
  }
  