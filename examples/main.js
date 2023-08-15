import { createApp } from 'vue';
import TDesign from 'tdesign-vue-next';
import formCreate from '@form-create/tdesign';
import App from './App.vue';
import FcDesigner from '../src/index';


const app = createApp(App);
app.use(TDesign)
// app.use(naive, { size: 'small' });
app.use(formCreate);
app.use(FcDesigner);


app.mount('#app')
