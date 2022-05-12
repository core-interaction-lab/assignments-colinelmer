function responses() {
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var entry = document.getElementById("entry").value;
    
    document.getElementById("showEntry").style.visibility = "visible";
    document.getElementById("showEntry").innerHTML = "<b>My diary entry:</b><br>" + name + "</b><br>" + date + "</b><br> I am feeling angry because " + entry + "<br></b>";
  }