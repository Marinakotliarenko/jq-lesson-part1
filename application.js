/**
 * Created by marina on 16.01.17.
 */
$(document).ready(function(){
    $('.add-class').on('click',function(){
        $(this).addClass('button-active');
    });
    $('.remove-class').on('click',function(){
        $(this).removeClass('button-active');
    });
    $('.toggle-class').on('click',function(){
        $(this).toggleClass('button-active');
    });
    $('.get-attr').on('click',function(){
       alert('name='+ $(this).attr('name'));
    });
    $('.set-attr').on('click',function(){
        $(this).attr('value', 'new-value');
        alert('value='+ $(this).attr('value'));
    });
    $('.alert-on-click').on('click',function(){
        alert('Hello everyone!');
    });
    $('.trigger-alert').on('click',function(){
        $('.alert-on-click').trigger('click');
    });
    $('.clone-this').on('click',function(){
        var cloned = $(this).clone();
        cloned.text(cloned.text() +' (cloned)');
        $(this).after(cloned);
    });
    $('.closest-element').on('click',function(){
        console.log($(this).parent());
    });
    $('.each-btn-text').on('click',function(){
        var arrey = [];
        $('.buttons li button').each( function() {
            arrey.push($(this).text().trim());
        });
        console.log(arrey)
    });
    $('.find-me').on('click',function(){
        console.log($('body').find('.find-me'));
    });
    $('.fade-in-text').click(function(){
        $(this).closest('li').find('.hide-t').fadeIn("slow");
    });
    $('.fade-out-text').click(function(){
        $(this).closest('li').find('.text').fadeOut("slow");
    });
    $('.hide-text').on('click',function(){
        $(this).closest('li').find('.text').hide();
    });
    $('.show-text').on('click',function(){
        $(this).closest('li').find('.hide-t').show();
    });
    $('.data-about-me').on('click',function(){
        var data = {btnWidth : $(this).width(),
            btnHeight: $(this).height(),
            offsetY : $(this).offset().top,
            offsetX : $(this).offset().left,
            atributesValues : $.map(this.attributes, function(val, key) { return val; }),
            parentEl : $(this).parent(),
            prevEl : $(this).prev(),
            nextEl : $(this).next(),
            buttonText : $(this).text()};
        console.log(data);
    });

    $('.tour').on('click', 'button',function(){
        $(this).closest('.tour').find('.more-info').toggleClass('active');
    });
    $('.unuseful').on ('click', function(){
       unuseful= $(this).detach();
    });
    $('.useful').on ('click', function(){
        $(this).html(unuseful);
    });

    $('#choose li').eq(1).css("background-color","yellow");
    $("#heading").click(function(){
        $("#hi").slideToggle("slow");
    });

});
