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
$('.skill > li').mouseover(function(){
    const $skillex = $('.skill_ex')

    switch($(this).index()){
        case 0:
            $skillex.text('html');
            $skillex.addClass('on');
            break;

        case 1:
            $skillex.text('css');
            $skillex.addClass('on');
            break;

        case 2:
            $skillex.text('js');
            $skillex.addClass('on');
            break;
            
        case 3:
            $skillex.text('jq');
            $skillex.addClass('on');
            break;
        
        case 4:
            $skillex.text('ps');
            $skillex.addClass('on');
            break;

        case 5:
            $skillex.text('react');
            $skillex.addClass('on');
            break;

        case 6:
            $skillex.text('git');
            $skillex.addClass('on');
            break;

        case 7:
            $skillex.text('ect');
            $skillex.addClass('on');
            break;
        
        default:
            $skillex.text('이미지에 마우스를 올려 보세요!');
    }
})

$('.skill').mouseout(function(){
    const $skillex = $('.skill_ex')

    $skillex.removeClass('on')
    $skillex.text('이미지에 마우스를 올려 보세요!');
})