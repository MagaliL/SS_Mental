import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@primeuix/themes/aura';
import '@primevue/themes/lara';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'; // Para los íconos
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
// import 'primevue/resources/primevue.css';

import ToastService from 'primevue/toastservice';

import '@/assets/styles.scss';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {

    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');
