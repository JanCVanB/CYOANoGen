<template lang="pug">
  #app
    h2 Choose Your Own Adventure novel generator
    el-button.new-adventure(
      v-bind:disabled='!!adventure'
      v-on:click='adventure = onlyAdventureOption'
    )
      | {{ adventure ? 'Generate New Adventure' : 'Generate Adventure' }}
    transition(name='slide-fade')
      adventure(
        v-if='adventure'
        v-bind:adventure='adventure'
        v-on:scrollTo='scrollTo'
      )
</template>

<script>
import smoothScroll from 'smoothscroll'
import Adventure from './components/Adventure'

const SCROLL_DURATION_MILLISECONDS = 3000

const THE_SPOOKY_SCARY_SKELETON = {
  title: 'The Spooky Scary Skeleton'
}

export default {

  name: 'app',

  data () {
    return {
      adventure: null,
      onlyAdventureOption: THE_SPOOKY_SCARY_SKELETON
    }
  },

  methods: {

    scrollTo (target) {
      smoothScroll(target, SCROLL_DURATION_MILLISECONDS, null, this.$el)
    }

  },

  components: {
    Adventure
  }

}
</script>

<style lang="sass">
html, body, #app
  height: 100%
  margin: 0
  padding: 0
  width: 100%

#app
  box-sizing: border-box
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  overflow-y: scroll
  padding: 60px
  text-align: center

h1, h2, h3, h4, h5, h6
  font-weight: normal

.slide-fade-enter-active
  transition: all 2s ease

.slide-fade-leave-active
  transition: all 2s ease

.slide-fade-enter, .slide-fade-leave-to
  opacity: 0
  transform: translateY(100px)
</style>

<style lang="sass" scoped>
  .new-adventure
    margin: 20px 0
</style>
