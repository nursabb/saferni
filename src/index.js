//import"@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
import '@laylazi/bootstrap-rtl-scss/scss/bootstrap-rtl.scss';
import "./scss/style.scss";
import "./css/style.css";
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all.min";
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';


$(window).scroll(function(){
    if($(this).scrollTop()>=500){
        $("#navBar").addClass("noTransparrent");
     }
    else{
        $("#navBar").removeClass("noTransparrent");
     }
});
$(document).ready(function(){
    // active thumbnail
    $("#thumbSlider .thumb").on("click", function(){
              $(this).addClass("active");
              $(this).siblings().removeClass("active");
          
          });
  })
  
