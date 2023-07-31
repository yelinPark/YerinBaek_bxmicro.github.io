window.addEventListener('DOMContentLoaded', function () {




        container.addListener((e) => {



            let scrollTop = container.scrollTop;
            $('.posNum').html(scrollTop)

            /*            if (scrollTop >= 800){
                            $('#section01').addClass('on1')
                        }*/

            if (scrollTop >= 550) {
                $('#section01').addClass('on1')
            }


            if (scrollTop >= 500 && scrollTop <= 650) {
                $('#ab_bottom .ab_intro .ab_baek').css('transform', `translate(${(-200) + scrollTop * 0.4}px`);
                $('#ab_bottom .ab_intro .ab_f_inkorea').css('transform', `translate(${(-200) + scrollTop * 0.4}px`);
            }

            if (scrollTop >= 600 && scrollTop <= 750) {
                $('#ab_bottom .ab_intro .ab_comb_img02').css('transform', `translate(-${(-120) + scrollTop * 0.2}px, -${(-120) + scrollTop * 0.2}px)`);
            }


            if (scrollTop >= 600) {
                $('#ab_bottom').addClass('on1')
            }




            //year start
            //2015
            if (scrollTop >= 1300 && scrollTop <= 1400) {
                $('#ab_bottom .year .ab_img03_2015').css('transform', `translate(${(-520) + scrollTop * 0.4}px, ${(-520) + scrollTop * 0.4}px)`);
            }

            if (scrollTop >= 1300) {
                $('#ab_bottom').addClass('on2')
            }

            //2016
            if (scrollTop >= 1600 && scrollTop <= 1700) {
                $('#ab_bottom .ab_2016 .ab_img04_1_2016').css('transform', `translate(${(-640) + scrollTop * 0.4}px, ${(-640) + scrollTop * 0.4}px)`);
                $('#ab_bottom .ab_2016 .ab_img04_2_2016').css('transform', `translate(-${(-320) + scrollTop * 0.2}px, -${(-320) + scrollTop * 0.2}px)`);
                $('#ab_bottom .ab_2016 .ab_f_2016_comb').css('transform', `translate(${(-640) + scrollTop * 0.4}px, -${(-640) + scrollTop * 0.4}px)`);
            }


            if (scrollTop >= 500) {
                $('#ab_bottom').addClass('on5')
            }


            if (scrollTop >= 1600) {
                $('#ab_bottom').addClass('on3')
                $('#ab_bottom').addClass('on4')
            }


            //new label
            if (scrollTop >= 2400) {
                $('#ab_bottom').addClass('on6')
            }

            if (scrollTop >= 1600) {
                $('#ab_bottom').addClass('on7')
            }

            if (scrollTop >= 2530) {
                $('#ab_bottom').addClass('on8')
            }

            if (scrollTop >= 2000) {
                $('#ab_bottom').addClass('on9')
            }

            if (scrollTop >= 2600) {
                $('#ab_bottom').addClass('on10')
            }


            //bg_line02
            if (scrollTop >= 3400) {
                $('#ab_bottom').addClass('on11')
            }



            //2019.03
            if (scrollTop >= 3200 && scrollTop <= 3400) {
                $('#ab_bottom .ab_2019 .ab_img05_1_201903').css('transform', `translate(${(-640) + scrollTop * 0.2}px, ${(-640) + scrollTop * 0.2}px)`);
                $('#ab_bottom .ab_2019 .ab_img05_2_201903').css('transform', `translate(-${(-640) + scrollTop * 0.2}px, -${(-640) + scrollTop * 0.2}px)`);
                $('#ab_bottom .ab_2019 .ab_f_201903_comb').css('transform', `translate(-${(-640) + scrollTop * 0.2}px, -${(-640) + scrollTop * 0.2}px)`);
            }

            if (scrollTop >= 4000 && scrollTop <= 4800) {
                $('#ab_bottom .ab_2019 .ab_201903 .ab_img05_3_201903').css('transform', `translate(${(-1600) + scrollTop * 0.4}px}, -${(-1600) + scrollTop * 0.4}px)`);
            }

            if (scrollTop >= 4050) {
                $('#ab_bottom').addClass('on12')
            }





            //2019.12
            if (scrollTop >= 4000 && scrollTop <= 4200) {
                $('#ab_bottom .year .ab_201912 .ab_img06_1_201912').css('transform', `translate(-${(-1600) + scrollTop * 0.4}px)`);
                $('#ab_bottom .year .ab_201912 .ab_img06_2_201912').css('transform', `translate(${(-1200) + scrollTop * 0.3}px, ${(-1260) + scrollTop * 0.3}px)`);
                $('#ab_bottom .year .ab_201912 .ab_f_2019_comb').css('transform', `translate(${(-1600) + scrollTop * 0.4}px)`);
            }

            if (scrollTop >= 4000) {
                $('#ab_bottom').addClass('on13')
            }



            if (scrollTop >= 5500) {
                $('#ab_bottom').addClass('on20')
            }

            if (scrollTop >= 5800) {
                $('#ab_bottom').addClass('on21')
            }

            if (scrollTop >= 6100) {
                $('#ab_bottom').addClass('on22')
            }

            if (scrollTop >= 6500) {
                $('#ab_bottom').addClass('on23')
            }









            if (scrollTop >= 7200) {
                $('#ab_bottom').addClass('on19')
            }


            //st_bg_line03
            if (scrollTop >= 6800) {
                $('#ab_bottom').addClass('on15')
            }


            //2020
            if (scrollTop >= 7000 && scrollTop <= 7100) {
                $('#ab_bottom .year .ab_2020 .ab_img07_1_2020').css('transform', `translate(-${(-2800) + scrollTop * 0.4}px, ${(-2800) + scrollTop * 0.4}px)`);
                $('#ab_bottom .year .ab_2020 .ab_img07_2_2020').css('transform', `translate(${(-2800) + scrollTop * 0.4}px, ${(-2800) + scrollTop * 0.4}px)`);
                $('#ab_bottom .year .ab_2020 .ab_img07_3_2020').css('transform', `translate(${(-2800) + scrollTop * 0.4}px, ${(-2800) + scrollTop * 0.4}px)`);
            }

            if (scrollTop >= 7000) {
                $('#ab_bottom').addClass('on16')
                $('#ab_bottom').addClass('on17')
                $('#ab_bottom').addClass('on18')
            }



            if (scrollTop >= 7200 && scrollTop <= 7300) {
                $('#ab_bottom .year .ab_2020 .ab_img07_4_2020').css('transform', `translate(${(-2880) + scrollTop * 0.4}px, -${(-2880) + scrollTop * 0.4}px)`);
                $('#ab_bottom .year .ab_2020 .ab_img07_5_2020').css('transform', `translate(-${(-2880) + scrollTop * 0.4}px, ${(-2880) + scrollTop * 0.4}px)`);
            }

            if (scrollTop >= 7200) {
                $('#ab_bottom').addClass('on19')
                $('#ab_bottom').addClass('on20')
            }















        });


        $('#navi .btn_menu').click(function () {
            $('#menu').fadeIn(1000)
        })
        $('#menu .menu_btn_x').click(function () {
            $('#menu').fadeOut(1000)
        })


    }
)
