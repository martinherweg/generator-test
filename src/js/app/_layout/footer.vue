<template>
  <footer class="footer">
    <testlounge v-if="this.$parent.$data.windowWidth <= 620"></testlounge>
    <newsletter v-if="this.$parent.$data.windowWidth <= 890"></newsletter>
    <router-link class="button button--blue" to="/impressum">
      Impressum
    </router-link>
    <div class="footer__ravensburger_logo">
      <img :src="`${baseUrl}/assets/images/htmlimages/ravensburger-logo.png`" alt="">
    </div>
  </footer>
</template>

<script>
  import { baseUrl } from '../store'
  import Newsletter from './newsletter.vue';
  import Testlounge from './testlounge.vue';

  export default {
    name: 'Footer',
    data() {
      return {
        baseUrl
      }
    },
    components: {
      Newsletter,
      Testlounge
    }
  }
</script>