import "./index.less"
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
    bindEvent: function() {
        var self = this;

        $("#play_icon").click(function(event) {
            /* Act on the event */
            $("#video-fc").hide();
            $(this).hide();
            self.video();
        });


        var scrollTime;
        var arr = ["paibot-safe", "paibot-studymate", "paibot-life", "paibot-parents", 'paibot-settings'];
        var whichIsClicked = [];
        $.each(arr, function(i, value) {
        	if (i == 0) {
        		$('#a-' + arr[0]).removeClass(arr[0] + "-leaves").addClass(arr[0] + "-enter");
                $('#' + arr[0]).show();
                self.setAnimate($('#' + arr[0]));
            }else{
            	$("#"+value).hide();
            }
            $('#a-' + value).click(function(e) {
                if (whichIsClicked.length == 0) {
                	$('#a-' + arr[0]).removeClass(arr[0] + "-enter").addClass(arr[0] + "-leaves");
                    $('#a-' + value).removeClass(value + "-leaves").addClass(value + "-enter");
                    $('#' + value).show();
                    $.each(arr, function(j, other) {
                        if (other !== value) {
                            $('#' + other).hide();
                        }
                    });
                    whichIsClicked.length = 0;
                    whichIsClicked.push(value);
                    $(document).on('scroll', function() {
                        self.setAnimate($('#' + value));
                    });
                } else if (whichIsClicked[0] == value) {
                    // return false;
                } else {
                    $('#a-' + whichIsClicked[0]).removeClass(whichIsClicked[0] + "-enter").addClass(whichIsClicked[0] + "-leaves");
                    $('#a-' + value).removeClass(value + "-leaves").addClass(value + "-enter");
                    $('#' + whichIsClicked[0]).hide();
                    $('#' + value).show();
                    $.each(arr, function(j, other) {
                        if (other !== value) {
                            $('#' + other).hide();
                        }
                    });
                    whichIsClicked.length = 0;
                    whichIsClicked.push(value);
                    $(document).on('scroll', function() {
                        self.setAnimate($('#' + value));
                    });
                }
                var  targetOffset, targetTop;
                if (value !== undefined) {
                    e.preventDefault();
                    targetOffset = $('#' + value).offset();
                    targetTop = targetOffset.top;
                }

                if ($('#a-' + value).data('scrolltime') !== undefined) {
                    scrollTime = $('#a-' + value).data('scrolltime');
                } else {
                    scrollTime = scrollTime;
                }
                $('html, body').stop().animate({
                    scrollTop: targetTop
                }, scrollTime);
            });
        });
    },
    setAnimate: function(scrollItem) {
        var self = this;
        var obj = scrollItem.find('.paibot-text').parent().parent();
        var top = $(document).scrollTop();
        obj.each(function(index, el) {
            switch (el.className) {
                    case "fw settings1":
                        break;
                    case "fw study2":
                        break;
                    case "fw safe3":
                        break;
                    case "fw safe5":
                        break;
                    case "fw safe7":
                        break;
                    case "fw safe8":
                        break;
                    case "fw safe9":
                        break;
                    case "fw safe6":
                        break;
                    case "fw safe4":
                        break;
                    case "fw safe2":
                        break;
                    default:
                        if(top < $(this).find('.paibot-text').offset().top){
                            $(this).find('.paibot-text').hide();
                            $(this).find('.paibot-text').addClass('animated bounceInDown');
                            $(this).find('.paibot-text').show();
                        }
                    break;
                }
        });
    },
    video: function() {
        var self = this;
        var video = $('<object type="application/x-shockwave-flash" data="http://player.youku.com/player.php/sid/XMTczNjY0NDc1Mg==/isAutoPlay/false/isShowRelatedVideo/false/partnerid/5c30db50b42ae8c4/v.swf" width="100%" height="100%" id="youku-player"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><param name="movie" value="http://player.youku.com/player.php/sid/XMTczNjY0NDc1Mg==/isAutoPlay/false/isShowRelatedVideo/false/partnerid/5c30db50b42ae8c4/v.swf"><param name="flashvars" value="imglogo=&amp;paid=0&amp;partnerId=5c30db50b42ae8c4&amp;styleid=0"></object>')
        video.appendTo($("#youkuplayer"));
    }
}
