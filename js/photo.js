window.addEventListener('DOMContentLoaded', function () {


    $(function () {
        $(".ph_img .ph_img_left").slick({
            dots: false, //navigation
            arrows: true, //arrow
            prevArrow: $('.ph_btn_prev'), //prev
            nextArrow: $('.ph_btn_next'), //next
            autoplay: false, // autoplay mode
            autoplaySpeed: 2000, // auto speed
            pauseOnHover: false, // pause on mouse hover
            fade: true, //fade mode only one slider
            speed: 900, // speed
            infinite: true, // infinite mode
            asNavFor: '.slider', // another slider
            centerMode: true, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 1, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable: true,
            vertical: false, // vertical sliders
            verticalSwiping: false, // vertical swiper
            initialSlide: 0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
            variableWidth: false,
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.ph_img_left .slick-slide').removeClass('on01 on02 on03 on04');
            // $('.ph_img_left .slick-slide').toggleClass( easing, 'on101 on102 on103 on104' );
            //센터에서 나간 후

        //    센터에서 들어온 후
        }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.ph_img_left .slick-current').toggleClass('on01 on02 on03 on04');
            // $('.ph_img_left .slick-current').toggleClass( easing, 'on101 on102 on103 on104');
        })
    });


    $(function () {
        $(".ph_img .ph_img_mid").slick({
            dots: false, //navigation
            arrows: true, //arrow
            prevArrow: $('.ph_btn_prev'), //prev
            nextArrow: $('.ph_btn_next'), //next
            autoplay: false, // autoplay mode
            autoplaySpeed: 2000, // auto speed
            pauseOnHover: false, // pause on mouse hover
            fade: true, //fade mode only one slider
            speed: 900, // speed
            infinite: true, // infinite mode
            asNavFor: '.slider', // another slider
            centerMode: true, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 1, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable: true,
            vertical: false, // vertical sliders
            verticalSwiping: false, // vertical swiper
            initialSlide: 0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
            variableWidth: false,
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.ph_img_mid .slick-slide').removeClass('on05 on06 on07 on08');
        }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.ph_img_mid .slick-current').toggleClass('on05 on06 on07 on08');
        });
    })

    $(function () {
        $(".ph_img .ph_img_right").slick({
            dots: false, //navigation
            arrows: true, //arrow
            prevArrow: $('.ph_btn_prev'), //prev
            nextArrow: $('.ph_btn_next'), //next
            autoplay: false, // autoplay mode
            autoplaySpeed: 2000, // auto speed
            pauseOnHover: false, // pause on mouse hover
            fade: true, //fade mode only one slider
            speed: 900, // speed
            infinite: true, // infinite mode
            asNavFor: '.slider', // another slider
            centerMode: true, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 1, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable: true,
            vertical: false, // vertical sliders
            verticalSwiping: false, // vertical swiper
            initialSlide: 0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
            variableWidth: false,
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.ph_img_right .slick-slide').removeClass('on09 on10 on11 on12');

            // transform current photo from start

        }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.ph_img_right .slick-current').toggleClass('on09 on10 on11 on12');
        });




        $(function () {
            $(".ph_f_title").slick({
                dots: false, //navigation
                arrows: true, //arrow
                prevArrow: $('.ph_btn_prev'), //prev
                nextArrow: $('.ph_btn_next'), //next
                autoplay: false, // autoplay mode
                autoplaySpeed: 2000, // auto speed
                pauseOnHover: false, // pause on mouse hover
                fade: true, //fade mode only one slider
                speed: 900, // speed
                infinite: true, // infinite mode
                //asNavFor: '.slider', // another slider
                centerMode: true, // center move
                centerPadding: '0%', // center move padding
                slidesToShow: 1, // show slider number
                slidesToScroll: 1, // next slider number
                swipe: true, // swiper
                focusOnSelect: true, // click to slider
                draggable: true,
                vertical: false, // vertical sliders
                verticalSwiping: false, // vertical swiper
                initialSlide: 0,// slider number
                cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
                variableWidth: false,
            }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                //센터에서 나간 후

                //    센터에서 들어온 후
            }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
            })
        });
    })


    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


    });


    $(function () {
        $(".bg").slick({
            dots: false, //navigation
            arrows: true, //arrow
            prevArrow: $('.ph_btn_prev'), //prev
            nextArrow: $('.ph_btn_next'), //next
            autoplay: false, // autoplay mode
            autoplaySpeed: 2000, // auto speed
            pauseOnHover: false, // pause on mouse hover
            fade: true, //fade mode only one slider
            speed: 900, // speed
            infinite: true, // infinite mode
            asNavFor: '.slider', // another slider
            centerMode: true, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 1, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable: true,
            vertical: false, // vertical sliders
            verticalSwiping: false, // vertical swiper
            initialSlide: 0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
            variableWidth: false,
        });
    })


    /*
        $(function () {
            $(".ph_img").slick({
                dots: false, //navigation
                arrows: true, //arrow
                prevArrow: $('.ph_btn_prev'), //prev
                nextArrow: $('.ph_btn_next'), //next
                autoplay: false, // autoplay mode
                autoplaySpeed: 2000, // auto speed
                pauseOnHover: false, // pause on mouse hover
                fade: false, //fade mode only one slider
                speed: 900, // speed
                infinite: true, // infinite mode
                asNavFor: '.ph_img01_2_berlin02', // another slider
                centerMode: false, // center move
                centerPadding: '0%', // center move padding
                slidesToShow: 3, // show slider number
                slidesToScroll: 3, // next slider number
                swipe: true, // swiper
                focusOnSelect: true, // click to slider
                draggable: true,
                vertical: false, // vertical sliders
                verticalSwiping: false, // vertical swiper
                initialSlide: 0,// slider number
                cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
                variableWidth: false,
            }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                $('.ph_img .slick-slide').removeClass('on01');
                $('.ph_img .slick-slide').removeClass('on02');
                $('.ph_img .slick-slide').removeClass('on03');
                $('.ph_img .slick-slide').removeClass('on04');
                $('.ph_img .slick-slide').removeClass('on05');
                $('.ph_img .slick-slide').removeClass('on06');
            }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
                $('.ph_img .slick-current').addClass('on01');
                $('.ph_img .slick-current').addClass('on02');
                $('.ph_img .slick-current').addClass('on03');
                $('.ph_img .slick-current').addClass('on04');
                $('.ph_img .slick-current').addClass('on05');
                $('.ph_img .slick-current').addClass('on06');



            });
        });*/




    $('#navi .btn_menu').click(function () {
        $('#menu').fadeIn(1000)
    })
    $('#menu .menu_btn_x').click(function () {
        $('#menu').fadeOut(1000)
    })

});


