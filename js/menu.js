window.addEventListener('DOMContentLoaded', function () {


    $(function() {
        $('.menu_fd_home').hover(function() {
            $('.menu_img_home').css("opacity", "1");
            $('.menu_img_about').css("opacity", "0");
            $('.menu_img_photo').css("opacity", "0");
            $('.menu_img_video').css("opacity", "0");
            $('.menu_img_ticket').css("opacity", "0");
        }, function() {
            // on mouseout, reset the background colour
            // $('.menu_img_home').css("opacity", "0");
        });
    });

    $(function() {
        $('.menu_fd_about').hover(function() {
            $('.menu_img_home').css("opacity", "0");
            $('.menu_img_about').css("opacity", "1");
            $('.menu_img_photo').css("opacity", "0");
            $('.menu_img_video').css("opacity", "0");
            $('.menu_img_ticket').css("opacity", "0");
        }, function() {
            // on mouseout, reset the background colour
            // $('.menu_img_about').css("opacity", "0");
        });
    });


    $(function() {
        $('.menu_fd_photo').hover(function() {
            $('.menu_img_home').css("opacity", "0");
            $('.menu_img_about').css("opacity", "0");
            $('.menu_img_photo').css("opacity", "1");
            $('.menu_img_video').css("opacity", "0");
            $('.menu_img_ticket').css("opacity", "0");
        }, function() {
            // on mouseout, reset the background colour
            // $('.menu_img_photo').css("opacity", "0");
        });
    });


    $(function() {
        $('.menu_fd_video').hover(function() {
            $('.menu_img_home').css("opacity", "0");
            $('.menu_img_about').css("opacity", "0");
            $('.menu_img_photo').css("opacity", "0");
            $('.menu_img_video').css("opacity", "1");
            $('.menu_img_ticket').css("opacity", "0");
        }, function() {
            // on mouseout, reset the background colour
            // $('.menu_img_video').css("opacity", "0");
        });
    });


    $(function() {
        $('.menu_fd_ticket').hover(function() {
            $('.menu_img_home').css("opacity", "0");
            $('.menu_img_about').css("opacity", "0");
            $('.menu_img_photo').css("opacity", "0");
            $('.menu_img_video').css("opacity", "0");
            $('.menu_img_ticket').css("opacity", "1");
        }, function() {
            // on mouseout, reset the background colour
            // $('.menu_img_video').css("opacity", "0");
        });
    });


 /*   $(document).ready(function(){
        $(".menu_fd_home").hover(function(){
            $(".menu_img_home").css("opacity", "1");
            console.log("1");
        });


        $(".menu_fd_about").hover(function(){
            $(".menu_img_about").css("opacity", "1");
            console.log("2");
        });

        $(".menu_fd_photo").hover(function(){
            $(".menu_img_about").css("opacity", "1");
            console.log("3");
        });

        $(".menu_fd_video").hover(function(){
            $(".menu_img_video").css("opacity", "1");
            console.log("4");
        });
    });*/



        container.addListener((e) => {

            let scrollTop = container.scrollTop;
            $('.posNum').html(scrollTop)

            /*            if (scrollTop >= 800){
                            $('#section01').addClass('on1')
                        }*/





/*
            $(function() {
                $('.menu_fd_home').hover(function() {
                    $('#menu_fd_home').css('opacity', '1');
                });
            });


*/













            });


    }
)
