
$(function(){

    /*导航栏吸顶效果*/
    $(window).scroll(function(){
        $(this).scrollTop() >= $(".fix").height()?$("header").slideUp(130):$("header").slideDown(130);
    })

    $(".space").click(function(){location.href = "cart.html"});
    /*导航栏商店获取商品分类*/
    $.get("http://h6.duchengjiu.top/shop/api_cat.php",function(msg){
        var obj=msg.data;
        // console.log(obj);
        var twolist = document.getElementById("nav-twolist");
        var aTitle = twolist.getElementsByTagName("a");
        for(var i=0;i<obj.length;i++){
            aTitle[i].href = "list.html?cat_id="+obj[i].cat_id;
            aTitle[i].innerHTML = obj[i].cat_name;
        }

        /*划入导航栏显示二级*/
        $("nav>ul>li").hover(function(){
            $(this).css("border-bottom","4px solid #000").siblings().css("border",0)
        },function(){
            $("nav ul li").css("border",0)
        })
        $(".shop").hover(function() {
            $(".shop-list").show();
            $(".shop-list-wrap").show();
        }, function() {
            $(".shop-list-wrap").hide();
            $(".shop-list").slideUp(300)

        });
    })




                /*通过中文搜索商品*/
                $(".btn").click(function(){
                    var strNew = $("#str").val();

                    // console.log(decodeURI(strNew));                //decodeURI(goodsId[1])
                    // console.log(strNew)
                    if(strNew){
                        location.href = "detail.html?search_text="+strNew;
                     }


                })



    /*滑入手指运动*/
    $(".foot p").hover(function(){
                $(".foot p em").animate({"left":-15}, 500);
                $(".foot p em").animate({"left":0}, 500);
                $(".foot p em").animate({"left":-15}, 500);
                $(".foot p em").animate({"left":0}, 500);
            },function(){
                $(".foot p em").stop();
            })
    $(".foot p").click(function(){
        location.href = "list.html";
    })

     /*滑入显示下载二维码*/
    $(".scan").hover(function(){
        $(this).css("cursor","pointer");
        $(".twolist").stop().fadeIn(150);
        $(".load").css("color","#999")
    },function(){
        $(".twolist").stop().fadeOut(150);
        $(".load").css("color","#485357")
    })

    /*滑入显示微信二维码*/
    $(".weixin").hover(function() {
        $(".wrap-scan").stop().fadeIn(150);
    }, function() {
        $(".wrap-scan").stop().fadeOut(150);
    });


    /*点击回到顶部*/
    $(window).scroll(function(){
        $(document).scrollTop() > $(".fix").height()?$(".totop").fadeIn(400):$(".totop").fadeOut(400);
    })
    $(".totop").hover(function(){
        $(this).stop().animate({"opacity":0.3},200)
    },function(){
        $(this).stop().animate({"opacity":1},200)
    })

    $(".totop").click(function(){
        $("html,body").animate({"scrollTop":0}, 300);
    })





})
