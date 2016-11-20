<template>
  <div class="take" :class="[{'take--active': active, 'take--scheduled': !scheduled }, `take--${layout}`]" @click="set_toggle">

    <template v-if="layout === 'left'">
      <div class="take__image">
        <div class="take__image_wrapper" v-if="scheduled">
          <img :data-src="`${baseUrl}/assets/images/htmlimages/takes/${id}/${take_id}-take-still.jpg`" alt="" class="take__image--still lazyload">
          <img :data-src="`${baseUrl}/assets/images/htmlimages/takes/${id}/${take_id}-take-hover.jpg`" alt="" class="take__image--hover lazyload" v-if="this.$parent.$parent.$data.windowWidth > 950">
          <img :data-src="`${baseUrl}/assets/images/htmlimages/takes/${id}/${take_id}-take-click.jpg`" alt="" class="take__image--click lazyload" v-if="active || this.$parent.$parent.$data.windowWidth < 950">
        </div>
        <div class="take__image_wrapper" v-else>
          <img :src="`${baseUrl}/assets/images/htmlimages/takes/${id}/${take_id}-take-blur.jpg`" alt="" class="take__image--placeholder">\
          <span class="take__start_date">
            Nur noch {{ start_date|till}}
          </span>
        </div>
      </div>
      <div class="take__text">
        <div class="take__text__rotated" v-show="active">
          <span class="quotes">
            <img :src="`${baseUrl}/assets/images/htmlimages/quote_top.png`" alt="">
          </span>
          <div class="take__question">
            {{ text }}
          </div>
          <span class="quotes quote--bottom">
            <img :src="`${baseUrl}/assets/images/htmlimages/quote_bottom.png`" alt="">
          </span>

          <img :src="`${baseUrl}/assets/images/htmlimages/tip-toi-take.png`" alt="" class="take__pen">
        </div>
      </div>
    </template>

    <template v-else>
      <div class="take__text">
        <div class="take__text__rotated" v-show="active">
          <span class="quotes">
            <img :src="`${baseUrl}/assets/images/htmlimages/quote_top.png`" alt="">
          </span>
          <div class="take__question">
            {{ text }}
          </div>
          <span class="quotes quote--bottom">
            <img :src="`${baseUrl}/assets/images/htmlimages/quote_bottom.png`" alt="">
          </span>

          <img :src="`${baseUrl}/assets/images/htmlimages/tip-toi-take.png`" alt="" class="take__pen">
        </div>
      </div>
      <div class="take__image">
        <div class="take__image_wrapper" v-if="scheduled">
          <img :data-src="`${baseUrl}/assets/images/htmlimages/takes/${id}/${take_id}-take-still.jpg`" alt="" class="take__image--still lazyload">
          <img :data-src="`${baseUrl}/assets/images/htmlimages/takes/${id}/${take_id}-take-hover.jpg`" alt="" class="take__image--hover lazyload" v-if="this.$parent.$parent.$data.windowWidth > 950">
          <img :data-src="`${baseUrl}/assets/images/htmlimages/takes/${id}/${take_id}-take-click.jpg`" alt="" class="take__image--click lazyload" v-if="active || this.$parent.$parent.$data.windowWidth < 950">
        </div>
        <div class="take__image_wrapper" v-else>
          <img :data-src="`${baseUrl}/assets/images/htmlimages/takes/${id}/${take_id}-take-blur.jpg`" alt="" class="take__image--placeholder lazyload">
          <span class="take__start_date">
            Nur noch {{ start_date|till}}
          </span>
        </div>
    </template>

  </div>
</template>

<script>
  import Howler from 'howler';
  import moment from 'moment';
  import { store, baseUrl } from '../store';
  const { Howl } = Howler;

  export default {
    name: 'take',
    props: ['id', 'take_id', 'layout', 'text', 'start_date'],
    data() {
      return {
        baseUrl,
        active: false,
        sound: null,
      }
    },
    mounted() {
      this.sound = new Howl({
        src: [`${this.baseUrl}/assets/sounds/${this.id}/${this.take_id}.mp3`]
      });
    },
    beforeDestroy() {
      this.sound.stop();
    },
    computed: {
      date() {
        return moment().format('DDMMHHmm')
      },
      scheduled() {
        return this.date > moment(this.start_date, 'DD.MM.YYYY HH:mm').format('DDMMHHmm');
      },
    },
    methods: {
      set_toggle() {
        if (!this.scheduled) return
        this.active = true;
        this.sound.play();
      }
    }
  }
</script>
