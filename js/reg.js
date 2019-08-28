/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 13:30:56
 * @LastEditTime: 2019-08-28 13:55:19
 * @LastEditors: Please set LastEditors
 */
$(function() {
    var $page = $(".pageReg");
    $page.delegate("#submit", "click", function(e) {
        $page.find(".step1").hide().siblings(".step2").show();
    });
})