<template>
  <div class="header__newsletter">
    <span class="header__newsletter_text">Jetzt für den tiptoi® Newsletter anmelden:</span>
    <form id="form__newsletter" v-on:submit.prevent="sendNewsletter()">
      <div class="form__field_group">
        <input type="email" class="form__field" id="js-getEmailValue" placeholder="E-Mail Adresse" required>
        <button type="submit" class="form__submit" id="newsletterIcon">
          <svg class="icon">
            <use :xlink:href="`${baseUrl}/assets/images/svg/sprite/sprite.svg#icon-send`"/>
          </svg>
        </button>
      </div>
    </form>
    <div id="messagebox"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { isObject } from 'lodash'
  import { baseUrl } from '../store';
  
  var formEnabled = true;

  export default {
    data() {
      return {
        baseUrl
      }
    },
    methods: {
      sendNewsletter() {
        if (formEnabled) {
          formEnable(false);
          var newsletterIcon = document.querySelector('#newsletterIcon');
          newsletterIcon.classList.remove('goback');
          newsletterIcon.classList.add('goforit');
          var values = { email : document.querySelector('#js-getEmailValue').value };
          var headers = { "Content-Type" : 'application/x-www-form-urlencoded' };
          var data = jsonToFormEncoded(values,headers);
          axios.post(siteUrl + '/newsletter/add',data)
              .then(function (response) {
                if (response.data == true) {
                  document.querySelector('#js-getEmailValue').value = "";
                  giveMessage(true, 'Deine Email-Adresse wurde hinzugefügt. Du wirst noch eine Bestätigungsmail bekommen.');
                } else {
                  giveMessage(false, 'Leider konnte deine Email-Adresse nicht hinzugefügt werden.');
                }
              }).catch(function (error) {
            giveMessage(false, 'Leider konnte deine Email-Adresse nicht hinzugefügt werden.');
          });
        }
      }

    }
  }

  function formEnable(bool_var) {
    formEnabled = bool_var;
  }

  function giveMessage(success, message) {
    formEnable(true);
    var messageBox = document.querySelector('#messagebox');
    var newsletterIcon = document.querySelector('#newsletterIcon');
    messageBox.innerHTML = message;
    if (success)
      messageBox.classList.add('success');
    else
      messageBox.classList.add('error');
    messageBox.classList.add('visible');
    setTimeout(function(){
      newsletterIcon.classList.remove('goforit');
      messageBox.classList.remove('visible');
      messageBox.classList.remove('success');
      messageBox.classList.remove('error');
    }, 4000);
  }

  function jsonToFormEncoded(data, headers) {
    var str = [];
    for(var p in data){
      if(isObject(data[p])){
        var d = data[p];
        for(var o in d){
          if (d.hasOwnProperty(o) && d[o]) {
            str.push(p+'['+encodeURIComponent(o) + "]=" + encodeURIComponent(d[o]));
          }
        }
      }else{
        if (data.hasOwnProperty(p) && data[p]) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
        }
      }
    }
    return str.join("&");
  }
</script>