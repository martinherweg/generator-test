<template>
  <section class="single_game">
    <div class="single_game__header">
      <div class="single_game__content">
        <div class="single_game__logo">
          <img :src="`${baseUrl}/assets/images/htmlimages/${game.id}-spielwelt-${game.name}.png`" alt="">
        </div>
        <div class="single_game__description">
          {{ game.details.description }}
        </div>
      </div>
      <div class="single_game__image">
        <img :src="`${baseUrl}/assets/images/htmlimages/${game.id}-spielwelt-${game.name}-single-header.jpg`" alt="" class="game__image">
      </div>
      <div class="footer__ravensburger_logo">
        <img :src="`${baseUrl}/assets/images/htmlimages/ravensburger-logo.png`" alt="">
      </div>
    </div>

    <div class="single_game__takes">
        <take :id="game.id" :take_id="take.id" :layout="take.layout" :text="take.text" :start_date="take.start_time" v-for="take in game.details.events"></take>
    </div>

    <p class="text-center">
      <router-link class="button button--blue" to="/">
        Zurück zur Übersicht
      </router-link>
    </p>
  </section>
</template>

<script>
  import { store, baseUrl } from '../store';
  import take from './take.vue';

  export default {
    name: 'game',
    components: {
      take
    },
    data() {
      return {
        baseUrl
      }
    },
    computed: {
      game() {
        const id = this.$route.params.id - 1;
        return store.games[id];
      }
    }
  }
</script>