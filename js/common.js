/* header */
$('header').each(function(){
    const $win = $(window),
          $header = $(this);
    let wrapHeight = $header.offset().top + $header.outerHeight();

    $win.on('scroll', function(){
        if($win.scrollTop() > wrapHeight){
            $header.addClass('on')
            $('.top').addClass('on')
            $('.logo > a > img').attr('src', 'img/icon/icon_logoS.png')
        }else{
            $header.removeClass('on')
            $('.top').removeClass('on')
            $('.logo > a > img').attr('src', 'img/icon/icon_logo.png')
        }
    })
})

/* windo 휠 기능 막기 */
window.addEventListener('wheel', function(e){
    e.preventDefault();
}, {passive : false});

/* 스크롤 시 cont 영역 별로 이동 */
var $html = $('html'),
    $page = 1;

$html.animate({scrollTop : 0}, 10);

$(window).on('wheel',function(e){
    if($html.is(":animated")) return;
    if(e.originalEvent.deltaY > 0){
        if($page == 3) return;
        $page++;
    } else if(e.originalEvent.deltaY < 0){
        if($page ==1) return;
        $page --;
    }

    var typingEnd = false;

    if($page == 2 && !typingEnd){
        typingStart()
        typingAct = true;
    }

    var posTop = ($page-1) * $(window).height();
    $html.animate({scrollTop : posTop})
})

/* nav 누를 시 해당 영역 이동 */
$('nav > ul > li > a[href*="#"]').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:
        $(this.hash).offset().top}, 500)
})

/* top 누를 시 맨 위로 */
$('.top').on('click', function(){
    $('html').animate({scrollTop:0}, 300)
})

/* 슬라이드 진행도 */
$('.portSlide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var calc = ((nextSlide + 1) / slick.slideCount) * 100;
    $('.progressbar').css('background-size', calc + '% 100%').attr('a')
})