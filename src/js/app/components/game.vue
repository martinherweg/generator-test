<template>
  <div class="game" :class="[{'game--scheduled': game_scheduled, 'game--active': !game_scheduled},`game0${game.id}`]" v-if="game_scheduled">
    <div class="game__still">
      <div class="game__image_wrapper"
           :style="{
              background: 'url(' + baseUrl + '/assets/images/htmlimages/' + game.id + '-spielwelt-' + game.name + '-image.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
           }">
      </div>
    </div>
    <div class="game__hover">
      <img :src="`${baseUrl}/assets/images/htmlimages/${game.id}-spielwelt-${game.name}.png`" alt="" class="game__world">
      <div class="game__image_wrapper"
           :style="{
              background: 'url(' + baseUrl + '/assets/images/htmlimages/' + game.id + '-spielwelt-' + game.name + '-image_hover.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
           }">
      </div>
    </div>
    <div class="info_box game__info">
      <div class="info_box__logo">
        <img :src="`${baseUrl}/assets/images/htmlimages/${game.id}-spielwelt-${game.name}.png`" alt="">
      </div>
      <div class="info_box__till">
        <span v-if="game_scheduled">
          Nur noch {{ game.start_time|till }}
        </span>
        <span v-else>
          Jetzt entdecken
        </span>
      </div>
      <div class="info_box__begin">
        Ab {{ game.start_time|begin }}
      </div>
    </div>
  </div>

  <router-link :to="{ path: `game/${game.id}` }" class="game" :class="[{'game--scheduled': game_scheduled, 'game--active': !game_scheduled},`game0${game.id}`]" v-else>
    <div class="game__still">
      <div class="game__image_wrapper"
           :style="{
              background: 'url(' + baseUrl + '/assets/images/htmlimages/' + game.id + '-spielwelt-' + game.name + '-image.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
           }">
      </div>
    </div>
    <div class="game__hover">
      <img :src="`${baseUrl}/assets/images/htmlimages/${game.id}-spielwelt-${game.name}.png`" alt="" class="game__world">
      <div class="game__image_wrapper"
           :style="{
              background: 'url(' + baseUrl + '/assets/images/htmlimages/' + game.id + '-spielwelt-' + game.name + '-image_hover.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
           }">
      </div>
    </div>
    <div class="info_box game__info">
      <div class="info_box__logo">
        <img :src="`${baseUrl}/assets/images/htmlimages/${game.id}-spielwelt-${game.name}.png`" alt="">
      </div>
      <div class="info_box__till">
        <span v-if="game_scheduled">
          Nur noch {{ game.start_time|till }}
        </span>
        <span v-else>
          Jetzt entdecken
        </span>
      </div>
    </div>
  </router-link>

</template>

<script>
  import moment from 'moment';
  import { baseUrl } from '../store';

  export default {
    name: 'game',
    props: ['game'],
    data() {
      return {
        baseUrl
      }
    },
    computed: {
      game_scheduled() {
        return moment().format('DDMMHHmm') < moment(this.game.start_time, 'DD.MM.YYYY HH:mm').format('DDMMHHmm');
      }
    }
  }
</script>