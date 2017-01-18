/**
 * Created by marina on 18.01.17.
 */
$(document).ready(function(){
    $( ".inputted" ).change(function() {
        console.log($(this).val());
    });
    $('button').on('click',function(event){
        event.preventDefault();
        console.log($('form').serialize());
    });
    $('.first-name').change(function() {
        var firstName = $(this).val();
        $('.last-name').val(firstName);
    });
    i = 0;
    $("input").keypress(function(){
        $("span").text(i += 1);
    });
    $('#textfield').on('keydown', function() {
       $(this).addClass('active')
    });
    $('#textfield').on('keyup', function() {
        $(this).removeClass('active')
    });
});

