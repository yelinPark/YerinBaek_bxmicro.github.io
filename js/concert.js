window.addEventListener('DOMContentLoaded', function () {







    $(function () {


        $(".con_pc_img").slick({
            dots: false, //navigation
            arrows: true, //arrow
            prevArrow: false, //prev
            nextArrow: false, //next
            autoplay: true, // autoplay mode
            autoplaySpeed: 2000, // auto speed
            pauseOnHover: false, // pause on mouse hover
            fade: false, //fade mode only one slider
            speed: 900, // speed
            infinite: true, // infinite mode
            // asNavFor: '.slider2', // another slider
            centerMode: true, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 3, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable: true,
            vertical: false, // vertical sliders
            verticalSwiping: false, // vertical swiper
            initialSlide: 0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
            variableWidth: true,

        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.con_pc_img .slick-slide').removeClass('on');

        }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.con_pc_img .slick-current').addClass('on');

        })









        container.addListener((e) => {

            let scrollTop = container.scrollTop;
            $('.posNum').html(scrollTop)



            if (scrollTop >= 800 && scrollTop <= 900) {
                // $('#section01 .s1_con_02_con').css('transform', `translateY(-${(-240) + scrollTop * 0.4}px`);
                // $('#section01 .con_ci_cont').css('transform', `translateY(-${(-160) + scrollTop * 0.4}px`);
            }


            if (scrollTop >= 240) {
                $('#section01').addClass('on01');
            }



/*            if (scrollTop >= 400 && scrollTop <= 600) {
                $('#section02 .con_ci_f_ci').css('transform', `translateY(-${(-80) + scrollTop * 0.2}px`);
                $('#section02 .con_ci_cont').css('transform', `translateY(-${(-160) + scrollTop * 0.4}px`);
            }*/


/*
            if (scrollTop >= 1200 && scrollTop <= 1800) {
                $('#section03 .con_tr_img01').css('transform', `translate(-${(-480) + scrollTop * 0.4}px, -${(-480) + scrollTop * 0.2}px)`);
                $('#section03 .con_tr_img01').css('transform', `translate(-${(-480) + scrollTop * 0.4}px, -${(-480) + scrollTop * 0.2}px)`);
            }
*/

                let img01 = document.querySelector('#section01 .con_tr_img01');
            if (scrollTop >= 1000 && scrollTop <= 1200) {
                $('#section01 .con_tr_img01').css('transform', `translate(-${(-600) + scrollTop * 0.6}px, -${(-400) + scrollTop * 0.4}px)`);
                img01.style.transform = "rotate(" + scrollTop/80 + "deg)" ;
            }








            /* fix section */
            if (scrollTop >= 0 && scrollTop <= 4320) {
                $('#section01 .con_sc_bg').css('transform', `translateY(${scrollTop}px)`);
            }

/*
            if (scrollTop >= 0 && scrollTop <= 4) {

                $('#section01 .s1_con').css('transform', `translateY(-${(-1080) + scrollTop * 1}px`);
            }
*/






        });


        $('#navi .btn_menu').click(function () {
            $('#menu').fadeIn(1000)
        })
        $('#menu .menu_btn_x').click(function () {
            $('#menu').fadeOut(1000)
        })


    });
})



