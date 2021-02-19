// ADD ACTIVE CLASS TO NAV MENU
$(document).ready(function() {
    $(".nav_link").click(function () {
        $(".nav_link").removeClass("active");
        $(this).addClass("active");     
    });
    $(".sitename").click(function () {
        $(".nav_link").removeClass("active");
    })
});

// ADD CLASS ACTIVE TO NAV MENU ON SCROLL
$(window).scroll(function(){
    var scrollTop = $(document).scrollTop();
    var anchors = $('body').find('section');
    
    for (var i = 0; i < anchors.length; i++){
        if (scrollTop > $(anchors[i]).offset().top - 50 && scrollTop < $(anchors[i]).offset().top + $(anchors[i]).height() - 70) {
            $('nav ul li a[href="#' + $(anchors[i]).attr('id') + '"]').addClass('active');
        } else {
            $('nav ul li a[href="#' + $(anchors[i]).attr('id') + '"]').removeClass('active');
        }
    }
    });


// FORM VALIDATION CODE
function validateContact() {
    var valid = true;	
    $(".demoInputBox").css('background-color','');
    $(".info").html('');
    if(!$("#inputName").val()) {
        $("#inputName-info").html("We would like to know your name");
        $("#inputName").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#inputEmail").val()) {
        $("#inputEmail-info").html("A valid email would be appreciated!");
        $("#inputEmail").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#inputEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#inputEmail-info").html("Are you missing a period or @?");
        $("#inputEmail").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#exampleFormControlTextarea1").val()) {
        $("#inputMessage-info").html("What would you like us to do for you?");
        $("#exampleFormControlTextarea1").css('background-color','#FFFFDF');
        valid = false;
    }
    return valid;
}


function sendContact() {
    var valid;	
    valid = validateContact();
    if(valid) {
        jQuery.ajax({
            url: "contact_mail.php",
            data:'inputName='+$("#inputName").val()+'&inputEmail='+
            $("#inputEmail").val()+'&exampleFormControlTextarea1='+
            $(content).val(),
            type: "POST",
            success:function(data){
                $("#mail-status").html(data);
            },
            error:function (){}
        });
    }
}


function moveContact() {
    window.location.href = '#contact_us';
}
