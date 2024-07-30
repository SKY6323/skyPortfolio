/* main star효과 */
$(document).ready(function(){
    var stars=800;
    var $stars=$(".stars");
    var r=800;
    for(var i=0;i<stars;i++){
      var $star=$("<div/>").addClass("star");
      $stars.append($star);
    }
        $(".star").each(function(){
        var cur=$(this);
        var s=0.2+(Math.random()*1);
        var curR=r+(Math.random()*300);
        cur.css({ 
        transformOrigin:"0 0 "+curR+"px",
        transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
         
        })
    })
})

/* profile h3 텍스트 */
var typingAct = false;

function typingStart(){
    if(!typingAct){
        var typingBool = false;
        var typingIdx = 0;
        let typingTxt = "모두가 즐길 수 있는 사이트를 만드는 퍼블리셔";
            
        typingTxt = typingTxt.split("");
            
        if(typingBool == false){
            typingBool = true;
            var tyInt = setInterval(typing, 100)
        }

        function typing(){
            if(typingIdx < typingTxt.length){
                $('.typing').append(typingTxt[typingIdx]);
                typingIdx++;
            }else{
                clearInterval(tyInt)
                typingAct == true;
            }
        }
    }
}

/* skill 설명 */
$('.skill > li').on('click',function(){
    const $skillex = $('.skill_ex')
    const $skillexp = $('.skill_ex > p')

    switch($(this).index()){
        case 0:
            $skillexp.text('유효성 문제 없이 HTML5 웹접근성에 올바르며 모든 사람들이 편하게 이용할 수 있는 HTML 구조를 구성할 수 있습니다.');
            $skillex.addClass('on');
            $skillex.css('background-color', 'rgba(255,87,34,0.1)')
            break;

        case 1:
            $skillexp.text('CSS3 디자인과 애니메이션을 구성하며 JAVASCRIPT와 연동할 수 있는 화려한 디자인을 제작할 수 있습니다.');
            $skillex.addClass('on');
            $skillex.css('background-color', 'rgba(20,111,175,0.1)')
            break;

        case 2:
            $skillexp.text('슬라이드, 메뉴, 스크롤 애니메이션 기능 등 최신 트렌드에 적용된 다양한 동적 기능을 자바스크립트와 제이쿼리로 구현 가능합니다.');
            $skillex.addClass('on');
            $skillex.css('background-color', 'rgba(247,196,39,0.1)')
            break;
            
        case 3:
            $skillexp.text('사진 보정, 합성, 상세 페이지, SNS 디자인 등 다양한 실무 디자인을 창의적으로 제작할 수 있습니다.');
            $skillex.addClass('on');
            $skillex.css('background-color', 'rgba(45,37,95,0.1)')
            break;

        case 4:
            $skillexp.text('react를 이용한 프레임워크 환경에서 컴포넌트 단위의 마크업 작업이 가능합니다.');
            $skillex.addClass('on');
            $skillex.css('background-color', 'rgba(94,211,243,0.1)')
            break;

        case 5:
            $skillexp.text('git 명령어를 활용한 gitHub 프로젝트 관리를 진행할 수 있습니다.');
            $skillex.addClass('on');
            $skillex.css('background-color', 'rgba(232,78,49,0.1)')
            break;

        case 6:
            $skillexp.text('외에도 XD, Illustrator, Word, PPT, Excel, Figma 등의 프로그램과 Notion과 같은 웹 도구를 다룰 수 있습니다. ');
            $skillex.addClass('on');
            $skillex.css('background-color', 'rgba(119,201,81,0.1)')
            break;
        
        default:
            $skillexp.text('이미지를 클릭 해보세요!');
            $skillex.css('background-color', 'background: rgba(0, 0, 0, 0.6)')
    }
})

$('.skill').mouseout(function(){
    const $skillex = $('.skill_ex')
    const $skillexp = $('.skill_ex > p')

    $skillex.removeClass('on')
    $skillexp.text('이미지를 클릭 해보세요!');
    $skillex.css('background-color', 'background: rgba(0, 0, 0, 0.6)')
})

/* 슬라이드 진행도 */
$('.portSlide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var calc = ((nextSlide + 1) / slick.slideCount) * 100;
    $('.progressbar').css('background-size', calc + '% 100%').attr('a')
})

/* 슬라이드 스크롤 */
$('.asty').hover(function(){
    $(this).animate({scrollTop : $(this)[0].scrollHeight}, 4000, "linear")
},(function(){
    $(this).animate({scrollTop : 0}, 1000, "linear")
}))
$('.modu').hover(function(){
    $(this).animate({scrollTop : $(this)[0].scrollHeight}, 2000, "linear")
},(function(){
    $(this).animate({scrollTop : 0}, 1000, "linear")
}))
$('.dear').hover(function(){
    $(this).animate({scrollTop : $(this)[0].scrollHeight}, 3000, "linear")
},(function(){
    $(this).animate({scrollTop : 0}, 1000, "linear")
}))