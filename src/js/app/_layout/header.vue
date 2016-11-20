<template>
  <header class="header">
    <router-link to="/" class="header__logo">
      <img :src="`${baseUrl}/assets/images/svg/single/tip-toi-logo.svg`" alt="">
    </router-link>
    <div class="header__right">
      <newsletter v-if="this.$parent.$data.windowWidth > 890"></newsletter>
      <testlounge v-if="this.$parent.$data.windowWidth > 620"></testlounge>
    </div>
  </header>
</template>

<script>
  import { baseUrl } from '../store';
  import Newsletter from './newsletter.vue';
  import Testlounge from './testlounge.vue';

  export default {
    name: 'header',
    data() {
      return {
        baseUrl
      }
    },
    components: {
      Newsletter,
      Testlounge
    }
  };
</script>
