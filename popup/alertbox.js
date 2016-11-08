import Vue from 'vue';
let AlertBoxConstructor = Vue.extend(require('./alertbox.vue'));

let instances = [];
let count = 1;

let AlertBox = (content, ...options) => {
  let title = '温馨提示', confirm = '确定', cancel=false, callback;
  for (let v of options) {
    if (typeof v === 'function') {
      callback = v;
    } else if (typeof v === 'object') {
      confirm = v[0];
      cancel = v[1];
    } else {
      title = v;
    }
  }

  const id = 'AlertBox-' + count++;

  const instance = new AlertBoxConstructor({
    data: {
      content: content,
      title: title,
      confirm: confirm,
      cancel: cancel,
      onHide: (index) => {
        if (index ===1) callback && callback();
        AlertBox.hide(id);
      }
    }
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.coverVisible = instances.length === 0 ? true : false;
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instances.push(instance);
};

AlertBox.hide = function(id) {
  for (let i in instances) {
    if (id === instances[i].id) {
      instances.splice(i, 1);
      break;
    }
  }
};

module.exports = AlertBox;