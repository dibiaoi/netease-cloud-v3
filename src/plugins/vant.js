import Vue from "vue";
import "vant/lib/index.css";
import {
  Search,
  ActionSheet,
  Swipe,
  SwipeItem,
  Button,
  Checkbox,
  CheckboxGroup,
  PullRefresh,
  Icon,
  List,
  Cell,
  CellGroup,
  Tab,
  Tabs,
  Field,
  Form,
  Toast,
  PasswordInput,
  NumberKeyboard,
  Image as VanImage
} from "vant";

Vue.use(Tab);
Vue.use(Form);
Vue.use(Toast);
Vue.use(VanImage);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(List);
Vue.use(Search);
Vue.use(Button);
Vue.use(ActionSheet);
Vue.use(PullRefresh);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(PasswordInput).use(NumberKeyboard);

Vue.prototype.$Toast = Toast;
