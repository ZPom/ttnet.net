/**
 * 扩展jquery组件
 */
jQuery.fn.extend({
    /**
     * 浮动
     */
    nav_float:function () {
        var _this = $(this),
            _width = _this.outerWidth(true),
            _height = _this.outerHeight(true),
            _offset = _this.offset(),
            _left = _offset.left,
            _top = _offset.top,
            _data = Math.random()+"" + new Date().getTime(),
            _css = _this[0].style;
        _this.data()["data_float"] = _data;
        var _placeHolder  = "<div data_float="+_data+" style='visibility: hidden;margin: 0;padding: 0;position: relative;width: "+_width+"px;height:"+_height+"px;'>";

        //init style
        function initStyle(){
            _this[0].style = _css;
        }

        $(window).scroll(function () {
            var _scrollTop = $(document).scrollTop();
            var _place = $("div[data_float='"+_data+"']");
            if(_scrollTop > _top){
                if(!_place[0]){
                    _this.after(_placeHolder);
                    _this.css({"position":"fixed",left:_left,top:0,"z-index":9999});
                }
            }else{
                _place.remove();
                initStyle();
            }
        });
    }
});
