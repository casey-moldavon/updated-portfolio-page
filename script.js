document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery
//   $(document).ready(function(){
//     $('.carousel').carousel();
//   });

//clock (for background transitions)
function displayTime(){
    var mydate = new Date();
    var year = mydate.getFullYear();
        if(year < 1000){
            year += 1900
        }
        var day = mydate.getDay();
        // console.log(day);
        var month = mydate.getMonth();
        console.log(month);
};
displayTime()
