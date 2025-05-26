$(document).ready(function () {
	//Responsive mobile menu js
	$('.menu-toggle').click(function () {
		$('.nav-slide').toggleClass('show');
	});
	//Add active class onclick
	$('.menu-item').on('click', function () {
		$('.menu-item').removeClass('active'); 
		$(this).addClass('active');            
	  });
  
  //Speakers slider js
  $slider = $('.speakers-slider');
 
    $slider.slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: true,
      dots: false,
      infinite: true,
      responsive: [
		{
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
			slidesToScroll: 4,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
			slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
			slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
			slidesToScroll: 1,
          }
        }
      ]
    });

//Speakers search by name function
 $('#speakers-search').on('input', function () {
      const searchTerm = $(this).val().toLowerCase().trim();

      $('.speakers-slider').slick('slickUnfilter'); // Reset filter first

      $('.speakers-slider').slick('slickFilter', function (index, slide) {
        const $slide = $(slide);
        if ($slide.hasClass('slick-cloned')) return false; // skip cloned slides

        const name = $slide.find('.speaker-name').text().toLowerCase();

        return name.includes(searchTerm);
      });

      $('.speakers-slider').slick('refresh'); // Redraw layout
    });
	
	//Broad focus slider
	$(".broad-focus-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      dots: false,
      infinite: true,
      responsive: [
		{
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
			slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
			slidesToScroll: 1,
          }
        }
      ]
    });
	
});
