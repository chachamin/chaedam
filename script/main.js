$(function(){

    $(window).load(function(){
        $("#popup").show()
    });
    $(".close").click(function(){
        $("#popup").hide()
    });

    $(".searchIcon").click(function(){
        $("#search").css({
            top:0
        })
    });
    $(".up").click(function() {
        $("#search").css({
            top: "-250px"
        })
    });

    $("#gnb>li").hover(function(){
        $(".lnb", this).stop().slideDown()
    }, function(){
        $(".lnb", this).stop().slideUp()
    });

        setInterval(function(){
        $("#imgs").animate({
            marginTop: "-500px"
        }, function(){
            $("#imgs img").eq(0).appendTo("#imgs")
            $("#imgs").animate({
                marginTop: 0
            },0)
        })
    },3000)
})