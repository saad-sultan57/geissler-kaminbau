$(document).ready(function(){
    // Show the "scroll to top" button when user scrolls down
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').css({visibility:'visible'});
        } else {
            $('#scrollToTop').css({visibility:'hidden'});
        }
    });

    // Scroll to the top when the button is clicked
    $('#scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

});