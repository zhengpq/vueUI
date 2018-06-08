<template>
  <transition name= 'fade'>
    <div v-if="show">
      <div :class='[ {"weui-mask": !transparent}, {"weui-mask_transparent":transparent}]'>
      </div>
      <div :class='["weui-dialog",{"weui-skin_android": styleType === "Android"}]'>
        <div v-if='title? true : false'
             class="weui-dialog__hd"
        >
          <strong class="weui-dialog__title">{{title}}</strong>
        </div>
        <div class='weui-dialog__bd'>{{content}}</div>
        <div class='weui-dialog__ft'>
          <a href='javascript:;'
             @click ='finish'
             class="weui-dialog__btn weui-dialog__btn_default"
          >
            {{btnTextDefault}}
          </a>
          <a href="javascript:;"
             @click ='finish'
             v-if='btnType === "primary"'
             class="weui-dialog__btn weui-dialog__btn_primary"
          >
            {{btnTextPrimary}}
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'Dialog',
    data() {
        return {
            show: false,
        }
    },
    computed: {
    },
    methods: {
        finish() {
            this.show = false
            setTimeout(() => {
                this.$destroy()
            })
        },
    },
    mounted() {
        this.show = true
    },
    destroyed() {
        this.$el.parentNode.removeChild(this.$el)
        setTimeout(() => {
            this.$alert({
                title: 'Hello'
            })
        }, 500)
    },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.weui-mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}

.weui-mask_transparent {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.weui-dialog {
  position: fixed;
  z-index: 5000;
  width: 80%;
  max-width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #ffffff;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
}
.weui-dialog__hd {
  padding: 1.3em 1.6em 0.5em;
}
.weui-dialog__title {
  font-weight: 400;
  font-size: 18px;
}
.weui-dialog__bd {
  padding: 0 1.6em 0.8em;
  min-height: 40px;
  font-size: 15px;
  line-height: 1.3;
  word-wrap: break-word;
  word-break: break-all;
  color: #999999;
}
.weui-dialog__bd:first-child {
  padding: 2.7em 20px 1.7em;
  color: #353535;
}
.weui-dialog__ft {
  position: relative;
  line-height: 48px;
  font-size: 18px;
  display: flex;
}
.weui-dialog__ft:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #999999;
  color: #999999;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}
.weui-dialog__btn {
  display: block;
  flex: 1;
  color: #3cc51f;
  text-decoration: none;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.weui-dialog__btn:active {
  background-color: #eeeeee;
}
.weui-dialog__btn:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  border-left: 1px solid #999999;
  color: #999999;
  transform-origin: 0 0;
  transform: scaleX(0.5);
}
.weui-dialog__btn:first-child:after {
  display: none;
}
.weui-dialog__btn_default {
  color: #353535;
}
.weui-dialog__btn_primary {
  color: #0bb20c;
}
.weui-skin_android .weui-dialog {
  text-align: left;
  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);
}
.weui-skin_android .weui-dialog__title {
  font-size: 21px;
}
.weui-skin_android .weui-dialog__hd {
  text-align: left;
}
.weui-skin_android .weui-dialog__bd {
  color: #999999;
  padding: 0.25em 1.6em 2em;
  font-size: 17px;
  text-align: left;
}
.weui-skin_android .weui-dialog__bd:first-child {
  padding: 1.6em 1.6em 2em;
  color: #353535;
}
.weui-skin_android .weui-dialog__ft {
  display: block;
  text-align: right;
  line-height: 42px;
  font-size: 16px;
  padding: 0 1.6em 0.7em;
}
.weui-skin_android .weui-dialog__ft:after {
  display: none;
}
.weui-skin_android .weui-dialog__btn {
  display: inline-block;
  vertical-align: top;
  padding: 0 0.8em;
}
.weui-skin_android .weui-dialog__btn:after {
  display: none;
}
.weui-skin_android .weui-dialog__btn:active {
  background-color: rgba(0, 0, 0, 0.06);
}
.weui-skin_android .weui-dialog__btn:visited {
  background-color: rgba(0, 0, 0, 0.06);
}
.weui-skin_android .weui-dialog__btn:last-child {
  margin-right: -0.8em;
}
.weui-skin_android .weui-dialog__btn_default {
  color: #808080;
}

@media screen and (min-width: 1024px) {
  .weui-dialog {
    width: 35%;
  }
}
</style>
