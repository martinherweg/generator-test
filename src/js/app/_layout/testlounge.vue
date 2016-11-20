<template>
  <div class="header__testlounge">
    <a href="https://www.ravensburger-produkttester.de/" target="_blank">
      <img :src="`${baseUrl}/assets/images/htmlimages/ravensburger-testlounge.png`" alt="">
    </a>
  </div>
</template>

<script>
  import { baseUrl } from '../store';

  export default {
    name: 'testlounge_button',
    data() {
      return {
        baseUrl
      }
    },
  }
</script>