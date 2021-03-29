import $ from 'jquery';

$(function () {
    $('.main_header_content_menu_mobile_obj').on('click', function () {

        if ($('#content').hasClass('off')) {
            $('#content').removeClass('off').addClass('ative');
        } else {
            $('#content').removeClass('active').addClass('off');
        }
        $(this).toggleClass('main_header_content_menu_mobile_obj_active');

    });
});
