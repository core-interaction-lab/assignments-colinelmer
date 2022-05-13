function answers() {
    var adjective = document.getElementById("adjective").value;
    var noun = document.getElementById("noun").value;
    var animal = document.getElementById("animal").value;
    var verb = document.getElementById("verb").value;
    var place = document.getElementById("place").value;

    
    document.getElementById("showMadlibs").style.visibility = "visible";
    document.getElementById("showMadlibs").innerHTML = "Once there was a </b>" + adjective + " </b>" + noun + "</b> that was walking to the park. All of a sudden, a rabid " + animal + "</b> appears. The " + noun + "</b> gets scared, and " + verb + "</b> all the way to " + place + "</b>."
  }