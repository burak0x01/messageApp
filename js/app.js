$(function() {

    $("#msg-send")
        .on("keypress", function(e){
            if (e.which === 13)
            {
                let msg = $(this).val();

                $(".chat-container .content .message-content")
                    .append(`<div class="message me">
                            <div class="bubble">${msg}</div>
                            <div class="time">${"1dk önce"}</div>
                            </div>`);

                $(this).val('');
            }
        });


    

    

    

});