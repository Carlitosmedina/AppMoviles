function restablecer(){
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('fecha').value = "";
    document.getElementById('sexo').value = "elegir";
    document.getElementById('valoracion').value === "elegir"
    document.getElementById('email').value = "";
    document.getElementById('comentario').value = "";
}

function cancelar() {
    var r = confirm("Desea volver a la página anterior?");
    if (r == true) {
        window.location.href = "index3.html";
    
  }
}


function encuesta(){
    if (validacion() == true){    
        alert("Nombre: "+document.getElementById('nombre').value +"\n"+
        "Apellido: "+document.getElementById('apellido').value +"\n"+
        "Fecha de nacimiento: "+ convertDate(document.getElementById('fecha').value) +"\n"+
        "Sexo: "+document.getElementById('sexo').value +"\n"+
        "Valoración: "+document.getElementById('valoracion').value +"\n"+
        "Email: "+document.getElementById('email').value +"\n"+
        "Comentario: "+document.getElementById('comentario').value)
        }
    
}


function validacion() {
    if (document.getElementById('nombre').value === "") {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo nombre debe tener un valor');
      return false;
    }

    else if (document.getElementById('apellido').value === "") {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo apellido debe tener un valor');
      return false;
    }

    else if (document.getElementById('fecha').value === "" ) {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo fecha debe tener un valor');
      return false;
    }

    else if (document.getElementById('sexo').value === "elegir") {
        // Si no se cumple la condicion...     
        alert('[ERROR] El campo sexo debe tener un valor');
        return false;
      }
     
      else if (document.getElementById('valoracion').value === "elegir") {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo valoracion debe tener un valor');
        return false;
      }

      else if (document.getElementById('email').value === "") {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo email debe tener un valor');
        return false;
      }

      else if (validateEmail(document.getElementById('email').value) != true ) {
        // Si no se cumple la condicion...
        alert('[ERROR] Ingresar correctamente el email');
        return false;
      }
  
    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
  }


//Validacion solo letras en campos Nombre y Apellido

function soloText(string) {//solo letras 
    var out = '';
    //Se añaden las letras validas
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';//Caracteres validos

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);
    return out;
}



// FECHA EN FORMATO DD-MM-YYYY

function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-')
}


//validacion email

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }