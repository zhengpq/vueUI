import Vue from 'vue'
import dialog from './Dialog'
import alert from '../Alert/index'

const DialogConstructor = Vue.extend(dialog)
DialogConstructor.prototype.alert = alert
let index = 0
const Dialog = (options) => {
    const id = index++
    const DialogInstane = new DialogConstructor({
        data: {
            transparent: false,
            title: options.title,
            content: options.content,
            styleType: options.styleType,
            btnType: options.btnType,
            btnTextDefault: options.btnTextDefault,
            btnTextPrimary: options.btnTextPrimary,
        },
    })
    DialogInstane.id = id
    DialogInstane.vm = DialogInstane.$mount()
    DialogInstane.dom = DialogInstane.vm.$el
    document.body.appendChild(DialogInstane.dom)
    return DialogInstane.vm
}

export default {
    install() {
        Vue.prototype.$dialog = Dialog
    },
}

