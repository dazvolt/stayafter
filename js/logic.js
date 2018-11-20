$(document).ready(function() {
    load_data('chapter1', 'point1');

    $('.action-area-buttons').on('click', '.action-area-buttons-button', function() {
       let chapter = $(this).data('chapter');
       let point = $(this).data('point');

       console.log(chapter, point);

       load_data(chapter, point);
    });
});

function load_data(chapter, point) {
    let $text_block = $('#text-area');
    let $buttons_block = $('.action-area-buttons');
    $buttons_block.html('');

    $text_block.html($text_block.text() + '<br /> ' + '<span class="text-block">' + game[chapter][point].text + '<span/>');

    for (let key in game[chapter][point].options) {
        if (game[chapter][point].options.hasOwnProperty(key)) {
            $buttons_block.append('' +
                '<button class="action-area-buttons-button" ' +
                'data-chapter="' + game[chapter][point].options[key][1].split(',')[0] +
                '" data-point="' + game[chapter][point].options[key][1].split(',')[1] + '">'
                + game[chapter][point].options[key][0] +
                '</button>');
        }
    }
}