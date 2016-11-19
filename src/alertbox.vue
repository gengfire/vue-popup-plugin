<style scoped>
.blackcover{position:fixed;width:100%;height:100%;left:0;top:0;z-index:9;background:rgba(0,0,0,.26);}
.ui-alertbox{width:100%;position:fixed;left:0;top:50%;text-align:center;-webkit-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-o-transform:translate3d(0-50%,0);transform:translate3d(0,-50%,0);z-index:10;}
.ui-alertbox .alertbox{max-width:75%;min-width:40%;margin:0 auto;background:#fff;box-shadow: 0 0 .2rem #b1b1b1;border-radius:.08rem;display: inline-block;}
.ui-alertbox .alert-title{font-weight:bold;line-height:1.4em;padding:.1rem .08rem 0;}
.ui-alertbox .ui-alertbox-desc{font-size:.12rem;padding:.08rem .14rem;line-height:1.5em;word-break:break-all;}
.ui-alertbox .alert-btn{line-height:2.6em;border-top:1px solid #d8d8d8;}
.ui-alertbox .alert-btn>div{width:100%;}
.ui-alertbox .alert-btn>div:last-child{font-weight:bold;color:#1290ff;}
.ui-alertbox .alert-btn>div:nth-of-type(2){border-left:1px solid #d8d8d8;}
.box{display: -webkit-box;display: flex;}
.scale-enter-active{animation:scaleIn .4s ease;}
.scale-leave-active{animation:scaleOut .3s ease;}
.fade-enter-active{animation:fadein .6s ease;}
@keyframes scaleIn{
  from {transform:scale(.5);opacity:0;}
  to {transform:scale(1);opacity:1;}
}
@keyframes scaleOut{
  from {transform:scale(1);opacity:1;}
  to {transform:scale(1.1);opacity:0;}
}
</style>
<template>
  <div>
    <transition name="fade">
      <div class="blackcover" v-if="coverVisible" @click="close(2)"></div>
    </transition>
    <div class="ui-alertbox">
      <transition name="scale">
        <div v-if="visible">
          <div class="alertbox">
            <div class="alert-title">{{title}}</div>
            <p class="ui-alertbox-desc">
              {{content}}
            </p>
            <div class="alert-btn box">
              <div class="cencel" @click="close(2)" v-if="cancel">{{cancel}}</div>
              <div class="ok" @click="close(1)">{{confirm}}</div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        coverVisible: false,
        visible: false,
      };
    },
    methods: {
      close(index) {
        this.visible = false;
        if (typeof this.onHide === 'function') this.onHide(index);
        this.$el.addEventListener('webkitAnimationEnd', () => {
          this.$destroy(true);
          this.$el.parentNode.removeChild(this.$el);
        });
      }
    }
  };
</script>