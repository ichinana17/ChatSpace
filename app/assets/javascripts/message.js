$(function(){
  function buildHTML(message){
    if(message.image){
      var html = `<div class='message'>
                  <div class='message__upper-info'>
                    <div class='message__upper-info__talker'>
                      ${message.user_name}
                    </div>
                    <div class='message__upper-info__date'>
                      ${message.created_at}
                    </div>
                  </div>
                  <p class='message__text'>
                    ${message.content}
                  </p>
                  <img src='${message.image}', class='lower-message__image' width="200" height="109">
                </div>`
      return html;


    }else{
       var html = `<div class='message'>
                  <div class='message__upper-info'>
                    <div class='message__upper-info__talker'>
                      ${message.user_name}
                    </div>
                    <div class='message__upper-info__date'>
                      ${message.created_at}
                    </div>
                  </div>
                  <p class='message__text'>
                    ${message.content}
                  </p>
                </div>`
      return html;
    }
  }

$('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val('')
      $('.form__submit').attr('disabled', false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('メッセージを入力してください');
      $('.form__submit').attr('disabled', false);
    })
  })
})
