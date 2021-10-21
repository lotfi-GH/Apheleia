var change=0;
/*function clique(){
   
    //document.getElementsByTagName("#button").classList.toggle(".boutCl");
    if(change==0){
        document.getElementsByTagName("button").classList.remove(".bout");
        document.getElementsByTagName("button").classList.add(".boutCl");
        change=1;
        }
        else{
            document.getElementsByTagName("button").classList.remove(".boutCl");
            document.getElementsByTagName("button").classList.add(".bout");
        change=0;
        }
}*/

//RESPONSIVE NAVBAR
function myFunction() {
    var x = document.getElementById("navb");
    var y =x;
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }



  //SIDE NAVBAR
  function openNav() {
    document.getElementById("nav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("nav").style.width = "0";
  }






  //TABS
  function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
 
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }






  //DIALOG
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
