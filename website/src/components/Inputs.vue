<template lang="pug">
  .inputs
    h3.header How does your adventure begin?
    .input
      | I am
      el-input.input(v-model='person' placeholder='Who are you?')
    .input
      | at
      el-input.input(v-model='place' placeholder='Where are you?')
    .input
      | with a
      el-input.input(v-model='thingSingular' placeholder='...')
    .input
      | and some
      el-input.input(v-model='thingPlural' placeholder='...')
      | .

</template>

<script>
export default {

  name: 'inputs',

  data () {
    return {
      person: '',
      place: '',
      thingPlural: '',
      thingSingular: ''
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
  text-align: left
  user-select: none
  width: 600px

.header
  text-align: center

.input
  display: inline-block
  margin: 5px 0
</style>
