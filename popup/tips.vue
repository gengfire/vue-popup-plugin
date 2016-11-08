<style scoped>
.ui-tips{width:100%;position:fixed;left:0;bottom:8%;text-align:center;pointer-events:none;}
.ui-tips>.ui-tips-desc{border-radius:.03rem;font-size:.14rem;padding:.1rem .14rem;line-height:1.5em;max-width:75%;display:inline-block;box-shadow:0 0 .2rem rgba(0, 0, 0,.3);background-color:rgba(0, 0, 0,.75);color:#fff;word-break:break-all;}
.scale-enter-active{
  animation:scaleIn .4s ease;
}
.scale-leave-active{
  animation:scaleOut .3s ease;
}
@keyframes scaleIn{
  from {transform:scale(.5);opacity:0;}
  to {transform:scale(1);opacity:1;}
}
@keyframes scaleOut{
  from {transform:scale(1);opacity:1;}
  to {transform:scale(1.3);opacity:0;}
}
</style>
<template>
  <div>
    <transition name="scale">
      <div v-if="visible" :class="['ui-tips']">
        <p class="ui-tips-desc">
          {{tips}}
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      timeout: 3000,
      timer: null,
      closed: false,
      tips: ''
    };
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        if (typeof this.onHide === 'function') this.onHide(this);
        this.$el.addEventListener('webkitAnimationEnd', () => {
          this.$destroy(true);
          this.$el.parentNode.removeChild(this.$el);
        });
      };
    }
  },
  methods: {
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.timeout > 0) {
        this.timer = setTimeout(() => {
          this.closed = !this.closed;
        }, this.timeout);
      }
    }
  },
  mounted() {
    this.startTimer();
  }
};
</script>
