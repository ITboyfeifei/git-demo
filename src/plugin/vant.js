import Vue from 'vue';
import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Icon,
  Toast ,
  List ,
  Image ,
  Swipe, 
  SwipeItem,
  Stepper 
} from 'vant';
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(List);
Vue.use(Image);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Stepper);

Vue.prototype.$Toast=Toast