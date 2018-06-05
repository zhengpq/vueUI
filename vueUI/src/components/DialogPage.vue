<template>
  <div class='component'>
    <h2 class='component-title'>Dialog</h2>
    <div class='component-example'>
      <button @click = 'ios1'>IOS style 1</button>
      <button @click = 'ios2'>IOS style 2</button>
      <button @click = 'Android1'>Android style 1</button>
      <button @click = 'Android2'>Android style 2</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import dialog from './Dialog/index'
Vue.use(dialog)

export default {
    name: 'Dialog',
    methods: {
        ios1() {
            this.$dialog({
                transparent: false,
                title: 'IOS 1',
                content: 'This is IOS style1',
                btnType: 'default',
                btnTextDefault: 'Cancel',
                btnTextPrimary: 'Ok',
            })
        },
        ios2() {
            this.$dialog({
                transparent: false,
                title: 'IOS 2',
                content: 'This is IOS style2',
                btnType: 'primary',
                btnTextDefault: 'Cancel',
                btnTextPrimary: 'Ok',
            })
        },
        Android1() {
            this.$dialog({
                transparent: false,
                title: 'Android 1',
                content: 'This is IOS style1',
                styleType: 'Android',
                btnType: 'default',
                btnTextDefault: 'Cancel',
                btnTextPrimary: 'Ok',
            })
        },
        Android2() {
            this.$dialog({
                transparent: false,
                title: 'Android 2',
                content: 'This is IOS style2',
                styleType: 'Android',
                btnType: 'primary',
                btnTextDefault: 'Cancel',
                btnTextPrimary: 'Ok',
            })
        },
    },
}
</script>

<style scoped>

</style>
