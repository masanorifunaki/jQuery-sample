$(function () {
    'use strict';
    const $login = $('.login');
    const $loginForm = $('#login-form');
    const $fadeOutBtn = $('#fadeout-form-btn');
    const $description = $('#description');
    const $descriptionContent = $('#description-content');
    const $faqListItem = $('.faq-list-item');
    const $indexBtn = $('.index-btn');
    const $slide = $('.slide');


    $login.click(() => {
        $loginForm.fadeIn();
    });

    $fadeOutBtn.click(() => {
        $loginForm.fadeOut();
    });

    $description.hover(
        function () {
            $descriptionContent.fadeIn(500);
        },
        function () {
            $descriptionContent.fadeOut(500);
        }
    );

    $faqListItem.click(function () {
        var $answer = $(this).find('.answer');
        if ($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('span').text('+');
        } else {
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('span').text('-');
        }
    });

    $indexBtn.click(function () {
        $('.active').removeClass('active');
        var $clickedIndex = $indexBtn.index($(this));
        $slide.eq($clickedIndex).addClass('active');

    });

});