<template lang="pug">
  .adventure
    h2 {{ adventure.title }}
    transition-group(name='slide-fade')
      el-card.page(
        v-for='(page, pageIndex) in pages'
        v-bind:key='page.key'
      )
        p.text {{ page.text }}
        .options(v-if='page.options')
          el-button.option(
            v-for='(option, optionIndex) in page.options'
            v-bind:key='page.key + optionIndex'
            v-on:click='handleOptionClick(pageIndex, option)'
          )
            | {{ option.text }}
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
      pages: [this.adventure.pages.start]
    }
  },

  methods: {

    handleOptionClick (pageIndex, option) {
      const newPage = this.adventure.pages[option.nextPage]
      this.pages.splice(pageIndex + 1, this.pages.length, newPage)
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
  position: relative
  width: 600px

.page
  background-color: var(--color-lightest)
  box-sizing: border-box
  margin: 10px 0
  padding: 10px 20px
  width: 100%
  .text
    margin: 10px 0
    text-align: left
  .options
    margin-top: 40px
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
      max-width: 40%
      white-space: normal
</style>
