window.addEventListener('DOMContentLoaded', function () {


        $('#section02 .concert_play').click(function () {
            document.getElementById('.vi_1st_video01').play();
            console.log('333')
        })


        container.addListener((e) => {

            let scrollTop = container.scrollTop;
            $('.posNum').html(scrollTop)

            if (scrollTop >= 1600 && scrollTop <= 1800) {

                $('#section02 .vi_dt1_video01').css('transform', `translateX(${(-640) + scrollTop * 0.4}px`);
                $('#section02 .vi_dt1_img01').css('transform', `translate(-${(-640) + scrollTop * 0.4}px, -${(-640) + scrollTop * 0.4}px)`);
            }


            if (scrollTop >= 3600 && scrollTop <= 4000) {

                $('#section04 .vi_1st_video01').css('transform', `translateX(-${(-1440) + scrollTop * 0.4}px`);
                $('#section04 .vi_1st_img01').css('transform', `translate(${(-720) + scrollTop * 0.2}px, ${(-720) + scrollTop * 0.2}px)`);
                $('#section04 .vi_1st_img02').css('transform', `translate(${(-720) + scrollTop * 0.2}px, -${(-720) + scrollTop * 0.2}px)`);
            }


            if (scrollTop >= 3600 && scrollTop <= 3800) {

                $('#section04 .vi_1st_f_1st').css('transform', `translateY(-${(-720) + scrollTop * 0.2}px`);
            } else if (scrollTop > 1000) {
                /*                $('#section01').css('position','absolute')
                                console.log('2');*/

            }

            /* fix section */
            if (scrollTop >= 0 && scrollTop <= 650) {
                $('#section01').css('transform', `translateY(${scrollTop}px)`);
            }

            if (scrollTop >= 0 && scrollTop <= 650) {

                $('#section01 .video_top_thisalbum').css('transform', `translateY(-${(0) + scrollTop * 1}px`);
            }


        });



        /* 여기서 부터 복사하세요 */
        $(function () {

            const videoList = [
                document.querySelector('#slideVideo_01'),
                document.querySelector('#slideVideo_02'),
                document.querySelector('#slideVideo_03'),
                document.querySelector('#slideVideo_04'),
            ];

            function allMute(){

                for(let i = 0; i < videoList.length; i++){
                    videoList[i].pause();
                    videoList[i].currenTime = 0;

                }
            }


            $(".vi_lv_video").slick({
                dots: false, //navigation
                arrows: true, //arrow
                prevArrow: $('.vi_lv_btn_prev'), //prev
                nextArrow: $('.vi_lv_btn_next'), //next
                autoplay: false, // autoplay mode
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
                swipe : false,
                draggable: false,
                vertical: false, // vertical sliders
                verticalSwiping: false, // vertical swiper
                initialSlide: 0,// slider number
                cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
                variableWidth: true,

            }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                videoList[currentSlide].pause(); /* 각 슬라이드가 시작하는 지점에 오면 play되도록 하게 하는 구문입니다.*/


            }).on('afterChange', function (event, slick, currentSlide, nextSlide) {

                videoList[currentSlide].play(); /* 각 슬라이드가 시작하는 지점에 오면 play되도록 하게 하는 구문입니다.*/

            });
            /* 여기까지 복사해가시면 됩니다. */



            const video01 = document.querySelector('.vi_dt1');

            $('#section02 .cursor01').click(function () {

                $(this).fadeOut();
                video01.play();

            });

            $('.vi_dt1').click(function () {
                video01.pause();
                $('#section02 .cursor01').fadeIn();
            });


            const video02 = document.querySelector('.concert')

            $('#section04 .cursor02').click(function () {

                $(this).fadeOut();
                video02.play();

            });

            $('.concert').click(function () {
                video02.pause();
                $('#section04 .cursor02').fadeIn();
            });


            const video03 = document.querySelector('.vi_lv_video01_video')

            $('#section05 .cursor03').click(function () {

                $(this).fadeOut();
                video03.play();
            });

            $('.vi_lv_video01_video').click(function () {
                video03.pause();
                $('#section05 .cursor03').fadeIn();
            });






            $('#navi .btn_menu').click(function () {
                $('#menu').fadeIn(1000)
            })
            $('#menu .menu_btn_x').click(function () {
                $('#menu').fadeOut(1000)
            })


        });

    }
)


