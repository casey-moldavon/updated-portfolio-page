document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });


$("#container-time-planner").delay(4200).fadeOut(1000, function () {
    $(this).css("display", "none");
});

$(".container-non-materialize").delay(5000).fadeIn(1000);
$(".links").delay(5000).fadeIn(1000);

M.AutoInit();