window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "#09080e";
    document.getElementById("navbar").style.width = "100%";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#09080e";
    document.getElementById('photo-cover').style.paddingTop="100px"
    document.getElementById('heading').style.paddingTop="50px"
  }
}