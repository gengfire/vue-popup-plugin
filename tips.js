import Vue from 'vue';
let TipsConstructor = Vue.extend(require('./tips.vue'));

let instances = [];
let count = 1;

var Tips = function(options) {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      tips: options
    };
  }
  const userOnHide = options.onHide;
  const id = 'Tips-' + count++;

  options.onHide = function() {
    Tips.hide(id, userOnHide);
  };

  const instance = new TipsConstructor({
    data: options
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instances.push(instance);
};

Tips.hide = function(id, onHide) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof onHide === 'function') onHide(instances[i]);
      instances.splice(i, 1);
      break;
    }
  }
};

module.exports = Tips;