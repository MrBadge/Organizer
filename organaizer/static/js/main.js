(function () {
    $(document).on('click', '.circle', function(e) {
        e.preventDefault();
        $('.circle').removeClass('active');

        $(this).addClass('active');

        $('.day_dashes').removeClass('active');
        $(this).children('.day_dashes').addClass('active');
    });

    //$(document).on('click', '.day_of_week', function(e) {
    //    e.preventDefault();
    //});
})(jQuery);