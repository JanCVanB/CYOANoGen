<template lang="pug">
  .adventure
    h2 {{ adventure.title }}
    transition-group(name='slide-fade')
      el-card.page(
        v-for='(page, pageIndex) in pages'
        v-bind:key='pageIndex'
      )
        p.text Once upon a time, there was a skeleton who was both spooky and scary.
        .options
          el-button.option(v-on:click='addPage') Do a spooky thing
          el-button.option(v-on:click='addPage') Do a scary thing
</template>

<script>
export default {

  name: 'adventure',

  props: {

    adventure: {
      type: Object,
      required: true
    },

    appElement: {
    }

  },

  data () {
    return {
      pages: [1]
    }
  },

  methods: {

    addPage () {
      this.pages.push(1)
      setTimeout(() => {
        const lastPage = this.$el.querySelector('.page:last-child')
        this.$emit('scrollTo', lastPage)
      }, 500)
    }

  }

}
</script>

<style lang="sass" scoped>
.adventure
  margin: 0 auto
  width: 500px

.page
  background-color: var(--color-lightest)
  margin: 10px 0
  .text
    margin: 20px 20px 40px 20px
    text-align: left
  .options
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    & .option
      background-color: transparent
      -webkit-order: 1
      -ms-flex-order: 1
      order: 1
      -webkit-flex: 0 1 auto
      -ms-flex: 0 1 auto
      flex: 0 1 auto
      -webkit-align-self: auto
      -ms-flex-item-align: auto
      align-self: auto
</style>
