import Vue from 'vue';
let LoadingConstructor = Vue.extend(require('./loading.vue'));

let count = 0;
let instance;

let Loading = (type) => {
  if ( !type && count === 0 ) {  //loading
    count ++;
    instance = new LoadingConstructor({
      data: {
        coverVisible: true,
        visible : type ? false : true
      }
    });
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
  } else if ( type && count === 1 ) {  // remove
    count = 0;
    instance.vm.visible = false;
    document.body.removeChild(instance.vm.$el);
  }
};

module.exports = Loading;