<template lang="pug">
  #app
    h2 Choose Your Own Adventure novel generator
    el-button.new-adventure(
      v-bind:disabled='!!adventure'
      v-on:click='adventure = onlyAdventureOption'
    )
      | {{ adventure ? 'Generate New Adventure' : 'Generate Adventure' }}
    adventure(
      v-if='adventure'
      v-bind:adventure='adventure'
    )
</template>

<script>
import Adventure from './components/Adventure'

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
  padding: 60px
  text-align: center
</style>

<style lang="sass" scoped>
  .new-adventure
    margin: 20px 0
</style>
