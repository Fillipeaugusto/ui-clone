import $ from 'jquery';

$(function () {
    $('.main_header_content_menu_mobile_obj').on('click', function () {
        $('.main_header_content_menu_mobile_obj_sub').toggleClass('ds_none');
        $(this).toggleClass('main_header_content_menu_mobile_obj_active');
        alert('oi')
    });
});