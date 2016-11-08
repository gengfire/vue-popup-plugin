import Vue from 'vue';

module.exports = {
  Tips:()=>{
    Vue.prototype.$tips = require('./tips');
  },
  AlertBox:()=>{
    Vue.prototype.$alert = require('./alertbox');
  },
  Loading:()=>{
    Vue.prototype.$loading = require('./loading');
  }
}