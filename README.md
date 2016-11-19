npm install vue-popup-plugin

```javascript
import {Tips, Loading, AlertBox} from 'vue-popup-plugin';
Vue.use(Tips);
Vue.use(Loading);
Vue.use(AlertBox);

//tips
this.$tips('some tips');

//loadding icon
this.$loading(); //show it

this.$loading(1); //close it

//alert
this.$alert('content', 'title', ['cancel', 'confirm'], function(){  //content is needed
    //when click confirm btn
});

this.$alert('content', ['ok'], function(){  //content is needed
    //when click ok btn
});
```
