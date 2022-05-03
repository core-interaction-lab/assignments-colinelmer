console.log("Made by Andrew");

function playMadLibs() {
  //going to grab user entry and store it in variables in JavaScript
  //document.getElementById grabs HTML ids
  //JavaScript is insanely case sensitive
  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var feeling = document.getElementById("feeling").value;
  var entry = document.getElementById("entry").value;
  
  //push out back to HTML with .innerHTML
  document.getElementById("showStory").style.visibility = "visible";
  document.getElementById("showStory").innerHTML = "<b>My diary entry:</b><br>" + name + "</b><br>" + date + "</b><br> Today I am feeling " + feeling + " because " + entry + "<br></b><br>Refresh the page to start a new entry</b>";
}