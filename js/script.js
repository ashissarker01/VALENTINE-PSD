$(function () {
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });

  new VenoBox({
    selector: ".my-image-links",
    numeration: true,
    infinigall: true,
    share: true,
    spinner: "rotating-plane",
  });

  new VenoBox({
    selector: '.my-video-links',
  });


  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });


  $('.mycounter').counterUp({
    delay: 10,
    time: 1000
  });




  $('.slider_part').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });





   //  Stykey Header  
   $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky_name');
    }
    else {
         $('.navbar').removeClass('sticky_name');
    }
    }); 








    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
          dd = String(today.getDate()).padStart(2, "0"),
          mm = String(today.getMonth() + 1).padStart(2, "0"),
          yyyy = today.getFullYear(),
          nextYear = yyyy + 1,
          dayMonth = "09/30/",
          birthday = dayMonth + yyyy;
      
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end
      
      const countDown = new Date(birthday).getTime(),
          x = setInterval(function() {    
    
            const now = new Date().getTime(),
                  distance = countDown - now;
    
            document.getElementById("days").innerText = Math.floor(distance / (day)),
              document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
            //do something later when date is reached
            if (distance < 0) {
              document.getElementById("headline").innerText = "It's my birthday!";
              document.getElementById("countdown").style.display = "none";
              document.getElementById("content").style.display = "block";
              clearInterval(x);
            }
            //seconds
          }, 0)
      }());








// ----------------SLIDER PART --------------------
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: '2',
        spaceBetween: 30,
        autoplay: true,
        autoplaySpeed: 700,
        arrows: true,
        prevArrow:'<i class="fa-solid fa-circle-chevron-left prev fa-3x"></i>',
        nextArrow:'<i class="fa-solid fa-circle-chevron-right next fa-3x"></i>',
        grabCursor:true,
        loop: true,
        arrows: true,
        prevArrow:'<i class="fa-solid fa-circle-chevron-left prev fa-3x"></i>',
        nextArrow:'<i class="fa-solid fa-circle-chevron-right next fa-3x"></i>',
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

});
