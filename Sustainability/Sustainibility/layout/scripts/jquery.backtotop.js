/*
Template Name: Sustainibility
Author: <a href="#">OS Templates</a>
Author URI: #
Copyright: OS-Templates.com
Licence: Free to use under our free template licence terms
Licence URI: #template-terms
File: Back to Top JS
*/

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});