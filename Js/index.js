/**
 * Created by lizhipeng on 2017/5/10.
 */
(function ($) {

    /*我的文笔交互*/
    $("#site-ttnet").hover(function () {
        $("#ttnet-arrow").addClass("iarrow-hover");
        $("#site-ttnet a").addClass("a-hover");
    },function () {
        $("#ttnet-arrow").removeClass("iarrow-hover");
        $("#site-ttnet a").removeClass("a-hover");
    })
    
    $("#icon-search").click(function () {
        var _input = $("#search-input");
        if(_input[0].width <= 0){
            $("#search-input").addClass("search-input-show").focus();
        }else{
            // $("#search-input").removeClass("search-input-show");
            //提交搜索表单
        }
    });

    $("#search-input").blur(function () {
        if(!$.trim($(this).val())){
            $("#search-input").removeClass("search-input-show");
        }
    });
    
    $("#moblie-menu-wrap").hover(function () {
        $("#moblie-menu").addClass("moblie-menu-hover");
        $("#mobile-site-nav").addClass("mobile-site-nav-show");
    },function () {
        $("#moblie-menu").removeClass("moblie-menu-hover");
        $("#mobile-site-nav").removeClass("mobile-site-nav-show");
    })

    // 分类开关
    $("#open-switch").click(function () {
        if($(".category").position().left >=0){
            $("#open-iarrow").removeClass("iarrow-hover");
            $("#category").removeClass("category-show");
        }else{
            $("#open-iarrow").addClass("iarrow-hover");
            $("#category").addClass("category-show");
        }
    })

    $("#open-switch, #category").focus(function () {
        $("#open-iarrow").addClass("iarrow-hover");
        $("#category").addClass("category-show");
    }).blur(function () {
        $("#open-iarrow").removeClass("iarrow-hover");
        $("#category").removeClass("category-show");
    })
})(jQuery);