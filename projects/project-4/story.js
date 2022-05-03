function responses() {
  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var feeling = document.getElementById("feeling").value;
  var entry = document.getElementById("entry").value;
  
  document.getElementById("showEntry").style.visibility = "visible";
  document.getElementById("showEntry").innerHTML = "<b>My diary entry:</b><br>" + name + "</b><br>" + date + "</b><br> Today I am feeling " + feeling + " because " + entry + "<br></b><br>Refresh the page to start a new entry</b>";
}