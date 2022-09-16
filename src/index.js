function openContent(evt, imageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(imageName).style.display = "block";
  evt.currentTarget.className += " active";
}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


//Aria 

// hideShow.prototype.toggleRegion = function() {

// var thisObj = this;

// // toggle the region
// this.$region.slideToggle(this.toggleSpeed, function() {

// if ($(this).attr('aria-expanded') == 'false') { // region is collapsed

//   // update the aria-expanded attribute of the region
//   $(this).attr('aria-expanded', 'true');

//   // move focus to the region
//   $(this).focus();

//   // update the button label
//   thisObj.$toggle.find('span').html('Hide');

// }
// else { // region is expanded

//   // update the aria-expanded attribute of the region
//   $(this).attr('aria-expanded', 'false');

//   // update the button label
//   thisObj.$toggle.find('span').html('Show');
// }
// });

// } // end toggleRegion()