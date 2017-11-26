<template lang="pug">
  .inputs
    h2.header How does your adventure begin?
    .premise
      .input
        | I am
        el-input.input(
          v-model='premise.person'
          placeholder='Who are you?'
          v-on:keyup.enter.native='tryToSubmit'
        )
      .input
        | at
        el-input.input(
          v-model='premise.place'
          placeholder='Where are you?'
          v-on:keyup.enter.native='tryToSubmit'
        )
      .input
        | with a
        el-input.input(
          v-model='premise.thingSingular'
          placeholder='...'
          v-on:keyup.enter.native='tryToSubmit'
        )
      .input
        | and some
        el-input.input(
          v-model='premise.thingPlural'
          placeholder='...'
          v-on:keyup.enter.native='tryToSubmit'
        )
        | .
    el-button.submit(
      v-bind:disabled='!canSubmit'
      v-on:click='tryToSubmit'
    )
      | Generate adventure
</template>

<script>
export default {

  name: 'inputs',

  data () {
    return {
      premise: {
        person: '',
        place: '',
        thingPlural: '',
        thingSingular: ''
      }
    }
  },

  computed: {

    canSubmit () {
      const { person, place, thingPlural, thingSingular } = this.premise
      return !!(person && place && thingPlural && thingSingular)
    }

  },

  methods: {

    submit () {
      this.$emit('submit', this.premise)
    },

    tryToSubmit () {
      console.log('checking')
      if (this.canSubmit) {
        console.log('we good')
        this.submit()
      }
    }

  }

}
</script>

<style lang="sass">
.inputs
  .input
    .el-input
      display: inline
      margin: 0 10px
      width: 220px
      .el-input__inner
        width: 220px
</style>

<style lang="sass" scoped>
.inputs
  margin: 0 auto
  user-select: none
  width: 600px

.premise
  text-align: left

.input
  display: inline-block
  margin: 5px 0

.submit
  margin: 20px 0
  &.is-disabled
    background-color: transparent
</style>
