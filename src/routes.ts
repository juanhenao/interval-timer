import vueRouter from 'vue-router';
import Timer from './components/Timer.vue';
import Add from './components/timer/Add.vue'

const routes = [
    {
        path: '/',
        component: Timer
    },
    {
        path: '/add',
        component: Addg
    }
]

export default new vueRouter({
    routes
});

