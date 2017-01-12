import "./paibandP.less"
import "../common/jquery/jquery-1.9.1.min"
import Utils from "../common/util.js"


Utils.namespace('PT.index');

PT.index = function(domSelector) {
    this.domSelector = domSelector;
    this.init();
    this.bindEvent();
}

PT.index.prototype = {
    init: function() {

    },
    bindEvent: function(){
        var self = this;
        $("#play_icon").click(function(event) {
            $("#video-fc").hide();
            $(this).hide();
            self.video();
        });
        
        $(document).on('scroll', function() {
            self.setAnimate();
        });
        
    },
    video: function() {
        var self = this;
        var video = $('<object type="application/x-shockwave-flash" data="http://player.youku.com/player.php/sid/XMTczOTA3MDY2OA==/isAutoPlay/false/isShowRelatedVideo/false/partnerid/5c30db50b42ae8c4/v.swf" width="100%" height="100%" id="youku-player"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><param name="movie" value="http://player.youku.com/player.php/sid/XMTczOTA3MDY2OA==/isAutoPlay/false/isShowRelatedVideo/false/partnerid/5c30db50b42ae8c4/v.swf"><param name="flashvars" value="imglogo=&amp;paid=0&amp;partnerId=5c30db50b42ae8c4&amp;styleid=0"></object>')
        video.appendTo($("#youkuplayer"));
    },
    setAnimate: function() {
        var self = this;
        var top = self.ScollPostion().top;
        if(top < $(".safe2").find('.paiband-text').offset().top){
            $(".safe2").find('.paiband-text').hide();
            $(".safe2").find('.paiband-text').addClass('bounceInDown');
            $(".safe2").find('.paiband-text').show();
        }else if(top < $(".life2").find('.paiband-text').offset().top){
            $(".life2").find('.paiband-text').hide();
            $(".life2").find('.paiband-text').addClass('bounceInDown');
            $(".life2").find('.paiband-text').show();
        }else if(top < $(".life3").find('.paiband-text').offset().top){
            $(".life3").find('.paiband-text').hide();
            $(".life3").find('.paiband-text').addClass('bounceInDown');
            $(".life3").find('.paiband-text').show();
        }else if(top < $(".life4").find('.paiband-text').offset().top){
            $(".life4").find('.paiband-text').hide();
            $(".life4").find('.paiband-text').addClass('bounceInDown');
            $(".life4").find('.paiband-text').show();
        }else if(top < $(".parent1").find('.paiband-text').offset().top){
            $(".parent1").find('.paiband-text').hide();
            $(".parent1").find('.paiband-text').addClass('bounceInDown');
            $(".parent1").find('.paiband-text').show();
        }else if(top < $(".parent2").find('.paiband-text').offset().top){
            $(".parent2").find('.paiband-text').hide();
            $(".parent2").find('.paiband-text').addClass('bounceInDown');
            $(".parent2").find('.paiband-text').show();
        }else if(top < $(".parent3").find('.paiband-text').offset().top){
            $(".parent3").find('.paiband-text').hide();
            $(".parent3").find('.paiband-text').addClass('bounceInDown');
            $(".parent3").find('.paiband-text').show();
        }else if(top < $(".parent4").find('.paiband-text').offset().top){
            $(".parent4").find('.paiband-text').hide();
            $(".parent4").find('.paiband-text').addClass('bounceInDown');
            $(".parent4").find('.paiband-text').show();
        }
    },
    ScollPostion: function() {//滚动条位置
        var t, l, w, h;
        if (document.documentElement && document.documentElement.scrollTop) {
        t = document.documentElement.scrollTop;
        l = document.documentElement.scrollLeft;
        w = document.documentElement.scrollWidth;
        h = document.documentElement.scrollHeight;
        } else if (document.body) {
        t = document.body.scrollTop;
        l = document.body.scrollLeft;
        w = document.body.scrollWidth;
        h = document.body.scrollHeight;
        }
        return { top: t, left: l, width: w, height: h };
    }
}
