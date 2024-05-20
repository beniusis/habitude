import { createRouter, createWebHistory } from 'vue-router';
import { isDayDisabled } from '@/lib/utils';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory('/habitude/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/day/:date',
      name: 'day',
      component: () => import('@/views/DayView.vue'),
      beforeEnter: (to, _, next) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;

        if (isDayDisabled(to.params.date)) {
          next({ name: 'home' });
        } else if (regex.test(to.params.date)) {
          next();
        } else {
          next({
            name: 'not-found',
            params: { pathMatch: to.path.substring(1).split('/') }
          });
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/components/PageNotFound.vue')
    }
  ]
});

export default router;
