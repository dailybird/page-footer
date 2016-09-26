/**
 * Created by dailybird on 16/8/24.
 */
(function($){
    $.fn.footer = function(){

        var $footer = $(this);

        $footer.css('visibility', 'hidden');
        $footer.css('margin-bottom', 0); // footer 元素不应具有下外边距
        // 获取相邻元素
        var $prev = $footer.prev();
        // 相邻元素的底端坐标( 考虑 margin 值 )
        // var prevBottomPosition = $prev.offset().top + $prev.outerHeight(true);
        // console.log(prevBottomPosition);
        // footer上一相邻元素的顶端坐标( 考虑 margin 值 ), 上一种计算方法也可以
        var prevBottomPosition = $footer.offset().top - parseInt($footer.css('margin-top'));
        // 计算 footer 的高度值, 这里不考虑外边距, 只考虑内边距和边框
        var footerHeight = $footer.outerHeight();
        // 获取不作调整时的 footer 底端坐标
        var predictBottomPosition = prevBottomPosition + footerHeight;
        // 计算浏览器高度值
        var windowHeight = $(window).height();

        if(predictBottomPosition < windowHeight){
            var offset = windowHeight - prevBottomPosition - footerHeight;
            // console.log(windowHeight , prevBottomPosition , footerHeight);
            $footer.css('margin-top', offset + 'px');
        }
        $footer.css('visibility', 'visible');
    }
})(jQuery);