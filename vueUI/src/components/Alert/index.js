import Vue from 'vue'
import alert from './Alert'

const AlertConstructor = Vue.extend(alert)
const Alert = (options) => {
    const AlertInstane = new AlertConstructor({
        data: {
            title: options.title,
        },
    })
    AlertInstane.vm = AlertInstane.$mount()
    AlertInstane.dom = AlertInstane.vm.$el
    document.body.appendChild(AlertInstane.dom)
    return AlertInstane.vm
}

export default {
    install() {
        Vue.prototype.$alert = Alert
    },
}

