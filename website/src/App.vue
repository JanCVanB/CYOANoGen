<template lang="pug">
  #app
    h1 Choose Your Own Adventure novel generator
    p
      a(href='https://github.com/JanCVanB/CYOANoGen') Check out the source code on GitHub
    inputs
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
import Inputs from './components/Inputs'
import theRainyDay from '../adventures/theRainyDay'

const SCROLL_DURATION_MILLISECONDS = 3000

export default {

  name: 'app',

  data () {
    return {
      adventure: null,
      onlyAdventureOption: theRainyDay
    }
  },

  methods: {

    scrollTo (target) {
      smoothScroll(target, SCROLL_DURATION_MILLISECONDS, null, this.$el)
    }

  },

  components: {
    Adventure,
    Inputs
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
  --color-dark: #073642
  --color-darkest: #002b36
  --color-light: #eee8d5
  --color-lightest: #fdf6e3
  background-color: var(--color-light)
  box-sizing: border-box
  color: var(--color-darkest)
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  overflow-y: scroll
  padding: 60px 60px 120px 60px
  text-align: center
  & > h2
    margin-top: 0

h1, h2, h3, h4, h5, h6
  font-weight: normal

.slide-fade-item
  display: inline-block
  transition: all 2s ease

.slide-fade-enter-active
  transition: all 2s ease

.slide-fade-leave-active
  position: absolute
  transition: all 2s ease

.slide-fade-enter, .slide-fade-leave-to
  opacity: 0
  transform: translateY(100px)
</style>

<style lang="sass" scoped>
  .new-adventure,
  .new-adventure:hover
    background-color: transparent
    margin: 20px 0
</style>
