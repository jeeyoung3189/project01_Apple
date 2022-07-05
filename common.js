$(function(){
    // 모바일 메뉴
    $('.ham').click(function(){
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
        scroll_on()
    })

    $('.gnb > a').click(function(){
        $('.gnb').removeClass('on')
    })

    // 메뉴 등장 시 스크롤 제한
    function scroll_on() {
        $('.wrap').on('scroll touchmove mousewheel', function (e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        });
    }

    // sec3 영상 기능
    let vid = $('.sec3_list li.on').find('video').get(0)
    vid.currentTime = 0
    vid.play()
    $('.sec3_list li').click(function(e){
        e.preventDefault()
        vid.pause();
        $('.sec3_list li').removeClass('on')
        $(this).addClass('on')
        vid = $('.sec3_list li.on').find('video').get(0)
        vid.currentTime = 0
        vid.play()
    })

    //  sec5 모바일 슬라이드 기능
    let w = $('.sec5_list li').width()

    $('.next').click(function(){
        $('.sec5_list').stop().animate({marginLeft:-w}, 500, function(){
            $('.sec5_list li').eq(0).appendTo('.sec5_list')
            $('.sec5_list').css({marginLeft:0})
        })
    })

    $('.prev').click(function(){
        $('.sec5_list li').eq(-1).prependTo('.sec5_list')
        $('.sec5_list').css({marginLeft:-w})
        $('.sec5_list').stop().animate({marginLeft:0}, 500)
    })

    // 한 섹션씩 스크롤
    let elm = "section";
    $(elm).each(function (index) {
        $(this).on("mousewheel", function (e) {
            e.preventDefault();
            let delta = 0;

            let E = e.originalEvent

            if (event.wheelDelta) {
                delta = event.wheelDelta;
            }
            let moveTop = $(window).scrollTop();
            let elmSelecter = $(elm).eq(index);

            if (delta < 0) {
                if ($(elmSelecter).next('section') != undefined) {
                    try {
                        moveTop = $(elmSelecter).next('section').offset().top;
                    } catch (e) {}
                }
            } else {
                if ($(elmSelecter).prev('section') != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev('section').offset().top;
                    } catch (e) {}
                }
            }

            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, 300);
        });
    });


    // 마우스 커서 변경
    $(function () {
        $('.wrap').prepend(`
        <div class="cursor1"></div>
        `)
    })

    $(document).mousemove(function (e) {
        let E = e.originalEvent
        console.log(E)

        $('.cursor1').css({
            left: e.pageX,
            top: e.pageY
        });

        for (var r = $(".cursor"), a = r.length - 1; a >= 0; a--) {
            o(r[a])
        }

        function o(t) {
            t.addEventListener("mouseover", n),
                t.addEventListener("mouseout", s)
        }

        function n(t) {
            $(".cursor1").addClass("hover");
        }

        function s(t) {
            $(".cursor1").removeClass("hover");
        }
    });
})