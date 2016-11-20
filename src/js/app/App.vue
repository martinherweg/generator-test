<template>
  <div class="app" :class="{'app--game': game, 'app--legal': legal }">
    <_header></_header>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <_footer></_footer>
  </div>
</template>

<script>
  import _header from './_layout/header.vue';
  import _footer from './_layout/footer.vue';
  import { debounce } from 'lodash';

  export default {
    name: 'app',
    mounted() {
      window.addEventListener('resize', debounce(this.getWindowWidth, 1500));
      this.getWindowWidth();
    },
    data() {
      return {
        windowWidth: null,
      }
    },
    components: {
      _header,
      _footer,
    },
    computed: {
      game() {
        return this.$route.name === 'game';
      },
      legal() {
        return this.$route.name === 'impressum';
      }
    },
    methods: {
      getWindowWidth(event) {
        this.$set(this, 'windowWidth', document.documentElement.clientWidth);
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', debounce(this.getWindowWidth), 500);
    },
  }
</script>