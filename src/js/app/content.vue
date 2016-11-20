<template>
  <section class="content__inner">
    <game v-for="game in games" :game="game"></game>
  </section>
</template>

<script>
  import { store, baseUrl } from './store';
  import Game from './components/game.vue';

  export default {
    name: 'homepage',
    data() {
      return {
          baseUrl,
          ...store,
      }
    },
    components: {
      Game
    }
  }
</script>