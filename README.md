```javascript
import {Tips, Loading, AlertBox} from './popup/index';
Vue.use(Tips);
Vue.use(Loading);
Vue.use(AlertBox);

//tips
this.$tips('some tips');

//loadding icon
this.$loading(); //show it

this.$loading(1); //close it

//alert
this.$alert('content', 'title', ['ok', 'cancel'], function(){  //content is needed
    //when click ok btn
});
```
