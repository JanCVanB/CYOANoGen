<template lang="pug">
  #app
    h1 Choose Your Own Adventure novel generator
    p
      a(href='https://github.com/JanCVanB/CYOANoGen') Check out the source code on GitHub
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
  title: 'The Spooky Scary Skeleton',
  pages: {
    start: {
      key: 'start',
      text: 'Once upon a time, there was a skeleton who was both spooky and scary.',
      options: [
        { nextPage: '1', text: 'Be  spooked' },
        { nextPage: '2', text: 'Be scared' }
      ]
    },
    '1': {
      key: '1',
      text: 'The skeleton chuckles and doubles her spookiness.',
      options: [
        { nextPage: '1-1', text: 'Be 2 spooked' },
        { nextPage: '1-2', text: 'Chuckle' }
      ]
    },
    '1-1': {
      key: '1-1',
      text: 'You die from spookiness.'
    },
    '1-2': {
      key: '1-2',
      text: 'You successfully fooled the skeleton. Good job.'
    },
    '2': {
      key: '2',
      text: 'The skeleton apologizes and gives you a grapefruit.',
      options: [
        { nextPage: '2-1', text: 'Peel the grapefruit' },
        { nextPage: '2-2', text: 'Question the grapefruit' }
      ]
    },
    '2-1': {
      key: '2-1',
      text: 'It is a skeleton grapefruit. Good job.'
    },
    '2-2': {
      key: '2-2',
      text: 'You die from skepticism.'
    }
  }
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
  padding: 60px
  text-align: center
  & > h2
    margin-top: 0

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
  .new-adventure,
  .new-adventure:hover
    background-color: transparent
    margin: 20px 0
</style>
