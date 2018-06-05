// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    methods: {
        message() {
            this.$dialog({
                transparent: false,
                title: 'IOS1',
                content: 'This is IOS1 style',
                btnType: 'primary',
                btnTextDefault: 'Cancel',
                btnTextPrimary: 'Ok',
            })
        },
    },
    template: '<div><App></App></div>',
})
