<template lang="pug">
  #adventure
    h3 {{ adventure.title }}
</template>

<script>
export default {

  name: 'adventure',

  props: {

    adventure: {
      type: Object,
      required: true
    }

  }

}
</script>

<style lang="sass" scoped>
</style>
