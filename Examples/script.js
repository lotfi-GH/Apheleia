var change=0;

//RESPONSIVE NAVBAR
function myFunction() {
    var x = document.getElementById("navb");
    var y =x;
    if (x.classList.contains("navbar")) {
      x.classList.toggle("responsive");
      
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

      // Get the <span> element that closes the modal
      var tabcontent = document.getElementsByClassName("tabcontent");
      var span = document.getElementsByClassName("close");
      span.onclick = function() {
        tabcontent.style.display = "none";
      }




