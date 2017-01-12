import "../common/reset.css"
import "./index.less"
// import "../common/jquery/jquery-1.9.1.min"
import "../common/view-port.js"
// import Utils from "../common/util.js"

// Utils.namespace('PT.index');

// PT.index = function(domSelector) {
// 	this.domSelector = domSelector;
// 	this.init();
// 	this.bindEvent();
// }

// PT.index.prototype = {
// 	init: function() {
// 	},
// 	bindEvent: function() {
// 		var self = this;
// 		var scrollTime;
//         var arr = ["paibot-safe", "paibot-studymate", "paibot-life", "paibot-parents", 'paibot-settings'];
//         var whichIsClicked = [];
//         $.each(arr, function(i, value) {
//         	if (i == 0) {
//         		$('#a-' + arr[0]).removeClass(arr[0] + "-leaves").addClass(arr[0] + "-enter");
//                 $('#' + arr[0]).show();
//             }else{
//             	$("#"+value).hide();
//             }
//             $('#a-' + value).click(function(e) {
//                 if (whichIsClicked.length == 0) {
//                 	$('#a-' + arr[0]).removeClass(arr[0] + "-enter").addClass(arr[0] + "-leaves");
//                     $('#a-' + value).removeClass(value + "-leaves").addClass(value + "-enter");
//                     $('#' + value).show();
//                     $.each(arr, function(j, other) {
//                         if (other !== value) {
//                             $('#' + other).hide();
//                         }
//                     });
//                     whichIsClicked.length = 0;
//                     whichIsClicked.push(value);
//                 } else if (whichIsClicked[0] == value) {
//                     // return false;
//                 } else {
//                     $('#a-' + whichIsClicked[0]).removeClass(whichIsClicked[0] + "-enter").addClass(whichIsClicked[0] + "-leaves");
//                     $('#a-' + value).removeClass(value + "-leaves").addClass(value + "-enter");
//                     $('#' + whichIsClicked[0]).hide();
//                     $('#' + value).show();
//                     $.each(arr, function(j, other) {
//                         if (other !== value) {
//                             $('#' + other).hide();
//                         }
//                     });
//                     whichIsClicked.length = 0;
//                     whichIsClicked.push(value);
//                 }
//                 var  targetOffset, targetTop;
//                 if (value !== undefined) {
//                     e.preventDefault();
//                     targetOffset = $('#' + value).offset();
//                     targetTop = targetOffset.top;
//                 }

//                 if ($('#a-' + value).data('scrolltime') !== undefined) {
//                     scrollTime = $('#a-' + value).data('scrolltime');
//                 } else {
//                     scrollTime = scrollTime;
//                 }
//                 $('html, body').stop().animate({
//                     scrollTop: targetTop
//                 }, scrollTime);
//             });
//         });
//     }
// }
