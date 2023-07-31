window.addEventListener('DOMContentLoaded', function () {



        //audio
        function audioMute (){
            for(let i = 0; i < bgmList.length; i++){
                bgmList[i].pause();
                bgmList[i].currentTime = 0;


            }
        }



        const bgmList = [
            new Audio('audio/bgm01.mp3' ),
            new Audio('audio/bgm02.mp3'),
            new Audio('audio/bgm03.mp3'),
            new Audio('audio/bgm04.mp3')
        ]


        $('.btn_music').click(function () {
            $('.btn_music').toggleClass('on1000');
            console.log('ok')
        });




        let index = 1;



        // bgmList[this].volume=0.2;
        $('.at_btn_pause').click(function () {

            $(this).toggleClass('on');
            $('#section02').toggleClass('on');





            if($(this).hasClass('on')){

                bgmList[0].volume = 0.4
                bgmList[1].volume = 0.4
                bgmList[2].volume = 0.4
                bgmList[3].volume = 0.4
                $('.at_btn_pause img').attr('src','img/main/bottom/cdlist/at_btn_pause.png');

                switch (index) {

                    case 1 :
                        bgmList[0].play();


                        break;

                    case 2 :

                        bgmList[1].play();
                        break;

                    case 3 :

                        bgmList[2].play();
                        break;


                    case 4 :

                        bgmList[3].play();
                        break;

                }



            }else{


                $('.at_btn_pause img').attr('src','img/main/bottom/cdlist/at_btn_play2.png');

                switch (index) {

                    case 1 :

                        bgmList[0].pause();
                        break;

                    case 2 :

                        bgmList[1].pause();
                        break;

                    case 3 :

                        bgmList[2].pause();
                        break;


                    case 4 :

                        bgmList[3].pause();
                        break;



                }



            }



        });


        $('.at_btn_prev').click(function () {

            index --;

            audioMute();
            if(index < 1){

                $('.at_btn_prev').addClass('on');
            }


        });

        $('.at_btn_next').click(function () {
            index ++;
            audioMute();


            $('.at_btn_prev').removeClass('on');



        });
















/*    let a = 1

    $('.photo_f_next').click(function () {

        if (a >= 1) {
            $('.photo_bar_now').addClass('on999')
            /!*$('.photo_bar_now').css('transform', `translateX(100px)`);*!/
            a=a+1;


        }
    });*/












        container.addListener((e) => {

            let scrollTop = container.scrollTop;
            $('.posNum').html(scrollTop)

            if (scrollTop >= 0 && scrollTop <= 7762) {
                $('#section01').css('transform', `translateY(${scrollTop}px)`);
            }



            //common.css에서의 페이지 넘버
            if( scrollTop >= 0 && scrollTop <= 2000) {
                $('.navi_f_page_01 img').attr('src',`img/main/top/navi_f_page_01.png`);
            }
            if( scrollTop >= 2000 && scrollTop <= 3000) {
                $('.navi_f_page_01 img').attr('src',`img/main/top/navi_f_page_02.png`);
                $('#navi .navi_page_right .pagebar_now').css('transform', `translateY(${(38)}px)`);
            }
            if( scrollTop >= 3000 && scrollTop <= 4000) {
                $('.navi_f_page_01 img').attr('src',`img/main/top/navi_f_page_03.png`);
                $('#navi .navi_page_right .pagebar_now').css('transform', `translateY(${(76)}px)`);
            }
            if( scrollTop >= 4000 && scrollTop <= 5000) {
                $('.navi_f_page_01 img').attr('src',`img/main/top/navi_f_page_04.png`);
                $('#navi .navi_page_right .pagebar_now').css('transform', `translateY(${(114)}px)`);
            }
            if( scrollTop >= 5000 && scrollTop <= 6000) {
                $('.navi_f_page_01 img').attr('src',`img/main/top/navi_f_page_05.png`);
                $('#navi .navi_page_right .pagebar_now').css('transform', `translateY(${(152)}px)`);
            }

            //common.css에서의 스크롤바
            if (scrollTop >= 1080 && scrollTop <= 2160) {
                /*                $('#navi').addClass('on6')};*/
                $('#navi .navi_page_right .pagebar_now').css('transform', `translateY(-${(-1080) }px)`);
            }


            if (scrollTop >= 1500 && scrollTop <= 1800) {
                $('#section02 #about .img .about_img1').css('transform', `translate(${(-900) + scrollTop * 0.6}px,-${(-900) + scrollTop * 0.6}px)`);
                // $('#section02 #about .img .about_img1').css('transform', 'translate(50px, 30px) rotate(25deg)');
                $('#section02 #about .img .about_img2').css('transform', `translate(${(-600) + scrollTop * 0.4}px,-${(-600) + scrollTop * 0.4}px)`);
                $('#section02 #about .img .about_img3').css('transform', `translate(-${(-600) + scrollTop * 0.4}px, -${(-600) + scrollTop * 0.4}px)`);
            }


            if (scrollTop >= 1700 && scrollTop <= 1850) {
                $('#section02 #about .img .about_img4').css('transform', `translate(-${(-340) + scrollTop * 0.2}px, -${(-340) + scrollTop * 0.2}px)`);
            }

            if (scrollTop >= 1700 && scrollTop <= 1850) {
                $('#section02 #about .img .about_img5').css('transform', `translate(-${(-170) + scrollTop * 0.1}px, -${(-170) + scrollTop * 0.1}px)`);
            }

            if (scrollTop >= 1700 && scrollTop <= 1850) {
                $('#section02 #about .font').css('transform', `translate(${(-680) + scrollTop * 0.4}px, -${(-680) + scrollTop * 0.4}px)`);
            }


            if (scrollTop >= 1500) {
                $('#section02').addClass('on1')
            }

            if (scrollTop >= 1800) {
                $('#section02').addClass('on2')
            }

            if (scrollTop >= 1900) {
                $('#section02').addClass('on3')
            }


            /*#section03 .thefirst .tf_top .f_thefirst*/
            if (scrollTop >= 2700 && scrollTop <= 2900) {
                $('#section02 .f_thefirst').css('transform', `translateY(-${(-1080) + scrollTop * 0.4}px)`);
            }

            /*#section03 .thefirst .tf_top .f_2019*/
            if (scrollTop >= 3000) {
                $('#section02').addClass('on101')
            }

            if (scrollTop >= 3000 && scrollTop <= 3200) {
                $('#section02 .f_2019').css('transform', `translateY(-${(-1200) + scrollTop * 0.4}px)`);
            }


            if (scrollTop >= 3000) {
                $('#section02').addClass('on102')
            }




            //photo
            if (scrollTop >= 3700 && scrollTop <= 4100) {
                $('#section03 #photo .photo_img1_1').css('transform', `translate(-${(-740) + scrollTop * 0.2}px,-${(-740) + scrollTop * 0.2}px)`);
                $('#section03 #photo .photo_img1_5').css('transform', `translate(${(-740) + scrollTop * 0.2}px,-${(-740) + scrollTop * 0.2}px)`);
                $('#section03 #photo .photo_img1_3').css('transform', `translate(${(-740) + scrollTop * 0.2}px,-${(-740) + scrollTop * 0.2}px)`);


                $('#section03 #photo .photo_right .photo_btn_more').css('transform', `translateX(-${(-740) + scrollTop * 0.2}px`);
                $('#section03 #photo .photo_right .photo_img_bar').css('transform', `translateX(-${(-740) + scrollTop * 0.2}px`);
                $('#section03 #photo .photo_right .photo_f_more').css('transform', `translateX(-${(-740) + scrollTop * 0.2}px`);
                $('#section03 #photo .photo_right .photo_f_photo').css('transform', `translateX(-${(-740) + scrollTop * 0.2}px`);
                $('#section03 #photo .photo_right .photo_f_prev').css('transform', `translateX(-${(-740) + scrollTop * 0.2}px`);
                $('#section03 #photo .photo_right .photo_f_next').css('transform', `translateX(-${(-740) + scrollTop * 0.2}px`);
            }

            if (scrollTop >= 3900 && scrollTop <= 4100) {
                $('#section03 #photo .photo_img1_6').css('transform', `translate(-${(-1560) + scrollTop * 0.4}px,${(-1560) + scrollTop * 0.4}px)`);
                $('#section03 #photo .photo_img1_4').css('transform', `translate(${(-1560) + scrollTop * 0.4}px, ${(-1560) + scrollTop * 0.4}px)`);
                $('#section03 #photo .photo_img1_7').css('transform', `translate(-${(-1560) + scrollTop * 0.4}px, -${(-1560) + scrollTop * 0.4}px)`);

            }


            if (scrollTop >= 3700) {
                $('#section03').addClass('on201')
                $('#section03').addClass('on203')
            }





            if (scrollTop >= 4700 && scrollTop <= 5000) {
                $('#section03 #lotsof .lots_f').css('transform', `translateY(-${(-1880) + scrollTop * 0.4}px`);
            }


            if (scrollTop >= 5000) {
                $('#section03').addClass('on1002')
            }


            if (scrollTop >= 6500 && scrollTop <= 7500) {
                // $('#section04 #video .video_img02').css('transform', `translateY(-${(-1300) + scrollTop * 0.2}px)`);


            }


            if (scrollTop >= 1080 && scrollTop <= 2160) {
                /*                $('#navi').addClass('on6')};*/
                $('#navi .navi_page_right .pagebar_now').css('transform', `translateY(-${(-1080) }px)`);
            }

            if(scrollTop >= 0 && scrollTop <= 600){
                // $('#section01 .mainvideo').css('transform',`scale(${(1) +  scrollTop * 0.008}, ${(1) +  scrollTop * 0.008})`)




                let percent = 1/scrollTop
                let imgbg = document.querySelector('.mainvideo');
                console.log(imgbg.style.height);
                    // imgbg.style.clipPath =  "circle(" + scrollTop + "px at center)";
                // imgbg.setAttribute("style", "-webkit-clip-path:inset(" + scrollTop + "% 20 15 10)");
                // $('.mainvideo').css('clip-path', "inset(0px "+scrollTop+"px)")
                // $('.mainvideo').css('clip-path', "inset("+percent+"px "+scrollTop+"px )")
                // $(".mainvideo").css({'clip-path': 'inset(0% ' + percent + '% 0% 0%)'});
                // $('#section01 .mainvideo').addClass('scale1920');
                // $('#section01 .mainvideo').css('transform',`scale(${(1) +  scrollTop * 0.008}, ${(1) +  scrollTop * 0.008})`)
                // $('#section01 .mainvideo').css('transform',`clip-path(${(0)}px)`)
            }

/*
            if(scrollTop >= 0 ){
                $('#section01 .mainvideo > video').addClass('on100');
            }
*/


/*            if(scrollTop >= 130 ){
                $('#section01 .mainvideo > video').addClass('on101');
            }else {
                $('#section01 .mainvideo > video').removeClass('on101');
            }*/


/*            let v1 = document.getElementById('.mainvideo');
            if(scrollTop >= 0 && scrollTop <= 800) {
                // $('#section01 .mainvideo >video').css('clip-path', `clip-path(${(1) +  scrollTop * 0.008}, ${(1) +  scrollTop * 0.008})`);
                v1.style.clipPath = "inset(0 0 0 0)" ;
                console.log(v1.style.clipPath);
            }*/



                if (scrollTop >= 0 && scrollTop <= 600) {
                $('#section01').css('transform', `translateY(${scrollTop}px)`);
            }


/*            let imgbg = document.querySelector('#section01 .mainvideo');
            window.addEventListener('scroll', function() {
                let value = window.scrollY;
                console.log(value);
                imgbg.style.clipPath = "inset(" + value + "px at center)";
            })*/



        });






        // const bgm01 = new Audio('bgm/bgm01.mp3');
        // const bgm02 = new Audio('bgm/bgm02.mp3');
        // const bgm03 = new Audio('bgm/bgm03.mp3');


        /*        $('.photo_f_next').click(function () {
                    $('#section04 #photo .photo_img1_1').css('transform', `translate(-${(-840) + scrollTop * 0.2}px,-${(-840) + scrollTop * 0.2}px)`);
                }
            */






        $(function () {
            $("#photo .photo_imgs").slick({
                dots: false, //navigation
                arrows: true, //arrow
                prevArrow: $('.photo_f_prev'), //prev
                nextArrow: $('.photo_f_next'), //next
                autoplay: false, // autoplay mode
                autoplaySpeed: 2000, // auto speed
                pauseOnHover: false, // pause on mouse hover
                fade: true, //fade mode only one slider
                speed: 900, // speed
                infinite: true, // infinite mode
                // asNavFor: '.slider2', // another slider
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






        $(function () {



            $("#slide").slick({
                dots: false, //navigation
                arrows: true, //arrow
                prevArrow: $('.video_btn_prev'), //prev
                nextArrow: $('.video_btn_next'), //next
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
                draggable: true,
                vertical: false, // vertical sliders
                verticalSwiping: false, // vertical swiper
                initialSlide: 0,// slider number
                cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
                variableWidth: true,

            }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                $('#slide .slick-slide').removeClass('on');

            }).on('afterChange', function(event, slick, currentSlide, nextSlide){
                $('#slide .slick-current').addClass('on');

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


