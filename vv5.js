function valida(f) {
	  var ok = true;
	  var msg = "¡Respuesta incorrecta!";
		
	  if(document.getElementById("respuesta1").value == "VALUE")
	  {
		ok = true;
	  }else{
		ok = false;
	  }

	  if(ok==true)
		location.href = "dado2.html";
		f.preventDefault();
	  
	  if(ok == false)
		alert(msg);
	  
	  
	}